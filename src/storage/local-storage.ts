import type { IPreference, IQuery, IResponse, IStorageOptions } from "..";
import { API, CSS } from "..";
import { getKey, moderation } from "../utils/widget";

export default class LocalStorageClient {
	public subscribers: Array<any> = [];
	private options: IStorageOptions;

	constructor(options: IStorageOptions) {
		this.options = options;
		// extend Storage in order to be able to store / read JSON objects
		Storage.prototype.setObject = function (
			key: string,
			value: string | object
		) {
			this.setObject(key, JSON.stringify(value));
		};

		Storage.prototype.getObject = function (key: string) {
			const value = this.getObject(key);
			return value && JSON.parse(value);
		};
	}

	getCloud = async (query: IQuery): Promise<IResponse> => {
		const key = getKey(query);
		try {
			return localStorage.getObject(key);
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
			return localStorage.getObject(key);
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
			return localStorage.getObject(key);
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
			localStorage.setObject(key, data);
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
			localStorage.setObject(key, data);
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
			localStorage.setObject(key, data);
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

	setWidget = async (query: IQuery) => {
		const key = `widget.${query.widget}`;
		try {
			localStorage.setObject(key, query);
			return 201;
		} catch (error) {
			console.error("%cstorage", CSS.STORAGE, API.WIDGET, query, error);
			return 400;
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
			return localStorage.getObject(`${API.SLIDE}.${query.id}`);
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
			localStorage.setObject(`${API.SLIDE}.${query.data.id}`, {
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

	getPreference = async (preference: IPreference): Promise<IResponse> => {
		try {
			return localStorage.getObject(`${API.PREFERENCE}.${preference.id}`);
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
			localStorage.setObject(
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
