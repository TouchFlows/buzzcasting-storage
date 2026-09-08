# Storage backends

`IStorageOptions.storage` (a plain `string`, not literally typed to the `STORAGE` enum — nothing stops passing a garbage value, which silently leaves the backend client `null` and turns every `sm?.xxx()` call into a no-op) selects one of five backend clients, constructed identically — and independently — inside both `BuzzcastingStorageManager` and `BuzzcastingStorageReader`'s constructors (`src/manager/index.ts`, `src/reader/index.ts`):

| `STORAGE` value | Client | Persistence |
| --- | --- | --- |
| `dexie` | `DexieClient` (`src/storage/dexie.ts`) | IndexedDB, per-tenant database named after `options.app` |
| `keyval` | `KeyvalClient` (`src/storage/keyval.ts`) | IndexedDB via `idb-keyval`, single flat key-value store |
| `local` | *(see gotcha below)* | — |
| `session` | *(see gotcha below)* | — |
| `window` | `WindowClient` (`src/storage/window.ts`) | in-memory only, no persistence across reloads |

In production, `buzzcasting-app` hardcodes `storage: 'dexie'` (`src/global/options.ts`) — **Dexie is the only backend actually exercised today.** The other four exist in the codebase but aren't wired into any real deployment, which is relevant context for the bugs below: they're latent, not yet observed in production, precisely because nothing currently exercises them.

## ✅ `local`/`session` were swapped — fixed

`manager/index.ts` and `reader/index.ts` both had `STORAGE.LOCAL` constructing a `SessionStorageClient` and `STORAGE.SESSION` constructing a `LocalStorageClient` — confirmed via `git log -p` to have been wrong since the earliest commits in this repo's history, not a recent regression. Fixed in both places; `local` now correctly gets `LocalStorageClient` and `session` gets `SessionStorageClient`. Since production only ever configured `storage: 'dexie'` (`buzzcasting-app/src/global/options.ts`), this was latent rather than actively observed — nothing exercised the swap in practice, but anyone who did configure `storage: 'local'` expecting `window.localStorage` semantics was actually getting `window.sessionStorage` semantics, and vice versa.

## ✅ `LocalStorageClient`'s monkeypatch called itself — fixed

Independent of the swap above, `LocalStorageClient`'s constructor (`src/storage/local-storage.ts`) monkey-patched `Storage.prototype` with a bug: `setObject`/`getObject` called `this.setObject`/`this.getObject` recursively instead of the real `this.setItem`/`this.getItem` — an infinite-recursion stack overflow waiting to happen the first time either was actually invoked. Fixed to call `setItem`/`getItem`, matching what `SessionStorageClient`'s equivalent patch already did correctly.

## No shared interface, only duck typing

There's no common TypeScript interface or abstract base class for the backend contract — `DexieClient`/`KeyvalClient`/`LocalStorageClient`/`SessionStorageClient`/`WindowClient` are five structurally-similar but independently-typed classes, held in a plain union:

```ts
private sm: WindowClient | LocalStorageClient | SessionStorageClient | KeyvalClient | DexieClient | null;
```

Only `DexieClient` has genuine hash support (`getHash`/`setHash`/`createHash`/`clearHash` backed by a real `hashtable`). **Every other backend stubs these to `"none"`/`404`** — meaning the change-detection/de-dup optimization in `processResponse` (see [architecture.md](./architecture.md)) simply never triggers on `keyval`, `local`, `session`, or `window`: every fetch is treated as new data. `cleanMessages`/`hideMessage` are similarly no-ops (just `console.log`/`console.debug`) on every non-Dexie backend.

`WindowClient` reads from global objects (`window.__bc.WidgetData`/`DashboardData`/`SlideData`/`PresentationData`/`Preferences`) declared in this package's own `declare global` block — but only `WidgetData` is actually initialized in its constructor (as `new Set()`); the others are read from but never initialized here, so `getDashboard`/`getSlide`/`getPresentation`/`getPreference` on this backend will throw/return `undefined` unless something else populates those globals first.

## Dexie schema (the only backend actually used in production)

Current schema version: **19** (`src/storage/dexie.ts`), one Dexie database per tenant, named after `options.app`:

```ts
this.db.version(19).stores({
  channel: "id,slide_index",
  cloud: "id,dashboard_id",
  dashboard: "id,name,update",
  display: "id,monitor_id,presentation_id,colstart,colend,rowstart,rowend",
  hashtable: "id, hash",
  images: "id,basename,extension,size,type,url",
  messages: "id,utc,expires",
  monitor: "id,player_id,cols,rows,order,width,height,physicalwidth,physicalheight,devicePixelRatio,screenLeft,screenTop,orientation,monitor",
  player: "id,title,name,location",
  preference: "id,value,update",
  presentation: "id,name,update",
  series: "id,dashboard_id",
  slide: "id,name,presentation_id,order_index,json,html,update",
  template: "id,name,json,update",
  topics: "[widget_id+message_id],message_id,widget_id,dashboard_id,title,engagement,impressions,reach,sentiment,visible,approved,utc,expires",
  widget: "id,name,dashboard_id,type,update",
});
```

Almost every domain concept gets its own dedicated table (`cloud`, `series`, `dashboard`, `widget`, `presentation`, `slide`, `preference`, `images`) — a straightforward 1:1 mapping to `IQuery.type`-adjacent concepts. Two deliberate exceptions:

- **`messages` is split across two tables.** Raw message payloads live in `messages` (keyed by `id`); per-widget visibility/moderation/engagement metadata lives in a separate `topics` table with a **compound primary key** (`[widget_id+message_id]`). `getMessages` does an actual join: query `topics` by `widget_id` plus a time-window/visibility filter, then look up each matched `message_id` in `messages`. `setMessages` writes both tables and also updates *every other* topic's visibility from the response's `data.topics` — cross-widget moderation propagates through this table.
- **`hashtable`** is a small side-table (`id, hash`) that exists purely to support the change-detection hashing described in [architecture.md](./architecture.md) — keyed by widget id, storing the last-seen `hashSum()` value.

`channel`, `display`, `monitor`, `player`, `template` are declared in the schema but have **no corresponding read/write methods anywhere in `DexieClient`** (or anywhere else in this package's `src/`) — dormant schema, either provisioned for a different consumer of the same database or genuinely vestigial. Don't assume these tables are wired up to anything just because they're declared.

## Staleness model: cache-forever until told otherwise

There is no TTL check on *read* for any table, on any backend — `getCloud`/`getSeries`/`getMessages` return whatever's already stored, unconditionally. Two things can invalidate a Dexie row:

1. **`cleanMessages()`** (called only from `BuzzcastingStorageManager.cleanMessages()`, which the host app must invoke explicitly — there is no internal timer in this package) deletes rows from `messages`/`topics` whose `expires` timestamp (unix seconds) is in the past. Default retention passed from the manager is 40 days (`86400 * 40`) if not overridden.
2. **A new API fetch producing a different hash** (the `processResponse` cycle in [architecture.md](./architecture.md)) — this is the only path that refreshes `cloud`/`series` data; nothing invalidates them purely by age.

Every other table (`dashboard`, `widget`, `presentation`, `slide`, `preference`, `images`) has no expiry logic at all — once written, a row is cached indefinitely until explicitly overwritten or deleted by a direct `set*`/`delete*` call.
