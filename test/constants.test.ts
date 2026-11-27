import { STORAGE } from "buzzcasting-utils";
import { describe, expect, it } from "vitest";

// `IStorageOptions.storage` is a plain string, so these wire values are the
// only thing tying `options.storage` to a backend. Pin them: createStorageClient
// compares against exactly these, and `STORAGE` lives in another package.
//
// `STORAGE.LOCAL` and `STORAGE.SESSION` are deliberately absent: they still
// exist in the enum (buzzcasting-utils has to drop them) but no longer select
// a backend. storage-factory.test.ts pins that they fall through to null.
describe("storage enum values", () => {
	it("keeps the backend keys the storage factory switches on", () => {
		expect(STORAGE.DEXIE).toBe("dexie");
		expect(STORAGE.KEYVAL).toBe("keyval");
		expect(STORAGE.WINDOW).toBe("window");
	});
});
