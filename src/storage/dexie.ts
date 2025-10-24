import type {
	IMessage,
	IPreference,
	IQuery,
	IResponse,
	IStorageOptions,
	ITopic,
} from "buzzcasting-utils";
import {
	API,
	CSS,
	EVENTS,
	log,
	moderation,
	widgetParams,
} from "buzzcasting-utils";
import Dexie from "dexie";

export default class DexieClient {
	private db: Dexie;
	public subscribers: Array<any> = [];
	private options: IStorageOptions;

	constructor(options: IStorageOptions) {
		this.options = options;

		this.db = new Dexie(options.app);
		this.db.version(15).stores({
			channel: "id,slide_index",
			cloud: "id,dashboard_id,hash",
			dashboard: "id,name,update",
			display: "id,monitor_id,presentation_id,colstart,colend,rowstart,rowend",
			hash: "id,dashboard_id,hash",
			images: "id,basename,extension,size,type,url",
			messages: "id,utc,expires",
			monitor:
				"id,player_id,cols,rows,order,width,height,physicalwidth,physicalheight,devicePixelRatio,screenLeft,screenTop,orientation,monitor",
			player: "id,title,name,location",
			preference: "id,value,update",
			presentation: "id,name,update",
			series: "id,dashboard_id,hash",
			slide: "id,name,presentation_id,order_index,json,html,update",
			topics:
				"[widget_id+message_id],message_id,widget_id,dashboard_id,title,engagement,impressions,reach,sentiment,visible,approved,utc,expires",
			widget: "id,name,dashboard_id,type,update",
		});
		this.db.open();
	}

	getHash = async (query: IQuery) => {
		const data = await this.db
			.table("hash")
			.where({ id: query.widget })
			.last()
			.catch(() => {
				log(2, [`%chash%c %capi%C %chash`, CSS.API, CSS.NONE, CSS.APP]);
			});
		log(3, [
			`%cget%c %chash%c %chash`,
			CSS.OK,
			CSS.NONE,
			CSS.API,
			CSS.NONE,
			CSS.APP,
			query,
		]);
		return data?.hash ?? "none";
	};

	setHash = async (query: IQuery): Promise<number> => {
		return await this.db
			.table("hash")
			.where({
				id: query.widget,
			})
			.modify({ hash: query.hash })
			.then(() => {
				log(3, [
					`%cset%c %chash%c %chash}`,
					CSS.OK,
					CSS.NONE,
					CSS.API,
					CSS.NONE,
					CSS.WIDGET,
					query,
				]);
				return 201;
			})
			.catch((error: Error) => {
				log(2, [
					`%cget%c %chash%c %chash`,
					CSS.OK,
					CSS.NONE,
					CSS.API,
					CSS.NONE,
					CSS.WIDGET,
					query,
					error.message,
				]);
				return 400;
			});
	};

	clearHash = async (): Promise<number> => {
		return await this.db
			.table("hash")
			.clear()
			.then(() => 201)
			.catch((error: Error) => {
				log(2, [
					"%cclear%c %cstorage%c %chash",
					CSS.KO,
					CSS.NONE,
					CSS.STORAGE,
					CSS.NONE,
					CSS.WIDGET,
					"clear card hashes",
				]);
				return 400;
			});
	};

	createHash = async (query: IQuery): Promise<number> => {
		return await this.db
			.table("hash")
			.put({
				id: query.widget,
				dashboard_id: query.dashboard,
				hash: query.hash,
			})
			.then(() => 201)
			.catch((error: Error) => {
				log(2, [
					"%cset%c %cstorage%c %chash",
					CSS.KO,
					CSS.NONE,
					CSS.STORAGE,
					CSS.NONE,
					CSS.WIDGET,
					query,
					error.message,
				]);
				return 400;
			});
	};

	/**
	 * Retrieve Cloud Data
	 * @param query IQuery
	 * @returns IResponse
	 */
	getCloud = async (query: IQuery): Promise<IResponse> => {
		if (query.widget === "") {
			log(3, [
				"%cget%c %cstorage%c %ccloud",
				CSS.NO_UPDATES,
				CSS.NONE,
				CSS.STORAGE,
				CSS.NONE,
				CSS.CLOUD,
				query,
			]);
			return {
				data: null,
				message: "Series Data error",
				success: false,
				query,
			};
		}
		const data = await this.db
			.table(API.CLOUD)
			.where({ id: query.widget })
			.last()
			.catch(() => {
				log(2, ["%capi%C %ccloud", CSS.API, CSS.NONE, CSS.CLOUD, query.widget]);
			});
		if (typeof data === "undefined") {
			return { data: null, message: "Cloud Data error", success: false, query };
		}
		const resp = {
			data: data?.data ?? null,
			message:
				data !== undefined
					? "Cloud retrieved successfully"
					: "Cloud Data error",
			success: data !== undefined,
			query,
		};
		log(3, [
			"%cget%c %cstorage%c %ccloud",
			CSS.OK,
			CSS.NONE,
			CSS.STORAGE,
			CSS.NONE,
			CSS.CLOUD,
			resp,
		]);
		return resp;
	};

	/**
	 * Update Cloud
	 * @param query IQuery
	 * @param data
	 * @returns number
	 */
	setCloud = async (query: IQuery, data: any): Promise<number> => {
		if (query.type === API.CLOUD && data !== "") {
			log(3, [
				"%cset%c %cstorage%c %ccloud",
				CSS.OK,
				CSS.NONE,
				CSS.STORAGE,
				CSS.NONE,
				CSS.CLOUD,
				data?.title ?? query.widget,
			]);
			return await this.db
				.table(API.CLOUD)
				.put({
					id: query.widget,
					dashboard_id: query.dashboard,
					hash: query.hash,
					// data: data.data,
					data,
				})
				.then(() => 201)
				.catch((error: Error) => {
					log(2, [
						"%cset%c %cstorage%c %ccloud",
						CSS.KO,
						CSS.NONE,
						CSS.STORAGE,
						CSS.NONE,
						CSS.CLOUD,
						query,
						error.message,
					]);
					return 400;
				});
		}
		return 400;
	};

	getDashboard = async (query: IQuery): Promise<IResponse> => {
		const data = await this.db
			.table(API.DASHBOARD)
			.where({ id: query.id })
			.last()
			.catch(() => {
				log(2, ["%cstorage", CSS.STORAGE, EVENTS.DASHBOARD_LOAD, query.id]);
			});
		if (data === undefined) {
			return {
				data: null,
				message: `Dashboard ${query.id} Load error`,
				success: false,
			};
		}
		data.message = `Dashboard ${query.id} retrieved from storage`;
		data.success = true;
		return data;
	};

	getDashboards = async (query?: IQuery): Promise<any> => {
		const idFilter = (dashboard: { id: string }) => {
			return query?.id === dashboard.id;
		};

		const nameFilter = (dashboard: { name: string }) => {
			return query?.name ? dashboard.name.includes(query?.name) : false;
		};

		// let data = []

		const data = await this.db
			.table(API.DASHBOARD)
			.toArray()
			.then((res) => {
				return query?.id ? res.filter(idFilter) : res;
			})
			.then((res) => {
				return query?.name ? res.filter(nameFilter) : res;
			})
			.catch(() => {
				log(2, ["%cstorage", CSS.STORAGE, EVENTS.DASHBOARD_LOAD, query]);
			});

		data !== undefined &&
			log(3, [
				"%cstorage%c %cdashboards",
				CSS.STORAGE,
				CSS.NONE,
				CSS.WIDGET,
				query,
			]);

		return {
			data: data !== undefined ? { dashboards: data, query } : null,
			message:
				data !== undefined
					? `Dashboards loaded from storage`
					: `Dashboards load error`,
			success: data !== undefined,
		};
	};

	/**
	 * Update Cloud
	 * @param query IQuery
	 * @returns number
	 */
	setDashboard = async (query: IQuery): Promise<IResponse> => {
		const q = structuredClone(query);
		delete q.data.widgets;
		return await this.db
			.table(API.DASHBOARD)
			.put({
				id: q.id,
				name: q.name,
				data: q.data,
				update: q.update,
			})
			.then(() => {
				return {
					data: null,
					message: `Dashboard ${q.data.id} saved to storage`,
					success: true,
				};
			})
			.catch((error: Error) => {
				log(4, ["%cstorage", CSS.STORAGE, API.WIDGET, query, error.message]);
				return {
					data: null,
					message: `Dashboard ${q.data.id} save error: ${error.message}`,
					success: false,
				};
			});
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
					"%clean%c %cstorage%c %cmessages",
					CSS.OK,
					CSS.NONE,
					CSS.STORAGE,
					CSS.NONE,
					CSS.MESSAGES,
					error.message
				);
				return 0;
			});
		return messagesCount;
	};

	/**
	 * Retrieve Messages Data
	 * @param query IQuery
	 * @returns IResponse
	 */
	getMessages = async (query: IQuery): Promise<IResponse> => {
		if (query.widget === "") {
			log(3, [
				"%cget%c %cstorage%c %cmessages",
				CSS.NO_UPDATES,
				CSS.NONE,
				CSS.STORAGE,
				CSS.NONE,
				CSS.MESSAGES,
				query,
			]);
			return {
				data: null,
				message: "Messages Data error",
				success: false,
				query,
			};
		}
		const order = query?.order ?? "utc";
		const now: number = Math.floor(Date.now() / 1000);

		if (order !== "utc") {
			query.since = now - 60 * 60 * 24 * 30;
		}

		if (this.options.delay !== 0) {
			query.before = now - (this.options.delay || 0);
		} else {
			query.before = now;
		}

		const sinceFilter = (topic: { utc: number }) =>
			topic.utc > (query?.since || 0);

		const beforeFilter = (topic: { utc: number }) =>
			topic.utc < (query?.before || now);

		// const visibleFilter = (topic: { visible: number | undefined }) =>
		// 	topic.visible !== 0;

		// const approvedFilter = (topic: { approved: number | undefined }) => {
		// 	topic.approved !== 0;
		// };

		try {
			const topicMessagesCollection: any = this.db
				.table(API.TOPICS)
				.where("widget_id")
				.equals(query.widget)
				.filter(sinceFilter)
				.filter(beforeFilter);

			if (query?.approved === "true") {
				// @ts-expect-error
				topicMessagesCollection.and((topic) => topic.approved === 1);
			} else {
				// @ts-expect-error
				topicMessagesCollection.and((topic) => topic.visible === 1);
			}
			topicMessagesCollection.reverse();

			const topicMessages: any = await topicMessagesCollection
				.limit(query?.limit ?? 25)
				.sortBy(order);

			if (topicMessages.length === 0) {
				return {
					data: null,
					message: "No Messages error",
					success: false,
					query,
				};
			}

			// let messages: any[] = [];
			const getMessages = topicMessages.map((message: any) => {
				return this.db.table(API.MESSAGES).get({ id: message.message_id });
			});

			return Dexie.Promise.all(getMessages).then(async (messages) => {
				const filtered = messages.map((message: any) => {
					if (message !== undefined) return message.data;
				});
				const data = {
					data: {
						messages: filtered,
					},
					query,
					message: "Messages retrieved successfully",
					success: true,
				};

				log(3, [
					"%cget%c %cstorage%c %cmessages",
					CSS.OK,
					CSS.NONE,
					CSS.STORAGE,
					CSS.NONE,
					CSS.MESSAGES,
					data,
				]);
				return data;
			});
		} catch (error: any) {
			log(2, [
				"%cget%c %cstorage%c %cmessages",
				CSS.OK,
				CSS.NONE,
				CSS.STORAGE,
				CSS.NONE,
				CSS.NO_UPDATES,
				query,
				error.message,
			]);
			return { data: null, message: "Messages Data error", success: false };
		}
	};

	hideMessage = async (id: string, visible: number) => {
		await this.db
			.table(API.TOPICS)
			.where("message_id")
			.equals(id)
			.modify({ visible: visible ? 1 : 0 })
			.catch((error) => {
				console.error(
					"%chide%c %cstorage%c %cmessage",
					CSS.KO,
					CSS.NONE,
					CSS.STORAGE,
					CSS.NONE,
					CSS.HIDE,
					error.message
				);
				return 0;
			});
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
		log(3, [
			"%cset%c %cstorage%c %cmessages",
			CSS.OK,
			CSS.NONE,
			CSS.STORAGE,
			CSS.NONE,
			CSS.MESSAGES,
			data?.title ?? query.widget,
		]);

		await data.data.messages.forEach(async (message: IMessage) => {
			if (message.id !== null) {
				message.topics[0] = {
					message_id: message.id,
					engagement:
						message.topics[0]?.engagement || message.dynamics?.engagement || 0,
					impressions:
						message.topics[0]?.impressions ||
						message.dynamics?.semrush_visits ||
						0,
					reach:
						message.topics[0]?.reach || message.dynamics?.potential_reach || 0,
					sentiment: message.topics[0]?.sentiment || 0,
					// @ts-ignore
					approved: message.topics[0]?.approved ? 1 : 0,
				};

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
						log(4, [
							"%cset%c %cstorage",
							CSS.KO,
							CSS.NONE,
							CSS.STORAGE,
							"set message",
							`title: ${title}`,
							message,
							error.message,
						]);
					});
				/**
				 * Update topics table with new engagement stats
				 * using put to replace the whole entry
				 */
				const update = {
					title,
					widget_id: query.widget,
					visible: message.topics[0]?.visible || 1,
					// @ts-ignore
					approved: message.topics[0]?.approved || 0,
					message_id: message.id,
					dashboard_id: query.dashboard,
					engagement:
						message.topics[0]?.engagement || message.dynamics?.engagement || 0,
					impressions:
						message.topics[0]?.impressions ||
						message.dynamics?.semrush_visits ||
						0,
					reach:
						message.topics[0]?.reach || message.dynamics?.potential_reach || 0,
					sentiment: message.topics[0]?.sentiment || 0,
					utc: message.utc,
					expires: message.expires,
				};

				await this.db
					.table(API.TOPICS)
					.put(update)
					.catch((error: Error) => {
						errorCount++;
						log(4, [
							"%cset%c %cstorage",
							CSS.KO,
							CSS.NONE,
							CSS.STORAGE,
							"set topic",
							`title: ${title}`,
							message,
							error.message,
						]);
					});
				/**
				 * Update topics table with messages that have become invisible
				 * (including in other topics)
				 */
				await data.data.topics.forEach(async (topic: ITopic) => {
					const id = topic.message_id;
					const show = topic.visible ? 1 : 0;
					// @ts-ignore
					const aprv = topic.approve ? 1 : 0;
					const title = topic.title;
					await this.db
						.table(API.TOPICS)
						.where("message_id")
						.equals(id)
						.modify({ visible: show, approve: aprv })
						.catch((error: Error) => {
							errorCount++;
							log(4, [
								"%cset%c %cstorage",
								CSS.KO,
								CSS.NONE,
								CSS.STORAGE,
								"update message visibility",
								`title: ${title}`,
								`widget: ${topic.widget_id}`,
								error.message,
							]);
						});
				});
			}
		});
		return errorCount === 0 ? 201 : 400;
	};

	/**
	 * Retrieve Series Data
	 * @param query IQuery
	 * @returns IResponse
	 */
	getSeries = async (query: IQuery): Promise<IResponse> => {
		if (query.widget === "") {
			log(3, [
				"%cget%c %cstorage%c %cseries",
				CSS.NO_UPDATES,
				CSS.NONE,
				CSS.STORAGE,
				CSS.NONE,
				CSS.CLOUD,
				query,
			]);
			return {
				data: null,
				message: "Series Data error",
				success: false,
				query,
			};
		}
		const data = await this.db
			.table(API.SERIES)
			.where({ id: query.widget })
			.last()
			.catch(() => {
				log(2, [
					"%cget%c %cstorage%c %cseries",
					CSS.KO,
					CSS.NONE,
					CSS.STORAGE,
					CSS.NONE,
					CSS.SERIES,
					query.widget,
				]);
			});

		const resp = {
			data: data?.data ?? null,
			message: data !== undefined ? "Get Series success" : "Get Series error",
			success: data !== undefined,
			query,
		};
		log(3, [
			"%cget%c %cstorage%c %cseries",
			CSS.OK,
			CSS.NONE,
			CSS.STORAGE,
			CSS.NONE,
			CSS.SERIES,
			resp,
		]);

		return resp;
	};

	/**
	 * Update Series
	 * @param query IQuery
	 * @param data
	 * @returns number
	 */
	setSeries = async (query: IQuery, data: any): Promise<number> => {
		delete data?.query;
		if (query.type === API.SERIES && data !== "") {
			log(3, [
				"%cset%c %cstorage%c %cseries",
				CSS.OK,
				CSS.NONE,
				CSS.STORAGE,
				CSS.NONE,
				CSS.SERIES,
				data?.title ?? query.widget,
			]);
			return await this.db
				.table(API.SERIES)
				.put({
					id: query.widget,
					dashboard_id: query.dashboard,
					hash: query.hash,
					// data: data.data,
					data,
				})
				.then(() => 201)
				.catch((error: Error) => {
					log(2, [
						"%cset%c %cstorage%c %cseries",
						CSS.KO,
						CSS.NONE,
						CSS.STORAGE,
						CSS.NONE,
						CSS.SERIES,
						query,
						error.message,
					]);
					return 400;
				});
		}
		return 400;
	};

	/**
	 * Retrieve Widget from Storage
	 * @param query IQuery
	 * @returns IResponse
	 */
	getWidget = async (query: IQuery): Promise<IResponse> => {
		if (query.id === "") {
			log(3, [
				"%cget%c %cstorage%c %cwidget",
				CSS.KO,
				CSS.NONE,
				CSS.STORAGE,
				CSS.NONE,
				CSS.WIDGET,
				query,
			]);
			return {
				data: null,
				message: "Widget Data error",
				success: false,
				query,
			};
		}
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
		data.message = `Widget ${query.id} retrieved from storage`;
		data.success = true;
		return data;
	};

	/**
	 * Retrieve Widgets from Storage
	 * @param query IQuery
	 * @returns IResponse
	 */
	getWidgets = async (query?: IQuery): Promise<IResponse> => {
		const dashboardFilter = (widget: { dashboard_id: string }) => {
			return query?.dashboard === widget.dashboard_id;
		};

		const typeFilter = (widget: { type: string }) => {
			return query?.type === widget.type;
		};

		const nameFilter = (slide: { name: string }) => {
			return query?.name ? slide.name.includes(query?.name) : false;
		};

		// let data = []

		const data = await this.db
			.table(API.WIDGET)
			.toArray()
			.then((res) => {
				return query?.dashboard ? res.filter(dashboardFilter) : res;
			})
			.then((res) => {
				return query?.type ? res.filter(typeFilter) : res;
			})
			.then((res) => {
				return query?.name ? res.filter(nameFilter) : res;
			})
			.catch(() => {
				log(2, ["%cstorage", CSS.STORAGE, EVENTS.WIDGET_LOAD, query]);
			});

		data !== undefined &&
			log(3, [
				"%cstorage%c %cwidgets",
				CSS.STORAGE,
				CSS.NONE,
				CSS.MESSAGES,
				query,
			]);

		return {
			// @ts-ignore
			data: data !== undefined ? { data, query } : null,
			message:
				data !== undefined
					? `Widgets loaded from storage`
					: `Widgets load error`,
			success: data !== undefined,
		};
	};

	/**
	 * Update Cloud
	 * @param query IQuery
	 * @returns number
	 */
	setWidget = async (query: IQuery): Promise<IResponse> => {
		return await this.db
			.table(API.WIDGET)
			.put({
				id: query.id,
				name: query.title,
				dashboard_id: query.dashboard_id,
				type: query.type,
				update: query.update,
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
				log(2, ["%cstorage", CSS.STORAGE, EVENTS.SLIDE_LOAD, query.id]);
			});

		return {
			data,
			query,
			message:
				data !== undefined ? `Slide loaded from storage` : `Slide load error`,
			success: data !== undefined,
		};
	};

	/**
	 * Retrieve Slides from Storage
	 * @param query IQuery
	 * @returns IResponse
	 */
	getSlides = async (query: IQuery): Promise<IResponse> => {
		const idFilter = (slide: { id: string }) => {
			return query?.id ? slide.id === query.id : false;
		};
		const nameFilter = (slide: { name: string }) => {
			return query?.name ? slide.name.includes(query?.name) : false;
		};

		const presentationFilter = (slide: { presentation_id: string }) => {
			return query?.presentation_id
				? slide.presentation_id === query.presentation_id
				: false;
		};

		const slidesCollection: any = this.db.table(API.SLIDE);

		const data: any = await slidesCollection
			.toArray()
			.then((res: any) => {
				return query?.presentation_id ? res.filter(presentationFilter) : res;
			})
			.then((res: any) => {
				return query?.id ? res.filter(idFilter) : res;
			})
			.then((res: any) => {
				return query?.name ? res.filter(nameFilter) : res;
			});
		data &&
			data.sort((a: any, b: any) => {
				return a.order_index - b.order_index;
			});

		data !== undefined &&
			log(3, ["%cstorage%c %cslides", CSS.STORAGE, CSS.NONE, CSS.SLIDE, query]);

		return {
			// @ts-ignore
			data,
			query, // : data !== undefined ? { data, query } : null,
			message:
				data !== undefined ? `Slides loaded from storage` : `Slides load error`,
			success: data !== undefined,
		};
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
				name: query.data.name.replace("-copy", "") || "Not set",
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
		data.query = query;
		data.message = `Presentation ${query.id} retrieved from storage`;
		data.success = true;
		return data;
	};

	/**
	 * Retrieve Presentations from Storage
	 * @param query IQuery
	 * @returns IResponse
	 */
	getPresentations = async (query?: IQuery): Promise<IResponse> => {
		const nameFilter = (presentation: { name: string }) => {
			return query?.name ? presentation.name.includes(query?.name) : false;
		};

		const presentationsCollection: any = this.db.table(API.PRESENTATION);

		const data: any = await presentationsCollection
			.toArray()
			.then((res: any) => {
				return query?.name ? res.filter(nameFilter) : res;
			});

		data !== undefined &&
			log(3, [
				"%cstorage%c %cpresentations",
				CSS.STORAGE,
				CSS.NONE,
				CSS.PRESENTATION,
				query,
			]);

		return {
			data,
			query,
			message:
				data !== undefined
					? `Presentations loaded from storage`
					: `Presentations load error`,
			success: data !== undefined,
		};
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
					query,
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
					query,
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
				log(2, [
					"%cstorage",
					CSS.STORAGE,
					EVENTS.PREFERENCE_LOAD,
					preference.id,
				]);
			});

		return {
			// @ts-ignore
			data: data !== undefined ? { preferences: data } : null,
			message:
				data !== undefined
					? `Preference loaded from storage`
					: `Preference load error`,
			success: data !== undefined,
			query: { preference, widget: "" }, // widget needs to have a value in IQuery interface
		};
	};

	/**
	 * Retrieve Preferences from Storage
	 * @param query IQuery
	 * @returns IResponse
	 */
	getPreferences = async (query?: IQuery): Promise<IResponse> => {
		const idFilter = (preference: { id: string }) => {
			return query?.id ? (query.id = preference.id) : false;
		};

		const preferencesCollection: any = this.db.table(API.PREFERENCE);

		const data: any = await preferencesCollection.toArray().then((res: any) => {
			return query?.id ? res.filter(idFilter) : res;
		});

		data !== undefined &&
			log(3, [
				"%cstorage%c %cpreferences",
				CSS.STORAGE,
				CSS.NONE,
				CSS.PRESENTATION,
				query,
			]);

		return {
			// @ts-ignore
			data: data !== undefined ? { preferences: data, query } : null,
			message:
				data !== undefined
					? `Preferences loaded from storage`
					: `Preferences load error`,
			success: data !== undefined,
		};
	};

	/**
	 * Update Preference in Storage
	 * @param preference IPreference
	 * @returns number
	 */
	setPreference = async (preference: IPreference): Promise<IResponse> => {
		return await this.db
			.table(API.PREFERENCE)
			.put({
				id: preference.id,
				value: preference.value,
				update: preference.update,
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

	/**
	 * Retrieve List of Images from Storage
	 * @param query IQuery
	 * @returns IResponse
	 */
	getImages = async (query?: IQuery): Promise<IResponse> => {
		const idFilter = (id: string) => {
			return query?.id ? id.includes(query.id) : false;
		};

		const imagesCollection: any = this.db.table(API.IMAGES);

		const data: any = await imagesCollection.toArray().then((res: any) => {
			return query?.id ? res.filter(idFilter) : res;
		});

		data !== undefined &&
			log(3, [
				"%cstorage%c %cimages",
				CSS.STORAGE,
				CSS.NONE,
				CSS.PRESENTATION,
				query,
			]);

		return {
			// @ts-expect-error query.widget is obligatory but not always
			data: data !== undefined ? { images: data, query } : null,
			message:
				data !== undefined ? `Images loaded from storage` : `Images load error`,
			success: data !== undefined,
		};
	};

	/**
	 * Update Image in Storage
	 * @param query IQuery
	 * @returns number
	 */
	setImage = async (query: IQuery): Promise<IResponse> => {
		return await this.db
			.table(API.IMAGES)
			.put({
				id: query.data.name,
				basename: query.data.basename,
				extension: query.data.extension,
				size: query.data.size,
				type: query.data.type,
				url: query.data.url,
			})
			.then(() => {
				return {
					data: null,
					message: `Image ${query.data.name} saved to storage`,
					success: true,
				};
			})
			.catch((error: Error) => {
				console.error(
					"%cstorage",
					CSS.STORAGE,
					EVENTS.IMAGE_SET,
					query,
					error.message
				);
				return {
					data: null,
					message: `Image ${query.data.id} save error: ${error.message}`,
					success: false,
				};
			});
	};
}
