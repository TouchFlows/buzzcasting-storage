# Moderation: hiding a message and excluding a cloud label

The storage-layer half of a feature that starts in `buzzcasting-app`'s UI: clicking a message card or a cloud-widget word opens a modal that either hides a message or asks the backend to exclude a label — see `buzzcasting-app`'s own `documentation/moderation.md` for the click → modal → event flow. This file covers what `BuzzcastingStorageManager.hideMessage()`/`hideLabels()` actually do once that event reaches this package, and a separate, easily-confused concept, the `MODERATION` enum.

## Hiding a message: a soft flag, local + remote, Dexie-only

`BuzzcastingStorageManager.hideMessage(query)` does both, in order:
```ts
await this.sm?.hideMessage(id, 0)      // local — see below
await this.api.hideMessage(query)      // remote — PUT .../messages/{id}?action=visible
```

**Only `DexieClient` actually implements the local half.** Its `hideMessage(id, visible)`:
```ts
await this.db.table(API.TOPICS).where("message_id").equals(id)
  .modify({ visible: visible ? 1 : 0 });
```
This is a **soft flag on the `topics` table** (keyed by `message_id`) — `visible: 0` — not a delete. The `messages` table (the actual message payload) is never touched. The other four backends (`keyval`, `local-storage`, `session-storage`, `window`) each have a stub that just logs `"hideMessage ... not implemented for ${storage}"` and does nothing — so on any tenant configured for one of those, hiding a message still reaches the remote API (the manager calls that unconditionally) but has **no local effect at all**; the message would keep reappearing from local cache until the next real API refetch overwrites it. In production, `storage:'dexie'` is the only backend actually used (per `buzzcasting-app`'s hardcoded default), so this gap is currently latent — see `documentation/storage-backends.md` for the broader context on how thin the other four backends are.

## Approving a message: local-only, same pattern as hide

`BuzzcastingStorageManager.approveMessage(query)` mirrors `hideMessage`'s local half exactly, but **deliberately has no remote call** — there's no known connect-next endpoint for this today, unlike hide:
```ts
public approveMessage = async (query: IQuery): Promise<void> => {
  const count = await this.sm?.approveMessage(query.id, query.approved ? 1 : 0);
  log(3, [...]);
};
```
`DexieClient.approveMessage(id, approved)` sets `topics.approved` (`modify({ approved: approved ? 1 : 0 })`) — the exact field the `MODERATION.APPROVED` read-filter checks (above). The other four backends get the same no-op stub `hideMessage` has, for consistency. This is what `buzzcasting-app`'s card-modal APPROVE button now calls, via `window.__bc.api.message.approve(query)` — see that repo's own moderation doc. Live-verified: both a direct `approveMessage` call and the full `EVENTS.APPROVE_MESSAGE` → listener → this method chain correctly flip a test row's `topics.approved` field in a real IndexedDB.

**What makes it actually disappear**: `DexieClient.getMessages()` filters:
```ts
if (this.options.moderation === MODERATION.APPROVED) {
  topicMessagesCollection.and(topic => topic.approved === 1);
} else {
  topicMessagesCollection.and(topic => topic.visible === 1);
}
```
So a hidden message (`visible: 0`) is excluded starting from the **next** call to `getMessages()` — not immediately. That next call happens whenever a `Widget` re-fetches (a `WIDGET_UPDATE` broadcast reaching it, from the periodic refresh timer or a real API update) — hiding a message doesn't itself trigger that broadcast (the websocket `hide-message` handler never fires a follow-up event), so "next refresh" is literal: the currently-rendered widget keeps showing the message until whatever normal refresh cycle comes next.

### ✅ The `approved` branch above was dead — fixed, and a deeper cause found along the way

This used to read `query?.approved === "true"` — checking for the literal string `"true"`, while `MODERATION.APPROVED`'s handling (`buzzcasting-utils`'s `moderation()`, below) set `query.approved = '1'`, a different string, so the two never matched and this branch never engaged.

Fixing the string mismatch alone wouldn't have been enough, though: `moderation()` is only ever called from each storage backend's own `subscribe(query)` method (e.g. `DexieClient.subscribe`) — and **`subscribe()` itself is never called from anywhere** in either this package or `buzzcasting-app` (confirmed by grep — the only `.subscribe()` call anywhere is `Widget.subscribe()`, an unrelated method on a different class that posts a `SUBSCRIBE` broadcast message). So `query.approved`/`query.delay` were never actually set on any query that reaches `getMessages()` in the first place — the string-mismatch bug was hiding a bigger one: the entire `moderation()`/`subscribe()` pairing is dead code, orphaned from the real read path.

Fixed by gating directly off `this.options.moderation` (the live, always-populated account setting) instead of a `query.approved` field nothing ever sets — see the code block above. `subscribe()`/`moderation()` are left as they were; re-wiring them to actually run is a separate, larger question this fix didn't need to answer.

## Excluding a cloud label: remote-only, no local implementation at all

```ts
public hideLabels = async (query: IQuery): Promise<IResponse> => {
  return await this.api.hideLabels(query);
};
```

Unlike `hideMessage`, this **bypasses `this.sm` (the storage backend) entirely** — there's no local call attempted, and no stub exists for it in *any* of the five storage backends (`dexie.ts`, `keyval.ts`, `local-storage.ts`, `session-storage.ts`, `window.ts` — grepped all five, zero hits). This is a stronger gap than `hideMessage`'s "implemented in one backend, stubbed in four others": for labels, nothing local is even attempted anywhere. `ApiClient.hideLabels(query)` sends `PUT .../api/{version}/{query.type}/{query.widget}` with a `custom_filters[i]=<label>`-encoded body — a one-shot request to the backoffice (connect-next); whether an excluded label actually stays excluded on the next cloud fetch is entirely up to that remote system persisting and re-applying the filter. Nothing in this package (or `buzzcasting-app`) remembers previously-excluded labels to resend them — confirmed by tracing `IQuery.labels` (only ever populated at hide-time, never read back into a subsequent `GET`) and `custom_filters` (appears only inside `hideLabels`'s own body-builder, never read anywhere else).

## The `MODERATION` enum: a different, deployment-time concept

```ts
export enum MODERATION { APPROVED = 'approved', BEFORE = 'before', DELAYED = 'delayed', NONE = 'none', REALTIME = 'realtime' }
```

`buzzcasting-utils`'s `moderation(options: IStorageOptions, query: IQuery): IQuery`, called from each storage backend's own `subscribe(query)` (e.g. `DexieClient.subscribe`) whenever `query.type === API.MESSAGES`:

- **`BEFORE`** — only admit messages before a daily cutoff (`options.beforeTime`), with an implicit lookback window (72h on Mondays to cover the weekend, 24h otherwise).
- **`DELAYED`** — attaches `query.delay` from `options.delay` (see "never actually read" below — this whole function is dead code today).
- **`APPROVED`** — sets `query.approved = '1'`.
- **`NONE`/`REALTIME`** — no special gating beyond an optional configured `query.period`.

This is a **per-account/deployment setting** (`window.__bc.opts.moderation`, set once on `<buzzcasting-app moderation="...">`), not something toggled by the hide-message/hide-labels modals — it decides which messages are ever fetched/displayed in the first place, before any widget renders them. The *only* place it intersects the hide feature is cosmetic: `card-modal.tsx` (in `buzzcasting-app`) reads it to decide which button to show, not to change what hiding does.

**As covered above, `moderation()` itself is never actually invoked** (its only caller, each backend's `subscribe(query)`, is itself never called) — so none of its four branches have ever run against a real query. The `getMessages()` fixes described above intentionally don't try to resurrect `moderation()`/`subscribe()`; they reimplement the two branches that mattered (`APPROVED`, `DELAYED`) directly against `this.options.moderation`, which *is* live. `BEFORE` and the plain `period` handling in `moderation()` remain unreachable — nothing in `getMessages()` currently applies a `beforeTime`-based cutoff or an account-configured `period` outside of what's already computed elsewhere in this method (the `since`/`before` window near the top). Wiring `subscribe()` up for real (or reimplementing `BEFORE` the same way `APPROVED`/`DELAYED` were here) is future work, not attempted as part of this fix.

### ✅ `DELAYED`'s computed value was ignored — fixed

`DexieClient.getMessages()` used to compute its own delay cutoff unconditionally:
```ts
query.before = this.options.delay !== 0 ? now - (this.options.delay || 0) : now;
```
This applied a delay to **every** account with a nonzero `delay` configured, regardless of `options.moderation` — while the `query.delay` `moderation()` computes specifically for `MODERATION.DELAYED` was never read here at all (and, per above, never actually set on a live query anyway). Fixed by gating directly on `this.options.moderation === MODERATION.DELAYED` (see the code block above) — a delay cutoff now only applies for accounts actually configured in delayed-moderation mode, matching the enum's intent, without depending on the dead `subscribe()` path.

## Related reading

- `buzzcasting-app`'s own `documentation/moderation.md` — the click → modal → event flow this all starts from.
- [storage-backends.md](./storage-backends.md) — why only Dexie is a fully-implemented backend in practice.
