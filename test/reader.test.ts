import type { IQuery, IStorageOptions } from "buzzcasting-utils";
import { API } from "buzzcasting-utils";
import { describe, expect, it } from "vitest";
import { BuzzcastingStorageReader } from "../src/reader";

function options(): IStorageOptions {
	return {
		app: "test",
		locale: "en",
		presentation: `test-${Math.random()}`,
		storage: "none",
		version: "v4",
	};
}

function query(type: string): IQuery {
	return {
		dashboard: "d1",
		type,
		widget: "w1",
	} as IQuery;
}

// With storage: 'none' the backend is null, so any of these calls reaching the
// backend would come back undefined. Returning a shaped IResponse proves the
// type guard short-circuits first.
describe("storage reader type guards", () => {
	it("getCloud rejects a series query", async () => {
		const reader = new BuzzcastingStorageReader(options());
		const response = await reader.getCloud(query(API.SERIES));

		expect(response.success).toBe(false);
		expect(response.message).toContain("wrong method call for getCloud");
	});

	it("getMessages rejects a cloud query", async () => {
		const reader = new BuzzcastingStorageReader(options());
		const response = await reader.getMessages(query(API.CLOUD));

		expect(response.success).toBe(false);
		expect(response.message).toContain("wrong method call for getMessages");
	});

	it("getSeries rejects a messages query", async () => {
		const reader = new BuzzcastingStorageReader(options());
		const response = await reader.getSeries(query(API.MESSAGES));

		expect(response.success).toBe(false);
		expect(response.message).toContain("wrong method call for getSeries");
	});

	it("accepts a query whose type matches the method", async () => {
		const reader = new BuzzcastingStorageReader(options());
		// No backend configured: the call falls through to `sm?` and yields
		// undefined rather than the guard's shaped error response.
		expect(await reader.getSeries(query(API.SERIES))).toBeUndefined();
	});
});
