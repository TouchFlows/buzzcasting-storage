import { BuzzcastingStorageManager } from "./manager/index.js";
import { BuzzcastingStorageReader } from "./reader/index.js";
import Widget from "./widget/index.js";

declare global {
	interface Window {
		BuzzCasting: any;
		__bc: {
			DashboardData?: any;
			Preferences?: any;
			SlideData?: any;
			PresentationData?: any;
			WidgetData?: any;
			opts: any;
		};
	}
}

export { BuzzcastingStorageManager, BuzzcastingStorageReader, Widget };
