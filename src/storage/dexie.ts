import type { IMessage, IQuery, IResponse, IStorageOptions, ITopic } from "..";
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
		this.db.version(6).stores({
			player: "id,title,name,location",
			monitor:
				"id,player_id,cols,rows,order,width,height,physicalwidth,physicalheight,devicePixelRatio,screenLeft,screenTop,orientation,monitor",
			display: "id,monitor_id,presentation_id,colstart,colend,rowstart,rowend",
			channel: "id,slide_index",
			presentation: "id,name,data",
			slide: "id,title,json,html,css",
			cloud: "id,dashboard_id,data",
			messages: "id,utc,expires,data",
			series: "id,dashboard_id,data",
			topics:
				"[widget_id+message_id],message_id,widget_id,dashboard_id,title,engagement,impressions,reach,sentiment,visible,utc,expires",
			widgets: "id,dashboard_id,type",
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
		if (data === undefined) {
			return { data: null, message: "Cloud Data error", success: false };
		}
		data.data.presentation = query?.presentation || "not set";
		data.data.slide = query?.slide || "not set";
		data.message = "Messages retrieved successfully";
		data.success = true;
		return data;
	};

	/**
	 * Retrieve Cloud Data
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
		data.data.presentation = query?.presentation || "not set";
		data.data.slide = query?.slide || "not set";
		data.message = "Messages retrieved successfully";
		data.success = true;
		return data;
	};

	/**
	 * Retrieve Cloud Data
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
				const filtered = messages.map((message:any) => {return message.data})
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
					data: data.data,
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
					data: data.data,
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

	/**
	 * Update Cloud
	 * @param query IQuery
	 * @returns number
	 */
	setWidget = async (query: IQuery): Promise<number> => {
		return await this.db
			.table(API.WIDGETS)
			.put({
				id: query.widget,
				dashboard_id: query.dashboard,
				type: query.type,
			})
			.then(() => 201)
			.catch((error: Error) => {
				console.error(
					"%cstorage",
					CSS.STORAGE,
					API.WIDGET,
					query,
					error.message
				);
				return 400;
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

	/**
	 * Retrieve Cloud Data
	 * @param query IQuery
	 * @returns IResponse
	 */
	loadSlide = async (query: IQuery): Promise<IResponse> => {
		const data = await this.db
			.table(API.SLIDE)
			.where({ id: query.id })
			.last()
			.catch(() => {
				console.warn(
					"%capi%c %cseries",
					CSS.API,
					CSS.NONE,
					CSS.SERIES,
					query.id
				);
			});
		if (data === undefined) {
			return { data: null, message: "Slide Load error", success: false };
		}
		data.data.id = query?.id || "not set";
		data.message = "Slide retrieved successfully";
		data.success = true;
		return data;
	};

	/**
	 * Update Slide
	 * @param query IQuery
	 * @returns number
	 */
	storeSlide = async (query: IQuery): Promise<number> => {
		if (query.type === API.SLIDE && query.data !== "") {
			return await this.db
				.table(API.SLIDE)
				.put({
					id: query.id,
					title: query.data.title || "Not set",
					json: query.data.json || {},
					html: query.data.html || "",
					css: query.data.css || "",
				})
				.then(() => 200)
				.catch((error: Error) => {
					console.error(
						"%cstorage",
						CSS.STORAGE,
						EVENTS.SLIDE_STORE,
						query,
						error.message
					);
					return 422;
				});
		}
		return 422;
	};
}
