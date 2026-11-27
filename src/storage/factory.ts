import type { IStorageOptions } from "buzzcasting-utils";
import { STORAGE } from "buzzcasting-utils";
import DexieClient from "./dexie.js";
import KeyvalClient from "./keyval.js";
import LocalStorageClient from "./local-storage.js";
import SessionStorageClient from "./session-storage.js";
import WindowClient from "./window.js";

/**
 * The backend clients are structurally similar but independently typed - there
 * is no shared interface, only this union (see
 * documentation/storage-backends.md).
 */
export type StorageClient
	= | DexieClient
		| KeyvalClient
		| LocalStorageClient
		| SessionStorageClient
		| WindowClient;

/**
 * Build the storage client named by `options.storage`.
 *
 * Returns `null` for an unknown backend rather than throwing, which is
 * deliberate: `IStorageOptions.storage` is a plain `string`, and an
 * unrecognised value has always degraded to "every call is a no-op".
 *
 * Both `BuzzcastingStorageManager` and `BuzzcastingStorageReader` construct
 * their own client, so this lives in one place - previously the same switch was
 * duplicated in both constructors and had to be fixed twice.
 */
export function createStorageClient(
	options: IStorageOptions,
): StorageClient | null {
	switch (options.storage) {
		case STORAGE.DEXIE:
			return new DexieClient(options);
		case STORAGE.LOCAL:
			return new LocalStorageClient(options);
		case STORAGE.SESSION:
			return new SessionStorageClient(options);
		case STORAGE.KEYVAL:
			return new KeyvalClient(options);
		case STORAGE.WINDOW:
			return new WindowClient(options);
		default:
			return null;
	}
}
