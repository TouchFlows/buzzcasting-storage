import { IStorageOptions } from 'buzzcasting-utils';
import { default as DexieClient } from './dexie.js';
import { default as KeyvalClient } from './keyval.js';
import { default as LocalStorageClient } from './local-storage.js';
import { default as SessionStorageClient } from './session-storage.js';
import { default as WindowClient } from './window.js';
/**
 * The backend clients are structurally similar but independently typed - there
 * is no shared interface, only this union (see
 * documentation/storage-backends.md).
 */
export type StorageClient = DexieClient | KeyvalClient | LocalStorageClient | SessionStorageClient | WindowClient;
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
export declare function createStorageClient(options: IStorageOptions): StorageClient | null;
//# sourceMappingURL=factory.d.ts.map