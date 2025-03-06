import type {
	IMessage,
	IPreference,
	IQuery,
	IResponse,
	IStorageOptions,
	ITopic,
} from "..";
import Dexie from "dexie";
import { API, CSS, EVENTS } from "..";
import { moderation, widgetParams } from "../utils/widget";

export default class DexieClient {
	private db: Dexie;
	public subscribers: Array<any> = [];
	private options: IStorageOptions;

	constructor(options: IStorageOptions) {
		this.options = options;

		this.db = new Dexie(options.app);
		this.db.version(9).stores({
			channel: "id,slide_index",
			cloud: "id,dashboard_id,data",
			dashboard: "id,name,data,update",
			display: "id,monitor_id,presentation_id,colstart,colend,rowstart,rowend",
			messages: "id,utc,expires,data",
			monitor:
				"id,player_id,cols,rows,order,width,height,physicalwidth,physicalheight,devicePixelRatio,screenLeft,screenTop,orientation,monitor",
			player: "id,title,name,location",
			preference: "id,value",
			presentation: "id,name,data,update",
			series: "id,dashboard_id,data",
			slide: "id,name,presentation_id,order_index,json,html,update",
			topics:
				"[widget_id+message_id],message_id,widget_id,dashboard_id,title,engagement,impressions,reach,sentiment,visible,utc,expires",
			widget: "id,name,dashboard_id,type,update",
		});
		this.db.open();
	}

	/**
	 * Retrieve Cloud Data
	 * @param query IQuery
	 * @returns IResponse
	 */
	getCloud = async (query: IQuery): Promise<IResponse> => {
		const data = await this.db
			.table(API.CLOUD)
			.where({ id: query.widget })
			.last()
			.catch(() => {
				console.warn(
					"%capi%C %ccloud",
					CSS.API,
					CSS.NONE,
					CSS.CLOUD,
					query.slide,
					query.widget
				);
			});
		if (typeof data === "undefined") {
			return { data: null, message: "Cloud Data error", success: false };
		}
		console.debug(
			"%cstorage%c %ccloud",
			CSS.STORAGE,
			CSS.NONE,
			CSS.CLOUD,
			data
		);
		data.data.presentation = query?.presentation || "not set";
		data.data.slide = query?.slide || "not set";
		data.data.query = query;
		data.query = query;
		data.message = "Cloud retrieved successfully";
		data.success = true;
		return data;
	};

	/**
	 * Retrieve Series Data
	 * @param query IQuery
	 * @returns IResponse
	 */
	getSeries = async (query: IQuery): Promise<IResponse> => {
		const data = await this.db
			.table(API.SERIES)
			.where({ id: query.widget })
			.last()
			.catch(() => {
				console.warn(
					"%capi%c %cseries",
					CSS.API,
					CSS.NONE,
					CSS.SERIES,
					query.slide,
					query.widget
				);
			});
		if (data === undefined) {
			return { data: null, message: "Series Data error", success: false };
		}
		console.debug(
			"%cstorage%c %cseries",
			CSS.STORAGE,
			CSS.NONE,
			CSS.SERIES,
			data
		);
		data.data.presentation = query?.presentation || "not set";
		data.data.slide = query?.slide || "not set";
		data.data.query = query;
		data.query = query;
		data.message = "Series retrieved successfully";
		data.success = true;
		return data;
	};

	/**
	 * Retrieve Messages Data
	 * @param query IQuery
	 * @returns IResponse
	 */
	getMessages = async (query: IQuery): Promise<IResponse> => {
		const order = query?.order ?? "utc";

		if (order !== "utc") {
			query.since = Math.floor(Date.now() / 1000) - 60 * 60 * 24 * 7;
		}

		if (this.options.delay != 0) {
			query.before = Math.floor(Date.now() / 1000) - (this.options.delay || 0);
		} else {
			query.before = Math.floor(Date.now() / 1000);
		}

		const sinceFilter = (topic: { utc: number }) =>
			topic.utc > (query?.since || 0);

		const beforeFilter = (topic: { utc: number }) =>
			topic.utc < (query?.before || Date.now() / 1000);

		const visibleFilter = (topic: { visible: number | undefined }) =>
			topic?.visible !== 0;

		try {
			const topicMessagesCollection: any = this.db

				.table(API.TOPICS)
				.where("widget_id")
				.equals(query.widget)

				.filter(visibleFilter)
				.filter(sinceFilter)
				.filter(beforeFilter)
				.reverse();

			const topicMessages: any = await topicMessagesCollection
				.limit(query?.limit ?? 25)
				.sortBy(order);

			if (topicMessages.length === 0) {
				return { data: null, message: "No Messages error", success: false };
			}

			//let messages: any[] = [];
			let getMessages = topicMessages.map((message: any) => {
				return this.db.table(API.MESSAGES).get({ id: message.message_id });
			});

			// @ts-ignore
			return Dexie.Promise.all(getMessages).then(async (messages) => {
				const filtered = messages.map((message: any) => {
					return message.data;
				});
				const data = {
					data: {
						presentation: query?.presentation || "not set",
						slide: query?.slide || "not set",
						messages: filtered,
						dashboard: query.dashboard,
						widget: query.widget,
						query,
					},
					message: "Messages retrieved successfully",
					success: true,
				};
				console.debug(
					"%cstorage%c %cmessages",
					CSS.STORAGE,
					CSS.NONE,
					CSS.MESSAGES,
					data
				);
				return data;
			});
		} catch (error) {
			console.warn(
				"%cstorage%c %cmessages",
				CSS.STORAGE,
				CSS.NONE,
				CSS.MESSAGES,
				query,
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
		if (query.type === API.CLOUD && data !== "") {
			return await this.db
				.table(API.CLOUD)
				.put({
					id: query.widget,
					dashboard_id: query.dashboard,
					//data: data.data,
					data: data,
				})
				.then(() => 201)
				.catch((error: Error) => {
					console.error("%cstorage", CSS.STORAGE, "set", query, error.message);
					return 400;
				});
		}
		return 400;
	};

	/**
	 * Update Series
	 * @param query IQuery
	 * @param data
	 * @returns number
	 */
	setSeries = async (query: IQuery, data: any): Promise<number> => {
		if (query.type === API.SERIES && data !== "") {
			return await this.db
				.table(API.SERIES)
				.put({
					id: query.widget,
					dashboard_id: query.dashboard,
					//data: data.data,
					data: data,
				})
				.then(() => 201)
				.catch((error: Error) => {
					console.error("%cstorage", CSS.STORAGE, "set", query, error.message);
					return 400;
				});
		}
		return 400;
	};

	/**
	 * Update Messages
	 * @param query IQuery
	 * @param data any
	 * @returns number
	 */
	setMessages = async (
		query: IQuery,
		data: any // { title: any, data: { messages: IMessage[], title: string, topics: string } },
	): Promise<number> => {
		if (query.type !== API.MESSAGES) {
			return 400;
		}
		const title: string = data.data.title;
		// const topics: string = data.data.topics
		let errorCount: number = 0;

		data.data.messages.forEach(async (message: IMessage) => {
			if (message.id !== null) {
				await this.db
					.table(API.MESSAGES)
					.put({
						id: message.id,
						utc: message.utc,
						data: message,
						expires: message.expires,
					})
					.catch((error: Error) => {
						errorCount++;
						console.error(
							"%cstorage",
							CSS.STORAGE,
							"set message",
							`title: ${title}`,
							message,
							error.message
						);
					});
				/**
				 * Update topics table with new engagement stats
				 * using put to replace the whole entry
				 */
				await this.db
					.table(API.TOPICS)
					.put({
						title,
						widget_id: query.widget,
						message_id: message.id,
						dashboard_id: query.dashboard,
						engagement:
							message.topics[0]?.engagement ||
							message.dynamics?.engagement ||
							0,
						impressions:
							message.topics[0]?.impressions ||
							message.dynamics?.semrush_visits ||
							0,
						reach:
							message.topics[0]?.reach ||
							message.dynamics?.potential_reach ||
							0,
						sentiment: message.topics[0]?.sentiment || 0,
						utc: message.utc,
						expires: message.expires,
					})
					.catch((error: Error) => {
						errorCount++;
						console.error(
							"%cstorage",
							CSS.STORAGE,
							"set topic",
							`title: ${title}`,
							message,
							error.message
						);
					});
			}
		});
		/**
		 * Update topics table with messages that have become invisible
		 * (including in other topics)
		 */
		data.data.topics.forEach(async (topic: ITopic) => {
			const id = topic.message_id,
				show = topic.visible ? 1 : 0,
				title = topic.title;
			await this.db
				.table(API.TOPICS)
				.where("message_id")
				.equals(id)
				.modify({ visible: show })
				.catch((error: Error) => {
					errorCount++;
					console.error(
						"%cstorage",
						CSS.STORAGE,
						"update message visibility",
						`title: ${title}`,
						`widget: ${topic.widget_id}`,
						error.message
					);
				});
		});

		return errorCount === 0 ? 201 : 400;
	};

	/**
	 * Wipe Message data after expires timestamp
	 */
	cleanMessages = async (): Promise<number> => {
		const currentDate = Date.now() / 1000;

		const topicFilter = (topic: { expires: number }) =>
			topic.expires < currentDate;

		const messagesFilter = (message: { expires: number }) =>
			message.expires < currentDate;

		await this.db
			.table(API.TOPICS)
			.orderBy("expires")
			.filter(topicFilter)
			.delete()
			// .modify((_message, ref) => {
			//   delete ref.value
			// })
			.catch((error) => {
				console.error(
					"%cstorage%c %cclean",
					CSS.STORAGE,
					CSS.NONE,
					CSS.MESSAGES,
					error.message
				);
				return 0;
			});

		const messagesCount = await this.db
			.table(API.MESSAGES)
			.orderBy("expires")
			.filter(messagesFilter)
			.delete()
			// .modify((_message, ref) => {
			//   delete ref.value
			// })
			.catch((error) => {
				console.error(
					"%cstorage%c %clean",
					CSS.STORAGE,
					CSS.NONE,
					CSS.MESSAGES,
					error.message
				);
				return 0;
			});
		return messagesCount;
	};

	hideMessage = async (id: string, visible: number) => {
		await this.db
			.table(API.TOPICS)
			.where("message_id")
			.equals(id)
			.modify({ visible: visible ? 1 : 0 })
			.catch((error) => {
				console.error(
					"%cstorage%c %chide",
					CSS.STORAGE,
					CSS.NONE,
					CSS.HIDE,
					error.message
				);
				return 0;
			});
	};

	getDashboard = async (query: IQuery): Promise<IResponse> => {
		const data = await this.db
			.table(API.DASHBOARD)
			.where({ id: query.id })
			.last()
			.catch(() => {
				console.warn("%cstorage", CSS.STORAGE, EVENTS.DASHBOARD_LOAD, query.id);
			});
		if (data === undefined) {
			return {
				data: null,
				message: `Widget ${query.id} Load error`,
				success: false,
			};
		}
		data.message = `Slide ${query.id} retrieved from storage`;
		data.success = true;
		return data;
	};

	/**
	 * Update Cloud
	 * @param query IQuery
	 * @returns number
	 */
	setDashboard = async (query: IQuery): Promise<IResponse> => {
		return await this.db
			.table(API.DASHBOARD)
			.put({
				id: query.id,
				name: query.name,
			})
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
					error.message
				);
				return {
					data: null,
					message: `Dashboard ${query.data.id} save error: ${error.message}`,
					success: false,
				};
			});
	};

	getWidget = async (query: IQuery): Promise<IResponse> => {
		const data = await this.db
			.table(API.WIDGET)
			.where({ id: query.id })
			.last()
			.catch(() => {
				console.warn("%cstorage", CSS.STORAGE, EVENTS.WIDGET_LOAD, query.id);
			});
		if (data === undefined) {
			return {
				data: null,
				message: `Widget ${query.id} Load error`,
				success: false,
			};
		}
		data.message = `Slide ${query.id} retrieved from storage`;
		data.success = true;
		return data;
	};

	// getWidgets = async (query: IQuery): Promise<IResponse> => {
	// 	const data = await this.db
	// 		.table(API.WIDGET)
	// 		.where('dashboard_id')
	// 		.equals(query.dashboard)
	// 		.modify({type: query.type})
	// 		.catch(() => {
	// 			console.warn("%cstorage", CSS.STORAGE, EVENTS.WIDGET_LOAD, query.id);
	// 		});
	// 	if (data === undefined) {
	// 		return {
	// 			data: null,
	// 			message: `Widget ${query.id} Load error`,
	// 			success: false,
	// 		};
	// 	}
	// 	data.message = `Slide ${query.id} retrieved from storage`;
	// 	data.success = true;
	// 	return data;
	// };

	/**
	 * Update Cloud
	 * @param query IQuery
	 * @returns number
	 */
	setWidget = async (query: IQuery): Promise<IResponse> => {
		return await this.db
			.table(API.WIDGET)
			.put({
				id: query.widget,
				name: query.name,
				dashboard_id: query.dashboard,
				type: query.type,
			})
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
					error.message
				);
				return {
					data: null,
					message: `Widget ${query.data.id} save error: ${error.message}`,
					success: false,
				};
			});
	};

	/**
	 * Add component subscriber
	 * @param query IQuery
	 * @returns null
	 */
	subscribe = (query: IQuery): null => {
		query = widgetParams(query);

		const alreadySubscribed = this.subscribers.filter(
			(widget) => widget.widget === query.widget
		).length;
		if (alreadySubscribed > 0) {
			return null;
		}
		if (query.type === API.MESSAGES) {
			query = moderation(this.options, query);
		}
		console.info(
			"%cstorage%c %csubscribe",
			CSS.STORAGE,
			CSS.NONE,
			CSS.SUBSCRIBE,
			query.slide,
			query.widget
		);
		console.debug(
			"%cstorage%c %csubscribe",
			CSS.STORAGE,
			CSS.NONE,
			CSS.SUBSCRIBE,
			query
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

	/**
	 * Retrieve Slide from Storage
	 * @param query IQuery
	 * @returns IResponse
	 */
	getSlide = async (query: IQuery): Promise<IResponse> => {
		const data = await this.db
			.table(API.SLIDE)
			.where({ id: query.id })
			.last()
			.catch(() => {
				console.warn("%cstorage", CSS.STORAGE, EVENTS.SLIDE_LOAD, query.id);
			});
		if (data === undefined) {
			return {
				data: null,
				message: `Slide ${query.id} Load error`,
				success: false,
			};
		}
		data.message = `Slide ${query.id} retrieved from storage`;
		data.success = true;
		return data;
	};

	/**
	 * Update Slide in Storage
	 * @param query IQuery
	 * @returns number
	 */
	setSlide = async (query: IQuery): Promise<IResponse> => {
		return await this.db
			.table(API.SLIDE)
			.put({
				id: query.data.id,
				presentation_id: query.data.presentation_id,
				order_index: query.data.order_index,
				name: query.data.name || "Not set",
				json: query.data.json || {},
				html: query.data.html || "",
				update: query.data.update,
			})
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
					EVENTS.SLIDE_STORE,
					query,
					error.message
				);
				return {
					data: null,
					message: `Slide ${query.data.id} save error: ${error.message}`,
					success: false,
				};
			});
	};

	/**
	 * Retrieve Presentation from Storage
	 * @param query IQuery
	 * @returns IResponse
	 */
	getPresentation = async (query: IQuery): Promise<IResponse> => {
		const data = await this.db
			.table(API.PRESENTATION)
			.where({ id: query.id })
			.last()
			.catch(() => {
				console.warn(
					"%cstorage ",
					CSS.STORAGE,
					EVENTS.PRESENTATION_LOAD,
					query.id
				);
			});
		if (data === undefined) {
			return {
				data: null,
				message: `Presentation ${query.id} Load error`,
				success: false,
			};
		}
		data.message = `Presentation ${query.id} retrieved from storage`;
		data.success = true;
		return data;
	};

	/**
	 * Update Presentation in Storage
	 * @param query IQuery
	 * @returns number
	 */
	setPresentation = async (query: IQuery): Promise<IResponse> => {
		return await this.db
			.table(API.PRESENTATION)
			.put({
				id: query.data.id,
				name: query.data.name || "Not set",
				data: query.data,
				update: query.update,
			})
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
					EVENTS.PRESENTATION_STORE,
					query,
					error.message
				);
				return {
					data: null,
					message: `Presentation ${query.data.id} save error: ${error.message}`,
					success: false,
				};
			});
	};

	/**
	 * Retrieve Preference from Storage
	 * @param preference IPreference
	 * @returns IResponse
	 */
	getPreference = async (preference: IPreference): Promise<IResponse> => {
		const data = await this.db
			.table(API.PREFERENCE)
			.where({ id: preference.id })
			.last()
			.catch(() => {
				console.warn(
					"%cstorage",
					CSS.STORAGE,
					EVENTS.PREFERENCE_LOAD,
					preference.id
				);
			});
		if (data === undefined) {
			return {
				data: null,
				message: `Preference ${preference.id} Load error`,
				success: false,
			};
		}
		return data.value;
	};

	/**
	 * Update Slide in Storage
	 * @param preference IPreference
	 * @returns number
	 */
	setPreference = async (preference: IPreference): Promise<IResponse> => {
		return await this.db
			.table(API.PREFERENCE)
			.put({
				id: preference.id,
				value: preference.value,
			})
			.then(() => {
				return {
					data: null,
					message: `Preference ${preference.id} saved to storage`,
					success: true,
				};
			})
			.catch((error: Error) => {
				console.error(
					"%cstorage",
					CSS.STORAGE,
					EVENTS.PREFERENCE_STORE,
					preference,
					error.message
				);
				return {
					data: null,
					message: `Preference ${preference.id} save error: ${error.message}`,
					success: false,
				};
			});
	};
}
