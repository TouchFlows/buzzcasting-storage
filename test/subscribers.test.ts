import { EVENTS } from "buzzcasting-utils";
import { describe, expect, it } from "vitest";

import { BuzzcastingStorageManager } from "../src/manager";

// 'none' isn't a real backend (see the constructor's storage switch) so `sm`
// stays null - keeps construction light, since these tests only exercise the
// subscribers list itself, not actual storage reads/writes.
const makeManager = () =>
	new BuzzcastingStorageManager({
		app: "test",
		locale: "en",
		presentation: `test-${Math.random()}`,
		// @ts-expect-error - deliberately not a real backend, see comment above
		storage: "none",
	});

const query = (widget: string) => ({
	dashboard: "d1",
	type: "messages",
	widget,
});

describe("BuzzcastingStorageManager subscribers", () => {
	it("addSubscriber adds an entry keyed by widget id", () => {
		const manager = makeManager();
		manager.addSubscriber(query("w1"));

		// @ts-expect-error - subscribers is private, read directly for the test
		expect(Object.keys(manager.subscribers)).toEqual(["w1"]);
	});

	it("deleteSubscriber removes exactly that widget's entry, leaving others", () => {
		const manager = makeManager();
		manager.addSubscriber(query("w1"));
		manager.addSubscriber(query("w2"));
		manager.deleteSubscriber(query("w1"));

		// @ts-expect-error - subscribers is private, read directly for the test
		expect(Object.keys(manager.subscribers)).toEqual(["w2"]);
	});

	it("re-adding the same widget id overwrites rather than duplicating", () => {
		const manager = makeManager();
		manager.addSubscriber(query("w1"));
		manager.addSubscriber(query("w1"));

		// @ts-expect-error - subscribers is private, read directly for the test
		expect(Object.keys(manager.subscribers)).toEqual(["w1"]);
	});

	it("a broadcast SUBSCRIBE message adds the widget, and a later UNSUBSCRIBE removes it - the bug this fixes: switching slides used to only ever grow this list, never shrink it", async () => {
		const presentation = `test-${Math.random()}`;
		const manager = new BuzzcastingStorageManager({
			app: "test",
			locale: "en",
			presentation,
			// @ts-expect-error - deliberately not a real backend, see makeManager above
			storage: "none",
		});
		manager.startBroadcastListener();

		// A separate channel instance, same name - mirrors real usage, where the
		// widget-side Widget class posts from its own BroadcastChannel(presentation),
		// not the manager's. A channel never receives its own posted messages.
		const widgetSide = new BroadcastChannel(presentation);

		widgetSide.postMessage({ event: EVENTS.SUBSCRIBE, data: query("w1") });
		await new Promise((r) => setTimeout(r, 10));
		// @ts-expect-error - subscribers is private, read directly for the test
		expect(Object.keys(manager.subscribers)).toEqual(["w1"]);

		widgetSide.postMessage({ event: EVENTS.UNSUBSCRIBE, data: query("w1") });
		await new Promise((r) => setTimeout(r, 10));
		// @ts-expect-error - subscribers is private, read directly for the test
		expect(Object.keys(manager.subscribers)).toEqual([]);

		widgetSide.close();
	});
});
