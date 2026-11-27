import { STORAGE } from "buzzcasting-utils";
import { describe, expect, it } from "vitest";

// `IStorageOptions.storage` is a plain string, so these wire values are the
// only thing tying `options.storage` to a backend. Pin them: createStorageClient
// compares against exactly these, and `STORAGE` lives in another package.
describe("storage enum values", () => {
	it("keeps the backend keys the storage factory switches on", () => {
		expect(STORAGE.DEXIE).toBe("dexie");
		expect(STORAGE.KEYVAL).toBe("keyval");
		expect(STORAGE.LOCAL).toBe("local");
		expect(STORAGE.SESSION).toBe("session");
		expect(STORAGE.WINDOW).toBe("window");
	});
});
