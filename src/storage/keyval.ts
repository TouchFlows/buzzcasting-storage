import type {
	IPreference,
	IQuery,
	IResponse,
	IStorageOptions,
} from "buzzcasting-utils";
import { API, CSS, getKey, moderation } from "buzzcasting-utils";
import { get, set } from "idb-keyval";

export default class KeyvalClient {
	public subscribers: Array<any> = [];
	private options: IStorageOptions;

	constructor(options: IStorageOptions) {
		this.options = options;
	}

	getHash = async (query: IQuery) => {
		return "none";
	};

	setHash = async (query: IQuery): Promise<number | undefined> => {
		return 404;
	};

	createHash = async (query: IQuery): Promise<number | undefined> => {
		return 404;
	};

	clearHash = async (): Promise<number | undefined> => {
		return 404;
	};

	deleteHash = async (query: IQuery): Promise<number | undefined> => {
		return 404;
	};

	getCloud = async (query: IQuery) => {
		const key = getKey(query);
		return await get(key)
			.then((data) => data)
			.catch(() => {
				console.warn("%capi", CSS.API, API.CLOUD, query.slide, query.widget);
				return { data: null, message: "Cloud Data error", success: false };
			});
	};

	getSeries = async (query: IQuery) => {
		const key = getKey(query);
		return await get(key)
			.then((data) => data)
			.catch(() => {
				console.warn("%capi", CSS.API, API.SERIES, query.slide, query.widget);
				return { data: null, message: "Series Data error", success: false };
			});
	};

	getMessages = async (query: IQuery) => {
		const key = getKey(query);
		return await get(key)
			.then((data) => data)
			.catch(() => {
				console.warn("%capi", CSS.API, API.MESSAGES, query.slide, query.widget);
				return { data: null, message: "Messages Data error", success: false };
			});
	};

	/**
	 * Update Cloud
	 * @param query IQuery
	 * @param data
	 * @returns number
	 */
	setCloud = async (query: IQuery, data: any): Promise<number> => {
		if (!data.success) {
			return 400;
		}
		const key = getKey(query);
		delete data.success;
		delete data.message;
		return await set(key, data)
			.then(() => 201)
			.catch((error: Error) => {
				console.error(
					"%cstorage",
					CSS.STORAGE,
					API.CLOUD,
					query,
					error.message,
				);
				return 400;
			});
	};

	/**
	 * Update Series
	 * @param query IQuery
	 * @param data
	 * @returns bumber
	 */
	setSeries = async (query: IQuery, data: any): Promise<number> => {
		if (!data.success) {
			return 400;
		}
		const key = getKey(query);
		delete data.success;
		delete data.message;
		return await set(key, data)
			.then(() => 201)
			.catch((error: Error) => {
				console.error(
					"%cstorage",
					CSS.STORAGE,
					API.SERIES,
					query,
					error.message,
				);
				return 400;
			});
	};

	/**
	 * Update Messages
	 * @param query IQuery
	 * @param data
	 * @returns number
	 */
	setMessages = async (query: IQuery, data: any): Promise<number> => {
		if (!data.success) {
			return 400;
		}
		const key = getKey(query);
		delete data.success;
		delete data.message;
		return await set(key, data)
			.then(() => 201)
			.catch((error: Error) => {
				console.error(
					"%cstorage",
					CSS.STORAGE,
					API.MESSAGES,
					query,
					error.message,
				);
				return 400;
			});
	};

	cleanMessages = async (_retentionDuration: number): Promise<number> => {
		console.log("cleanMessages not implemented for ", this.options.storage);
		return await new Promise<number>((resolve) => resolve(0));
	};

	hideMessage = async (id: string, visible: number) => {
		console.debug(
			`hideMessage ${id} ${visible} not implemented for ${this.options.storage}`,
		);
	};

	getDashboard = async (query: IQuery): Promise<IResponse> => {
		const key = getKey(query);
		return await get(key)
			.then((data) => data)
			.catch((error) => {
				console.warn("%capi", CSS.API, API.SLIDE, query.id);
				return {
					data: null,
					message: `Widget ${query.data.id} load error: ${error.message}`,
					success: false,
				};
			});
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

	/**
	 * Update Cloud
	 * @param query IQuery
	 * @returns number
	 */
	setDashboard = async (query: IQuery): Promise<IResponse> => {
		const key = getKey(query);
		const data = {
			id: query.dashboard,
			name: query.name,
		};
		return await set(key, data)
			.then(() => {
				return {
					data: null,
					message: `Dashboard ${query.data.id} saved to storage`,
					success: true,
				};
			})
			.catch((error: Error) => {
				console.error(
					"%cstorage",
					CSS.STORAGE,
					API.WIDGET,
					query,
					error.message,
				);
				return {
					data: null,
					message: `Slide ${query.data.id} save error: ${error.message}`,
					success: false,
				};
			});
	};

	getWidget = async (query: IQuery): Promise<IResponse> => {
		const key = getKey(query);
		return await get(key)
			.then((data) => data)
			.catch((error) => {
				console.warn("%capi", CSS.API, API.SLIDE, query.id);
				return {
					data: null,
					message: `Widget ${query.data.id} load error: ${error.message}`,
					success: false,
				};
			});
	};

	getWidgets = async (query?: IQuery): Promise<IResponse> => {
		console.warn("%capi", CSS.API, API.SLIDE, query?.presentation);
		return {
			data: null,
			message: `Widgets load error: `,
			success: false,
		};
	};

	/**
	 * Update Cloud
	 * @param query IQuery
	 * @returns number
	 */
	setWidget = async (query: IQuery): Promise<IResponse> => {
		const key = getKey(query);
		const data = {
			id: query.widget,
			name: query.name,
			dashboard_id: query.dashboard,
			type: query.type,
		};
		return await set(key, data)
			.then(() => {
				return {
					data: null,
					message: `Widget ${query.data.id} saved to storage`,
					success: true,
				};
			})
			.catch((error: Error) => {
				console.error(
					"%cstorage",
					CSS.STORAGE,
					API.WIDGET,
					query,
					error.message,
				);
				return {
					data: null,
					message: `Slide ${query.data.id} save error: ${error.message}`,
					success: false,
				};
			});
	};

	deleteDashboard = async (query: IQuery): Promise<IResponse> => {
		// const key = getKey(query);
		// return await get(key)
		// 	.then((data) => data)
		// 	.catch((error) => {
		// 		console.warn("%capi", CSS.API, API.PRESENTATION);
		return {
			data: null,
			message: `Dashboards delete error: `,
			success: false,
		};
		// });
	};

	deleteDashboards = async (): Promise<IResponse> => {
		// const key = getKey(query);
		// return await get(key)
		// 	.then((data) => data)
		// 	.catch((error) => {
		// 		console.warn("%capi", CSS.API, API.PRESENTATION);
		return {
			data: null,
			message: `Dashboards delete error: `,
			success: false,
		};
		// });
	};

	bulk = async (
		table: string,
		queries: IQuery[],
	): Promise<number | undefined> => {
		return 404;
	};

	get = async (table: string, query: IQuery): Promise<number | undefined> => {
		return 404;
	};

	set = async (table: string, query: IQuery): Promise<number | undefined> => {
		return 404;
	};

	deleteWidget = async (query: IQuery): Promise<number | undefined> => {
		return 404;
	};

	deleteWidgets = async (): Promise<number | undefined> => {
		return 404;
	};

	deleteSlide = async (query: IQuery): Promise<number | undefined> => {
		return 404;
	};

	deleteSlides = async (): Promise<number | undefined> => {
		return 404;
	};

	deletePresentation = async (query: IQuery): Promise<number | undefined> => {
		return 404;
	};

	deletePresentations = async (): Promise<number | undefined> => {
		return 404;
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
		const alreadySubscribed = this.subscribers.filter(
			(widget) => widget.widget === query.widget,
		).length;
		if (alreadySubscribed > 0) {
			return null;
		}
		console.debug(
			"%cstorage%c %csubscribe",
			CSS.STORAGE,
			CSS.NONE,
			CSS.SUBSCRIBE,
			query.slide,
			query.widget,
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
		const key = getKey(query);
		return await get(key)
			.then((data) => data)
			.catch((error) => {
				console.warn("%capi", CSS.API, API.SLIDE, query.id);
				return {
					data: null,
					message: `Slide ${query.data.id} load error: ${error.message}`,
					success: false,
				};
			});
	};

	getSlides = async (query: IQuery): Promise<IResponse> => {
		console.warn("%capi", CSS.API, API.SLIDE, query.presentation);
		return {
			data: null,
			message: `Slided ${query.presentation} load error: `,
			success: false,
		};
	};

	/**
	 * Update Slide
	 * @param query IQuery
	 * @returns number
	 */
	setSlide = async (query: IQuery): Promise<IResponse> => {
		const key = getKey(query);
		const data = {
			id: query.data.id,
			title: query.data.title || "Not set",
			json: query.data.json || {},
			html: query.data.html || "",
		};
		return await set(key, data)
			.then(() => {
				return {
					data: null,
					message: `Slide ${query.data.id} saved to storage`,
					success: true,
				};
			})
			.catch((error: Error) => {
				console.error(
					"%cstorage",
					CSS.STORAGE,
					API.SLIDE,
					query,
					error.message,
				);
				return {
					data: null,
					message: `Slide ${query.data.id} save error: ${error.message}`,
					success: false,
				};
			});
	};

	getPresentation = async (query: IQuery): Promise<IResponse> => {
		const key = getKey(query);
		return await get(key)
			.then((data) => data)
			.catch((error) => {
				console.warn("%capi", CSS.API, API.PRESENTATION, query.id);
				return {
					data: null,
					message: `Slide ${query.data.id} load error: ${error.message}`,
					success: false,
				};
			});
	};

	getPresentations = async (): Promise<IResponse> => {
		// const key = getKey(query);
		// return await get(key)
		// 	.then((data) => data)
		// 	.catch((error) => {
		// 		console.warn("%capi", CSS.API, API.PRESENTATION);
		return {
			data: null,
			message: `Presentations get error: `,
			success: false,
		};
		// });
	};

	/**
	 * Update Presentation
	 * @param query IQuery
	 * @returns number
	 */
	setPresentation = async (query: IQuery): Promise<IResponse> => {
		const key = getKey(query);
		const data = query.data;
		return await set(key, data)
			.then(() => {
				return {
					data: null,
					message: `Presentation ${query.data.id} saved to storage`,
					success: true,
				};
			})
			.catch((error: Error) => {
				console.error(
					"%cstorage",
					CSS.STORAGE,
					API.PRESENTATION,
					query,
					error.message,
				);
				return {
					data: null,
					message: `Presentation ${query.data.id} save error: ${error.message}`,
					success: false,
				};
			});
	};

	getPreference = async (preference: IPreference): Promise<IResponse> => {
		return await get(`${API.PREFERENCE}.${preference.id}`)
			.then((data) => data)
			.catch((error) => {
				console.warn("%capi", CSS.API, API.PREFERENCE, preference.id);
				return {
					data: null,
					message: `Preference ${preference.id} get error: ${error.message}`,
					success: false,
				};
			});
	};

	getPreferences = async (): Promise<IResponse> => {
		return await get(`${API.PREFERENCE}`)
			.then((data) => data)
			.catch((error) => {
				console.warn("%capi", CSS.API, API.PREFERENCE);
				return {
					data: null,
					message: `Preferences get error: ${error.message}`,
					success: false,
				};
			});
	};

	/**
	 * Update Preference
	 * @param preference IPreference
	 * @returns number
	 */
	setPreference = async (preference: IPreference): Promise<IResponse> => {
		return await set(`${API.PREFERENCE}.${preference.id}`, preference.value)
			.then(() => {
				return {
					data: null,
					message: `Preference ${preference.id} save error`,
					success: true,
				};
			})
			.catch((error: Error) => {
				console.error(
					"%cstorage",
					CSS.STORAGE,
					API.PREFERENCE,
					preference,
					error.message,
				);
				return {
					data: null,
					message: `Preference ${preference.id} save error: ${error.message}`,
					success: false,
				};
			});
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
			message: `Image ${query.id} saved`,
			success: false,
		};
	};
}
