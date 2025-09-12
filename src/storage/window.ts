import type {
	IPreference,
	IQuery,
	IResponse,
	IStorageOptions,
} from "buzzcasting-utils";
import { API, CSS, getKey, moderation } from "buzzcasting-utils";

export default class WindowClient {
	public subscribers: Array<any> = [];
	private options: IStorageOptions;

	constructor(options: IStorageOptions) {
		this.options = options;
		window.__bc.WidgetData = new Set();
	}

	getHash = async (resource: string, query: IQuery) => {
		return "none";
	};

	setHash = async (
		resource: string,
		query: IQuery
	): Promise<number | undefined> => {
		return 404;
	};

	setCards = async (query: IQuery): Promise<number | undefined> => {
		return 404;
	};

	getCloud = async (query: IQuery): Promise<IResponse> => {
		const key = getKey(query);
		try {
			return window.__bc.WidgetData[key];
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
			return window.__bc.WidgetData[key];
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
			return window.__bc.WidgetData[key];
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
			window.__bc.WidgetData[key] = data;
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
			window.__bc.WidgetData[key] = data;
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
			window.__bc.WidgetData[key] = data;
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
			return window.__bc.DashboardData[query.id];
		} catch (error: any) {
			console.warn("%capi", CSS.API, API.DASHBOARD, query.id, error);
			return {
				data: null,
				message: `Dashboard ${query.id} load error: ${error.message}`,
				success: false,
			};
		}
	};

	getDashboards = async (): Promise<IResponse> => {
		// const key = getKey(query);
		// return await get(key)
		// 	.then((data) => data)
		// 	.catch((error) => {
		// 		console.warn("%capi", CSS.API, API.PRESENTATION);
		return {
			data: null,
			message: `Dashboards get error: `,
			success: false,
		};
		// });
	};

	setDashboard = async (query: IQuery) => {
		const key = `widget.${query.widget}`;
		try {
			window.__bc.DashboardData[key] = query;
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
			return window.__bc.WidgetData[query.id];
		} catch (error: any) {
			console.warn("%capi", CSS.API, API.WIDGET, query.id, error);
			return {
				data: null,
				message: `Widget ${query.id} load error: ${error.message}`,
				success: false,
			};
		}
	};

	getWidgets = async (): Promise<IResponse> => {
		// const key = getKey(query);
		// return await get(key)
		// 	.then((data) => data)
		// 	.catch((error) => {
		// 		console.warn("%capi", CSS.API, API.PRESENTATION);
		return {
			data: null,
			message: `Widgets get error: `,
			success: false,
		};
		// });
	};

	setWidget = async (query: IQuery) => {
		const key = `widget.${query.widget}`;
		try {
			window.__bc.WidgetData[key] = query;
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
		// query = widgetParams(query)
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
			return window.__bc.SlideData[query.id];
		} catch (error: any) {
			console.warn("%capi", CSS.API, API.SLIDE, query.id, error);
			return {
				data: null,
				message: `Slide ${query.id} load error: ${error.message}`,
				success: false,
			};
		}
	};

	getSlides = async (query: IQuery): Promise<IResponse> => {
		try {
			return window.__bc.SlideData.filter(
				(slide: any) => slide.presentation_id === query.presentation
			);
		} catch (error: any) {
			console.warn(
				"%capi",
				CSS.API,
				API.PRESENTATION,
				query.presentation_id,
				error
			);
			return {
				data: null,
				message: `Slides for presentation ${query.presentation} load error: ${error.message}`,
				success: false,
			};
		}
	};

	setSlide = async (query: IQuery): Promise<IResponse> => {
		try {
			window.__bc.SlideData[query.id] = {
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
			const id = query.presentation || "none";
			return window.__bc.PresentationData[id];
		} catch (error: any) {
			console.warn(
				"%capi",
				CSS.API,
				API.PRESENTATION,
				query.presentation,
				error
			);
			return {
				data: null,
				message: `Presentation ${query.presentation} load error: ${error.message}`,
				success: false,
			};
		}
	};

	getPresentations = async (): Promise<IResponse> => {
		try {
			return window.__bc.PresentationData;
		} catch (error: any) {
			console.warn("%capi", CSS.API, API.PRESENTATION, error);
			return {
				data: null,
				message: `Presentations get error: ${error.message}`,
				success: false,
			};
		}
	};

	setPresentation = async (query: IQuery): Promise<IResponse> => {
		try {
			window.__bc.PresentationData[query.id] = query.data;
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
			return window.__bc.Preferences[preference.id];
		} catch (error: any) {
			console.warn("%capi", CSS.API, API.PREFERENCE, preference.id, error);
			return {
				data: null,
				message: `Preference ${preference.id} load error: ${error.message}`,
				success: false,
			};
		}
	};

	getPreferences = async (): Promise<IResponse> => {
		try {
			return window.__bc.Preferences;
		} catch (error: any) {
			console.warn("%capi", CSS.API, API.PREFERENCE, error);
			return {
				data: null,
				message: `Preferences get error: ${error.message}`,
				success: false,
			};
		}
	};

	setPreference = async (preference: IPreference): Promise<IResponse> => {
		try {
			window.__bc.Preferences[preference.id] = preference.value;
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

	getImages = async (query: IQuery) => {
		return {
			data: null,
			message: `Images ${query.id} `,
			success: false,
		};
	};

	setImage = async (query: IQuery) => {
		return {
			data: null,
			message: `Image ${query.name} saved`,
			success: false,
		};
	};
}
