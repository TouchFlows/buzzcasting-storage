# Known issues and inconsistencies

Concrete, confirmed issues in the current codebase — not hypothetical concerns. Flagged here so they're not silently rediscovered (or copy-pasted forward into new code) one at a time. The two `local`/`session` storage bugs are documented in [storage-backends.md](./storage-backends.md) since they're backend-specific; everything else is here.

## API surface naming/shape mismatches

- **`ApiClient.loadDashboards` doesn't fetch dashboards.** Despite the name, it calls `GET /api/{version}/widgets/{id}` (using the `API.WIDGETS` constant, not a dashboards one) and wraps the result as `{ data: { dashboards: json } }`. `BuzzcastingStorageManager.loadDashboards()` inherits the same mislabeling. If you're looking for "the thing that loads a tenant's actual dashboard *records*", this isn't a dashboards endpoint at all — it's the widget list, relabeled.
- **`ApiClient.loadSlide` sets `query.type = "slides"`** (plural, suppressed with `@ts-expect-error`) — `"slides"` is not a member of `IQuery.type`'s union in `buzzcasting-utils` (only singular `"slide"` is valid). Compare `loadPresentation`, which correctly sets `query.type = "presentations"` (which *is* a valid union member — the plural/singular convention is genuinely inconsistent across the union itself, not just this call site, but this particular call sets a value the type system doesn't even recognize).
- **`getHash`/`setHash` on `BuzzcastingStorageManager` take an unused `resource: string` first parameter** that's never referenced in either method body — likely a leftover from an earlier signature.

## The cloud/series/messages response-shape asymmetry

Covered in depth in [architecture.md](./architecture.md) — cloud is double-wrapped (`{data:{cloud:...}}`), series is stored flat/unwrapped, messages passes the entire raw API response through. Repeating here because it's the single most likely thing to bite someone adding a fourth live-data type by copying an existing `case` block in `processResponse`.

## Dead / stub code

- **Five completely empty files**: `src/api/index.ts`, `request.ts`, `sse.ts`, `stream.ts`, `ws.ts` — 0 bytes each, not imported by anything. The names (SSE/WebSocket/streaming) suggest alternate transports that were planned but never built, sitting alongside the one streaming path that *does* exist (`ApiClient.ndjson`).
- **`ApiClient.ndjson()` doesn't actually process the stream it reads.** It iterates `readNDJSONStream(response.body)` and only `console.log`s each event — no storage write, no broadcast. `BuzzcastingStorageManager.stream()` (which calls it) is itself only reachable via a raw `"stream"` string case in the broadcast-message switch (see below), so this whole path is effectively an unfinished feature, not something currently exercised by any real caller.
- **Dexie schema tables `channel`, `display`, `monitor`, `player`, `template`** are declared in `.stores()` but have no corresponding methods anywhere in `DexieClient` — dormant schema (see [storage-backends.md](./storage-backends.md)).
- **`api-extractor.json`** is present and fully configured (points at `<projectFolder>/lib/index.d.ts`, which doesn't exist — the real build output is `dist/`) but no `package.json` script invokes `api-extractor`. The actual public `.d.ts` is produced by `vite-plugin-dts({ rollupTypes: true })` in `vite.config.ts`. This config file appears to be vestigial tooling left over from a different build setup.

## Style/consistency nits worth knowing about

- **`BuzzcastingStorageManager.actions()`'s broadcast-message switch mixes enum members and a raw string literal**: `case "stream": //EVENTS.STREAM` — `EVENTS.STREAM` does exist and equals `"stream"`, but the raw string is used instead of the enum member, so a future rename of that enum value wouldn't be caught by the type system here.
- **`BuzzcastingStorageReader`'s type-mismatch warnings use `console.warn` directly**, bypassing the shared `log()` utility (from `buzzcasting-utils`) that every other file in this package uses — meaning these particular warnings aren't subject to whatever log-level gating `log()`/`options.loglevel` provides elsewhere.
- **The storage-backend selection `switch` is duplicated verbatim** in both `BuzzcastingStorageManager`'s and `BuzzcastingStorageReader`'s constructors (see [storage-backends.md](./storage-backends.md)) — no shared factory function exists, so any future backend addition or bug fix (like the `local`/`session` swap) has to be applied in two places.
- **`Widget` imports `BuzzcastingStorageReader` from `".."`** — i.e. through this package's own `src/index.ts` barrel — rather than a direct relative import from `../reader`. Works today, but couples `Widget`'s module resolution to the barrel continuing to re-export `BuzzcastingStorageReader`.

### ✅ `Widget.destroy()` never unsubscribed from the manager's `subscribers` map — fixed

Used to only close its `BroadcastChannel`, with no way for `BuzzcastingStorageManager` to ever learn a widget was gone — the manager kept fetching/broadcasting on behalf of every widget ever mounted for the life of the session, since nothing called `deleteSubscriber`/`deleteSubscribers` from the manager side. In `buzzcasting-app`'s builder this was directly observable: switching slides never removed the previous slide's widgets from the fetch list, so it only ever grew. Fixed by adding `Widget.unsubscribe()` (posts a new `EVENTS.UNSUBSCRIBE` broadcast, the counterpart to `subscribe()`'s `EVENTS.SUBSCRIBE`), called from `destroy()`; `BuzzcastingStorageManager.actions()` now routes `EVENTS.UNSUBSCRIBE` to `deleteSubscriber()`. The consuming side (`destroy()` actually being called when a widget unmounts) lives in `buzzcasting-app`, not this package — see `documentation/architecture.md`'s data-flow section for the four widget shells this was wired into.

## Test coverage

`test/constants.test.ts` is still a tautology (hardcodes both the expected and actual value) and should either be fixed to import the real `STORAGE` enum or removed. `test/subscribers.test.ts` (added alongside the `Widget.destroy()`/unsubscribe fix above) is the first real coverage in the package — of `BuzzcastingStorageManager.addSubscriber`/`deleteSubscriber` and the `actions()` broadcast-message routing, driven through a real second `BroadcastChannel` instance rather than calling private methods directly. Everything else — `Widget`, `BuzzcastingStorageReader`, `ApiClient`, every storage backend — still has no test coverage; `subscribers.test.ts`'s pattern (a lightweight `storage: 'none'` options object to skip real backend construction) is a reasonable starting point for extending coverage incrementally as those areas get touched.

## README usage example is stale

The root `README.md`'s example imports a default export that doesn't exist (`import BuzzcastingStorageManager, {...} from 'buzzcasting-storage'` — this package has only named exports), references `IMessages`/`IStorageManager` types that aren't exported by this package (the actual options type is `IStorageOptions`, and `IMessages` is a `buzzcasting-utils` type not re-exported here), and calls `storageManager.getMessages(query)`, which isn't a method on `BuzzcastingStorageManager` (that method exists only on `Widget`/`BuzzcastingStorageReader`).
