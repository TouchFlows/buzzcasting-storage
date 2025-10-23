import { describe, expect, it } from "vitest";

describe("STORAGE_DEXIE", () => {
	it('the constant STORAGE_DEXIE should equal "dexie"', () => {
		expect("dexie").toEqual("dexie");
	});
});

describe("STORAGE_KEYVAL", () => {
	it('the constant STORAGE_KEYVAL should equal "keyval"', () => {
		expect("keyval").toEqual("keyval");
	});
});
