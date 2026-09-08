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
- **`Widget.destroy()` closes its `BroadcastChannel` but never unsubscribes** from `BuzzcastingStorageManager`'s in-memory `subscribers` map — the manager keeps fetching/broadcasting on behalf of a destroyed widget until something explicitly calls `deleteSubscriber`/`deleteSubscribers` from the manager side. If you're seeing phantom API calls for widgets that should no longer exist, this is why.
- **`Widget` imports `BuzzcastingStorageReader` from `".."`** — i.e. through this package's own `src/index.ts` barrel — rather than a direct relative import from `../reader`. Works today, but couples `Widget`'s module resolution to the barrel continuing to re-export `BuzzcastingStorageReader`.

## Zero real test coverage

The entire test suite (`test/constants.test.ts`) is a tautology — it hardcodes both the expected and actual value (`expect("dexie").toEqual("dexie")`) rather than importing and checking the real `STORAGE` enum from `buzzcasting-utils`, and it's the *only* test file in the package. There is no test coverage — mocked or otherwise — of `BuzzcastingStorageManager`, `Widget`, `BuzzcastingStorageReader`, `ApiClient`, or any storage backend. If you add tests here, there's no existing convention to follow beyond "Vitest, `describe`/`it`/`expect`" — you'll likely need to establish patterns for faking `BroadcastChannel`, `fetch`, and IndexedDB (e.g. via `fake-indexeddb`) from scratch.

## README usage example is stale

The root `README.md`'s example imports a default export that doesn't exist (`import BuzzcastingStorageManager, {...} from 'buzzcasting-storage'` — this package has only named exports), references `IMessages`/`IStorageManager` types that aren't exported by this package (the actual options type is `IStorageOptions`, and `IMessages` is a `buzzcasting-utils` type not re-exported here), and calls `storageManager.getMessages(query)`, which isn't a method on `BuzzcastingStorageManager` (that method exists only on `Widget`/`BuzzcastingStorageReader`).
