import { BuzzcastingStorageManager } from "./manager";
import { BuzzcastingStorageReader } from "./reader";
import Widget from "./widget";

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
