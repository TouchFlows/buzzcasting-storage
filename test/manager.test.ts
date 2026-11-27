import type { IStorageOptions } from "buzzcasting-utils";
import { API } from "buzzcasting-utils";
import { describe, expect, it } from "vitest";
import { BuzzcastingStorageManager } from "../src/manager";

function makeManager(): BuzzcastingStorageManager {
	const options: IStorageOptions = {
		app: "test",
		locale: "en",
		presentation: `test-${Math.random()}`,
		// Not a real backend: createStorageClient returns null for it, which
		// keeps construction light. processResponse's routing and its
		// no-backend branches are all reachable that way.
		storage: "none",
		version: "v4",
	};

	return new BuzzcastingStorageManager(options);
}

describe("buzzcastingStorageManager.processResponse", () => {
	it("returns 404 for a query type outside the hash-diff pipeline", async () => {
		const manager = makeManager();
		const result = await manager.processResponse(
			{
				data: {},
				query: { dashboard: "d1", type: "dashboard", widget: "w1" },
				success: true,
			},
			{},
		);

		expect(result.code).toBe(404);
	});

	it("returns 500 for messages when no backend is configured", async () => {
		const manager = makeManager();
		const result = await manager.processResponse(
			{
				data: null,
				message: "unauthorized",
				query: { dashboard: "d1", type: API.MESSAGES, widget: "w1" },
				success: false,
			},
			{},
		);

		expect(result.code).toBe(500);
	});

	it("returns 500 for cloud when no backend is configured", async () => {
		const manager = makeManager();
		const result = await manager.processResponse(
			{
				data: null,
				message: "unauthorized",
				query: { dashboard: "d1", type: API.CLOUD, widget: "w1" },
				success: false,
			},
			{},
		);

		expect(result.code).toBe(500);
	});

	it("does nothing on update() when no backend is configured", async () => {
		const manager = makeManager();
		manager.addSubscriber({
			dashboard: "d1",
			type: API.MESSAGES,
			widget: "w1",
		});

		await expect(manager.update({})).resolves.toBeUndefined();
	});
});
