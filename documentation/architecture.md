# Architecture: the widget subscription/caching pipeline

`buzzcasting-storage` is a thin transport + cache layer sitting between `buzzcasting-app` (or a tenant repo) and the BuzzCasting backoffice API. It has no domain types of its own — every shape it moves around (`IQuery`, `IResponse`, `IStorageOptions`, `ISeries`, `ICloud`, `IMessages`, …) is imported from the sibling package `buzzcasting-utils`; this repo is structurally just plumbing built on that package's vocabulary.

`docs/` in this repo is typedoc-generated API reference (`npm run docs`) and gets overwritten on every run — don't hand-edit it. This `documentation/` folder is for architectural write-ups that don't fit a single class's auto-generated reference, mirroring the same convention `buzzcasting-app` uses.

## The three public classes

The package's entire public surface (`src/index.ts`, confirmed against the built `dist/buzzcasting-storage.d.ts`) is exactly three classes — everything else under `src/` is internal:

```
BuzzcastingStorageManager   — one per app/presentation, the orchestrator
Widget                      — one per rendered widget component
BuzzcastingStorageReader    — internal to Widget, a thin per-type dispatcher
```

```
                    ┌─────────────────────────────┐
                    │  BuzzcastingStorageManager  │  (app-level singleton)
                    │  - ApiClient                │
                    │  - a storage backend (sm)   │
                    │  - subscribers{} map        │
                    └───────────┬─────────────────┘
                                │ BroadcastChannel(presentation)
                    ┌───────────┴─────────────────┐
                    │                              │
              ┌─────▼─────┐                 ┌─────▼─────┐
              │  Widget    │                 │  Widget    │   (one per <xxx-widget> element)
              │ - own      │                 │ - own      │
              │   Reader   │                 │   Reader   │
              └─────┬──────┘                 └─────┬──────┘
                    │                               │
              BuzzcastingStorageReader        BuzzcastingStorageReader
                    │                               │
                    └───────────────┬───────────────┘
                                     │
                          a storage backend (sm)
                    (Dexie / Keyval / LocalStorage / SessionStorage / Window)
```

Both `BuzzcastingStorageManager` and each `Widget`'s own `BuzzcastingStorageReader` independently construct a storage-backend client from the same `IStorageOptions.storage` setting — they don't share a client *instance*, only the same underlying persisted store (e.g. the same Dexie database name, `options.app`). A `Widget` never talks to `BuzzcastingStorageManager` directly, and never touches `ApiClient` — it only ever reads from the storage backend via its own `Reader`, and it triggers a fresh fetch by asking, over the broadcast channel, for the manager to go do one.

## Data flow: subscribe → fetch → hash-diff → broadcast → re-read

This is the core cycle, and it's a "ping, then re-pull" pattern, not a "push the payload" one — a broadcast message never carries the actual data, only a signal that *something* changed.

1. **`new Widget(element, callbacks)`** (`src/widget/index.ts`) builds an `IQuery` straight out of `element.dataset` (so `data-widget`/`data-dashboard`/`data-type` attributes on the host element *are* the query), opens a `BroadcastChannel` named after `window.__bc.opts.presentation`, and wires `onmessage`.
2. **`widget.subscribe()`** posts `{event: EVENTS.SUBSCRIBE, data: query}` on that channel — but only if `dashboard`, `widget`, and `type` are all set (an unconfigured widget never subscribes).
3. **`BuzzcastingStorageManager`**, listening on the *same* channel name (`options.presentation` — this is the coupling that makes widget and manager rendezvous: they must agree on the presentation id), receives the `SUBSCRIBE` event in its own `onmessage` handler (`actions()`) and adds the query to its in-memory `subscribers` map, keyed by widget id.
4. Something external calls `manager.update()` (or posts an `EVENTS.UPDATE` broadcast, which `actions()` also routes to `update()`) — this is the actual refresh trigger, e.g. an interval timer in the host app. `update()` fires `ApiClient.get()` for every subscriber whose `dashboard`/`widget`/`type` are all set, in parallel.
5. **`processResponse()`** is where the interesting logic lives, but only for **three** query types: `cloud`, `series`, `messages` (`API.CLOUD`/`API.SERIES`/`API.MESSAGES`). Every other `IQuery.type` value (`dashboard`, `widget`, `presentations`, `slide`, `preference`, `proxy`) is *not* routed through this hash-diffing pipeline at all — it's a 404 `"Bad request: type unknown"` if it ever reaches `processResponse`. Those other types are managed entirely through direct `get*`/`set*`/`load*`/`store*` passthrough methods on the manager instead (see below) — there's no broadcast/subscribe dance for them.
6. For each of the three handled types, `processResponse` hashes the new API response (`hashSum(...)`) and compares it to the previously-stored hash for that widget (kept in a dedicated `hashtable` Dexie table). **Same hash → 204, nothing written, nothing broadcast** (this is the whole point: avoid re-rendering/re-broadcasting when the backoffice returns identical data). **Different hash → write to the type's storage table, then `broadcastUpdate(201, resp)`** — which posts `{event: EVENTS.WIDGET_UPDATE, data: resp.query}` on the channel. Note: **the query, not the data**, is what's broadcast.
7. Every subscribed `Widget`'s `onmessage` handler receives that `WIDGET_UPDATE` event, and filters it down to itself (`update.dashboard === this.query.dashboard && update.widget === this.query.widget` — the channel is shared by every widget on the presentation, so this per-widget filter is mandatory, not an optimization). On a match, it calls `this.getData()` — which re-reads from the storage backend via its own `Reader`, not from the broadcast payload — and only then invokes the `callbacks` passed into its constructor (this is what actually updates the Stencil component's `@State`).
8. If the API call itself fails (`apiResp.success === false`, e.g. the backoffice is unreachable), `processResponse` doesn't give up — it falls back to reading whatever's already cached in the storage backend for that widget and still broadcasts a 201, so a widget degrades to "last known good data" rather than going blank on a transient API failure.

### ✅ Unsubscribing: the step this cycle was missing

Step 2 has a counterpart: `widget.unsubscribe()` posts `{event: EVENTS.UNSUBSCRIBE, data: query}`, and `BuzzcastingStorageManager.actions()` routes it to `deleteSubscriber()`, removing that widget's entry from the `subscribers` map. `Widget.destroy()` calls it automatically. This used to not exist at all — `destroy()` only closed the `BroadcastChannel`, so the manager's `subscribers` map only ever grew for the life of the session, and `update()` (step 4) kept re-fetching every widget ever mounted, not just the ones currently on screen. Most visible in `buzzcasting-app`'s builder: switching slides unmounts the previous slide's widget components, but without this, none of them were ever removed from the fetch list.

The fix is split across both repos: this package added `unsubscribe()`/the `UNSUBSCRIBE` routing (above); `buzzcasting-app` calls `this.widget?.destroy()` from each of the four widget shells' (`cards-widget`/`cloud-widget`/`series-widget`/`graph-widget`) `disconnectedCallback()` — the one place a mounted widget component reliably learns it's being removed. `contents-widget` doesn't need this: it never constructs a `Widget` in the first place (see "Why a `Widget` can only render cloud/series/messages data" below).

**A second, unrelated `subscribers` exists in `buzzcasting-app` — don't conflate the two.** `buzzcasting-app.tsx` keeps its own `window.__bc.subscribers` (a `Map`, not this package's `subscribers` object), populated by a plain DOM `CustomEvent(EVENTS.SUBSCRIBE)` that some (not all) inner components emit directly — a completely separate path from the `Widget`/`BroadcastChannel` mechanism documented above. It has the identical never-pruned-on-unmount problem this fix addresses, but its only consumer, `window.__bc.api.worker()`, is itself dead code (never called anywhere) — so today it's an inert, session-long-growing `Map` with no live effect, not the cause of the growing-fetch-list symptom this fix was actually chasing. Left as-is; fixing it would mean adding `unsubscribe.emit()` calls to every inner component that currently emits `subscribe.emit()`, a larger and separate change from this one.

## Why a `Widget` can only render cloud/series/messages data

`BuzzcastingStorageReader` (the class every `Widget` actually talks to) exposes exactly three methods: `getCloud`, `getMessages`, `getSeries` — nothing else. All the other domain concepts this package can fetch/cache (dashboards, widgets-as-records, slides, presentations, preferences, images) are reachable only through `BuzzcastingStorageManager`'s own direct methods, which a `Widget` never calls. This is a hard architectural constraint, not an oversight: a rendered widget component is, by construction, only ever a view onto cloud/series/messages data. (`buzzcasting-app`'s `graph-widget` — see its own `documentation/graph-widget.md` — is built entirely on top of this same constraint: it still only ever fetches `series` or `cloud`.)

## The cloud/series/messages response-shape asymmetry

`processResponse` handles each of the three live-data types with its own hand-rolled envelope shape — these are **not** interchangeable, and copying one `case` block to add a fourth type would silently produce the wrong shape:

- **cloud**: double-wrapped. `apiResp.data` (the raw API payload) is nested one level before being stored: `{ data: { cloud: apiResp.data } }`. `DexieClient.getCloud` reads it back out expecting exactly that nesting.
- **series**: passed through flat/unwrapped — `apiResp.data` is stored and read back as-is, no `{ series: ... }` wrapper.
- **messages**: the entire raw `apiResp` object (not just `.data`) is handed to `setMessages`, which internally reads `data.data.messages` — a third, distinct convention again.

This asymmetry is self-consistent within each type's own write/read pair, but inconsistent *across* types — see [known-issues.md](./known-issues.md) for this and other gotchas worth knowing before touching `processResponse` or `DexieClient`.

## Related reading

- [storage-backends.md](./storage-backends.md) — the five interchangeable storage backends, the Dexie schema, and what's cached vs. always-fresh.
- [known-issues.md](./known-issues.md) — real, confirmed bugs and inconsistencies in the current codebase, not hypothetical concerns.
