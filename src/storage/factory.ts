import type { IStorageOptions } from "buzzcasting-utils";
import { STORAGE } from "buzzcasting-utils";
import DexieClient from "./dexie.js";
import KeyvalClient from "./keyval.js";
import WindowClient from "./window.js";

/**
 * The backend clients are structurally similar but independently typed - there
 * is no shared interface, only this union (see
 * documentation/storage-backends.md).
 */
export type StorageClient = DexieClient | KeyvalClient | WindowClient;

/**
 * Build the storage client named by `options.storage`.
 *
 * Returns `null` for an unknown backend rather than throwing, which is
 * deliberate: `IStorageOptions.storage` is a plain `string`, and an
 * unrecognised value has always degraded to "every call is a no-op".
 *
 * `STORAGE.LOCAL` and `STORAGE.SESSION` no longer select anything. They were
 * never real backends - no hash support, no messages/topics model, and their
 * clients monkey-patched the global `Storage.prototype` - so the clients were
 * removed. The enum members still exist in `buzzcasting-utils`; until they are
 * dropped there, a tenant configured with either value falls through to
 * `default` and behaves like any other unknown backend: no local cache, every
 * `sm?.x()` call a no-op.
 *
 * Both `BuzzcastingStorageManager` and `BuzzcastingStorageReader` construct
 * their own client, so this mapping lives in one place.
 */
export function createStorageClient(
	options: IStorageOptions,
): StorageClient | null {
	switch (options.storage) {
		case STORAGE.DEXIE:
			return new DexieClient(options);
		case STORAGE.KEYVAL:
			return new KeyvalClient(options);
		case STORAGE.WINDOW:
			return new WindowClient(options);
		default:
			return null;
	}
}
