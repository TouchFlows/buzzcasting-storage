import type { IPreference, IQuery, IResponse, IStorageOptions } from "..";
import { API, CSS } from "..";
import { getKey, moderation } from "../utils/widget";

export default class WindowClient {
	public subscribers: Array<any> = [];
	private options: IStorageOptions;

	constructor(options: IStorageOptions) {
		this.options = options;
		window.BuzzCasting.WidgetData = new Set();
	}

	getCloud = async (query: IQuery): Promise<IResponse> => {
		const key = getKey(query);
		try {
			return window.BuzzCasting.WidgetData[key];
		} catch (error) {
			console.warn(
				"%capi",
				CSS.API,
				API.CLOUD,
				query.slide,
				query.widget,
				error
			);
			return { data: null, message: "Cloud Data error", success: false };
		}
	};

	getSeries = async (query: IQuery): Promise<IResponse> => {
		const key = getKey(query);
		try {
			return window.BuzzCasting.WidgetData[key];
		} catch (error) {
			console.warn(
				"%capi",
				CSS.API,
				API.SERIES,
				query.slide,
				query.widget,
				error
			);
			return { data: null, message: "Series Data error", success: false };
		}
	};

	getMessages = async (query: IQuery): Promise<IResponse> => {
		const key = getKey(query);
		try {
			return window.BuzzCasting.WidgetData[key];
		} catch (error) {
			console.warn(
				"%capi",
				CSS.API,
				API.MESSAGES,
				query.slide,
				query.widget,
				error
			);
			return { data: null, message: "Messages Data error", success: false };
		}
	};

	/**
	 * Update Cloud
	 * @param query IQuery
	 * @param data
	 * @returns number
	 */
	setCloud = async (query: IQuery, data: any) => {
		const key = getKey(query);
		try {
			window.BuzzCasting.WidgetData[key] = data;
			return 201;
		} catch (error) {
			console.error("%cstorage", CSS.STORAGE, "set", query, error);
			return 400;
		}
	};

	/**
	 * Update Series
	 * @param query IQuery
	 * @param data
	 * @returns number
	 */
	setSeries = async (query: IQuery, data: any): Promise<number> => {
		const key = getKey(query);
		try {
			window.BuzzCasting.WidgetData[key] = data;
			return 201;
		} catch (error) {
			console.error("%cstorage", CSS.STORAGE, "set", query, error);
			return 400;
		}
	};

	/**
	 * Update Messages
	 * @param query IQuery
	 * @param data
	 * @returns number
	 */
	setMessages = async (query: IQuery, data: any) => {
		const key = getKey(query);
		try {
			window.BuzzCasting.WidgetData[key] = data;
			return 201;
		} catch (error) {
			console.error("%cstorage", CSS.STORAGE, "set", query, error);
			return 400;
		}
	};

	cleanMessages = async (_retentionDuration: number): Promise<number> => {
		console.log("cleanMessages not implemented for ", this.options.storage);
		return await new Promise<number>((resolve) => resolve(0));
	};

	hideMessage = async (id: string, visible: number) => {
		console.debug(
			`hideMessage ${id} ${visible} not implemented for ${this.options.storage}`
		);
	};

	getDashboard = async (query: IQuery): Promise<IResponse> => {
		try {
			return window.BuzzCasting.DashboardData[query.id];
		} catch (error: any) {
			console.warn("%capi", CSS.API, API.DASHBOARD, query.id, error);
			return {
				data: null,
				message: `Dashboard ${query.id} load error: ${error.message}`,
				success: false,
			};
		}
	};

	setDashboard = async (query: IQuery) => {
		const key = `widget.${query.widget}`;
		try {
			window.BuzzCasting.DashboardData[key] = query;
			return {
				data: null,
				message: `Dashboard ${query.data.id} saved to storage`,
				success: true,
			};
		} catch (error: any) {
			console.error("%cstorage", CSS.STORAGE, API.DASHBOARD, query, error);
			return {
				data: null,
				message: `Dashboard ${query.data.id} save error: ${error.message}`,
				success: false,
			};
		}
	};

	getWidget = async (query: IQuery): Promise<IResponse> => {
		try {
			return window.BuzzCasting.WidgetData[query.id];
		} catch (error: any) {
			console.warn("%capi", CSS.API, API.WIDGET, query.id, error);
			return {
				data: null,
				message: `Widget ${query.id} load error: ${error.message}`,
				success: false,
			};
		}
	};

	setWidget = async (query: IQuery) => {
		const key = `widget.${query.widget}`;
		try {
			window.BuzzCasting.WidgetData[key] = query;
			return {
				data: null,
				message: `Widget ${query.data.id} saved to storage`,
				success: true,
			};
		} catch (error: any) {
			console.error("%cstorage", CSS.STORAGE, API.WIDGET, query, error);
			return {
				data: null,
				message: `Slide ${query.data.id} save error: ${error.message}`,
				success: false,
			};
		}
	};

	/**
	 * Add component subscriber
	 * @param query IQuery
	 * @returns null
	 */
	subscribe = (query: IQuery): null => {
		//query = widgetParams(query)
		if (query.type === API.MESSAGES) {
			query = moderation(this.options, query);
		}
		const widgetExists = this.subscribers.filter(
			(widget) => widget.widget === query.widget
		);
		if (widgetExists.length) {
			return null;
		}
		console.debug(
			"%cstorage%c %csubscribe",
			CSS.STORAGE,
			CSS.NONE,
			CSS.SUBSCRIBE,
			query.slide,
			query.widget
		);
		this.subscribers.push(query);
		return null;
	};

	/**
	 * Get current subscribers
	 * @returns IQuery[]
	 */
	getSubscribers = async (): Promise<IQuery[]> => {
		return await new Promise<IQuery[]>((resolve) => resolve(this.subscribers));
	};

	getSlide = async (query: IQuery): Promise<IResponse> => {
		try {
			return window.BuzzCasting.SlideData[query.id];
		} catch (error: any) {
			console.warn("%capi", CSS.API, API.SLIDE, query.id, error);
			return {
				data: null,
				message: `Slide ${query.id} load error: ${error.message}`,
				success: false,
			};
		}
	};

	setSlide = async (query: IQuery): Promise<IResponse> => {
		try {
			window.BuzzCasting.SlideData[query.id] = {
				id: query.slide,
				title: query.data.title || "Not set",
				json: query.data.json || {},
				html: query.data.html || "",
			};
			return {
				data: null,
				message: `Slide ${query.data.id} saved to storage`,
				success: true,
			};
		} catch (error: any) {
			console.error("%cstorage", CSS.STORAGE, API.SLIDE, query, error);
			return {
				data: null,
				message: `Slide ${query.data.id} save error: ${error.message}`,
				success: false,
			};
		}
	};

	getPresentation = async (query: IQuery): Promise<IResponse> => {
		try {
			return window.BuzzCasting.PresentationData[query.id];
		} catch (error: any) {
			console.warn("%capi", CSS.API, API.PRESENTATION, query.id, error);
			return {
				data: null,
				message: `Presentation ${query.id} load error: ${error.message}`,
				success: false,
			};
		}
	};

	setPresentation = async (query: IQuery): Promise<IResponse> => {
		try {
			window.BuzzCasting.PresentationData[query.id] = query.data;
			return {
				data: null,
				message: `Presentation ${query.data.id} saved to storage`,
				success: true,
			};
		} catch (error: any) {
			console.error("%cstorage", CSS.STORAGE, API.PRESENTATION, query, error);
			return {
				data: null,
				message: `Presentation ${query.data.id} save error: ${error.message}`,
				success: false,
			};
		}
	};

	getPreference = async (preference: IPreference): Promise<IResponse> => {
		try {
			return window.BuzzCasting.Preferences[preference.id];
		} catch (error: any) {
			console.warn("%capi", CSS.API, API.PREFERENCE, preference.id, error);
			return {
				data: null,
				message: `Preference ${preference.id} load error: ${error.message}`,
				success: false,
			};
		}
	};

	setPreference = async (preference: IPreference): Promise<IResponse> => {
		try {
			window.BuzzCasting.Preferences[preference.id] = preference.value;
			return {
				data: null,
				message: `Preference ${preference.id} saved to storage`,
				success: true,
			};
		} catch (error: any) {
			console.error(
				"%cstorage",
				CSS.STORAGE,
				API.PREFERENCE,
				preference,
				error
			);
			return {
				data: null,
				message: `Preference ${preference.id} save error: ${error.message}`,
				success: false,
			};
		}
	};
}
