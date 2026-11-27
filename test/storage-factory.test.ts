import type { IStorageOptions } from "buzzcasting-utils";
import { STORAGE } from "buzzcasting-utils";
import { describe, expect, it } from "vitest";
import { createStorageClient } from "../src/storage/factory";
import KeyvalClient from "../src/storage/keyval";

function options(storage: string): IStorageOptions {
	return {
		app: "test",
		locale: "en",
		presentation: `test-${Math.random()}`,
		storage,
		version: "v4",
	};
}

describe("createStorageClient", () => {
	it("builds the keyval client for STORAGE.KEYVAL", () => {
		expect(createStorageClient(options(STORAGE.KEYVAL))).toBeInstanceOf(
			KeyvalClient,
		);
	});

	it("returns null for the removed local backend", () => {
		// `local` and `session` no longer have a client at all. The enum value
		// still exists in buzzcasting-utils, so this is the guard that they
		// cannot quietly resurrect a backend.
		expect(createStorageClient(options(STORAGE.LOCAL))).toBeNull();
	});

	it("returns null for the removed session backend", () => {
		expect(createStorageClient(options(STORAGE.SESSION))).toBeNull();
	});

	it("returns null for an unrecognised backend instead of throwing", () => {
		// 'none' is what the tests and buzzcasting-app's builder use to run
		// without a real backend; every sm?.x() call is then a no-op.
		expect(createStorageClient(options("none"))).toBeNull();
	});

	it("returns null for an empty backend setting", () => {
		expect(createStorageClient(options(""))).toBeNull();
	});
});
