import type { IPreference, IQuery, IResponse, IStorageOptions } from "..";
import { API, CSS } from "..";
import { getKey, moderation } from "../utils/widget";

export default class SessionStorageClient {
	public subscribers: Array<any> = [];
	private options: IStorageOptions;

	constructor(options: IStorageOptions) {
		this.options = options;
		// extend Storage in order to be able to store / read JSON objects
		Storage.prototype.setObject = function (
			key: string,
			value: string | object
		) {
			this.setItem(key, JSON.stringify(value));
		};

		Storage.prototype.getObject = function (key: string) {
			const value = this.getItem(key);
			return value && JSON.parse(value);
		};
	}

	getCloud = async (query: IQuery): Promise<IResponse> => {
		const key = getKey(query);
		try {
			return sessionStorage.getObject(key);
		} catch (error) {
			console.warn(
				"%capi",
				CSS.API,
				API.CLOUD,
				query.slide,
				query.widget,
				error
			);
			return { data: null, message: "Messages Data error", success: false };
		}
	};

	getSeries = async (query: IQuery): Promise<IResponse> => {
		const key = getKey(query);
		try {
			return sessionStorage.getObject(key);
		} catch (error) {
			console.warn(
				"%capi",
				CSS.API,
				API.SERIES,
				query.slide,
				query.widget,
				error
			);
			return { data: null, message: "Messages Data error", success: false };
		}
	};

	getMessages = async (query: IQuery): Promise<IResponse> => {
		const key = getKey(query);
		try {
			return sessionStorage.getObject(key);
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
	setCloud = async (query: IQuery, data: any): Promise<number> => {
		const key = getKey(query);
		try {
			sessionStorage.setObject(key, data);
			return 201;
		} catch (error) {
			console.error("%cstorage", CSS.STORAGE, API.CLOUD, query, error);
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
			sessionStorage.setObject(key, data);
			return 201;
		} catch (error) {
			console.error("%cstorage", CSS.STORAGE, API.SERIES, query, error);
			return 400;
		}
	};

	/**
	 * Update Messages
	 * @param query IQuery
	 * @param data
	 * @returns number
	 */
	setMessages = async (query: IQuery, data: any): Promise<number> => {
		const key = getKey(query);
		try {
			sessionStorage.setObject(key, data);
			return 200;
		} catch (error) {
			console.error("%cstorage", CSS.STORAGE, API.MESSAGES, query, error);
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
			return sessionStorage.getObject(`${API.DASHBOARD}.${query.id}`);
		} catch (error: any) {
			console.warn("%capi", CSS.API, API.SLIDE, query.id, error);
			return {
				data: null,
				message: `Dashboard ${query.id} load error: ${error.message}`,
				success: false,
			};
		}
	};

	getDashboards = async (): Promise<IResponse> => {
		//const key = getKey(query);
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
		const key = `${API.DASHBOARD}.${query.dashboard}`;
		try {
			sessionStorage.setObject(key, query);
			return {
				data: null,
				message: `Dashboard ${query.data.id} saved to storage`,
				success: true,
			};
		} catch (error:any) {
			console.error("%cstorage", CSS.STORAGE, API.WIDGET, query, error);
			return {
				data: null,
				message: `Dashboard ${query.data.id} save error: ${error.message}`,
				success: false,
			};
		}
	};

	getWidget = async (query: IQuery): Promise<IResponse> => {
		try {
			return sessionStorage.getObject(`${API.WIDGET}.${query.id}`);
		} catch (error: any) {
			console.warn("%capi", CSS.API, API.SLIDE, query.id, error);
			return {
				data: null,
				message: `Widget ${query.id} load error: ${error.message}`,
				success: false,
			};
		}
	};

	getWidgets = async (): Promise<IResponse> => {
		//const key = getKey(query);
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
			sessionStorage.setObject(key, query);
			return {
				data: null,
				message: `Widget ${query.data.id} saved to storage`,
				success: true,
			};
		} catch (error:any) {
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
			return sessionStorage.getObject(`${API.SLIDE}.${query.id}`);
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
			return sessionStorage.getObject(`${API.SLIDE}.${query.id}`);
		} catch (error: any) {
			console.warn("%capi", CSS.API, API.SLIDE, query.id, error);
			return {
				data: null,
				message: `Slide ${query.id} load error: ${error.message}`,
				success: false,
			};
		}
	};
	/**
	 * Update Slide
	 * @param query IQuery
	 * @returns number
	 */
	setSlide = async (query: IQuery): Promise<IResponse> => {
		try {
			sessionStorage.setObject(`${API.SLIDE}.${query.data.id}`, {
				id: query.data.id,
				title: query.data.title || "Not set",
				json: query.data.json || {},
				html: query.data.html || "",
			});
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
			return sessionStorage.getObject(`${API.PRESENTATION}.${query.presentation}`);
		} catch (error: any) {
			console.warn("%capi", CSS.API, API.PRESENTATION, query.presentation, error);
			return {
				data: null,
				message: `Presentation ${query.presentation} load error: ${error.message}`,
				success: false,
			};
		}
	};

	getPresentations = async (): Promise<IResponse> => {
		try {
			return sessionStorage.getObject(`${API.PRESENTATION}.`);
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
			sessionStorage.setObject(`${API.PRESENTATION}.${query.data.id}`, query.data);
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
			return sessionStorage.getObject(`${API.PREFERENCE}.${preference.id}`);
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
			return sessionStorage.getObject(`${API.PREFERENCE}`);
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
			sessionStorage.setObject(
				`${API.PREFERENCE}.${preference.id}`,
				preference.value
			);
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
