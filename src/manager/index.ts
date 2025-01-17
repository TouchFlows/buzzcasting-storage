import type { IQuery, IResponse, IStorageOptions } from "..";
import { API, CSS, EVENTS, STORAGE } from "..";
import { version } from "../../package.json";
import ApiClient from "../api/api";
import DexieClient from "../storage/dexie";
import KeyvalClient from "../storage/keyval";
import LocalStorageClient from "../storage/local-storage";
import SessionStorageClient from "../storage/session-storage";
import WindowClient from "../storage/window";
import { hashSum } from "../utils";

export class BuzzcastingStorageManager {
	private sm:
		| WindowClient
		| LocalStorageClient
		| SessionStorageClient
		| KeyvalClient
		| DexieClient
		| null;

	private api: ApiClient;
	private bc: BroadcastChannel;
	private options: IStorageOptions;

	constructor(options: IStorageOptions) {
		console.info(
			"%cstorage%c %cslide",
			CSS.STORAGE,
			CSS.NONE,
			CSS.SLIDE,
			options.slide,
			EVENTS.VERSION,
			version
		);
		this.options = options;
		this.sm = null;

		const broadcast = options?.slide || options.app;
		this.bc = new BroadcastChannel(broadcast);
		console.info(
			"%capi%c %cbroadcast",
			CSS.API,
			CSS.NONE,
			CSS.BROADCAST,
			EVENTS.CHANNEL,
			broadcast
		);
		this.bc.onmessage = (messageEvent: MessageEvent) => {
			this.actions(messageEvent);
		};
		this.bc.postMessage({ event: EVENTS.STORAGE_INIT, data: {} });

		this.api = new ApiClient(options);
		switch (options.storage) {
			case STORAGE.DEXIE:
				this.sm = new DexieClient(options);
				break;
			case STORAGE.LOCAL:
				this.sm = new SessionStorageClient(options);
				break;
			case STORAGE.SESSION:
				this.sm = new LocalStorageClient(options);
				break;
			case STORAGE.KEYVAL:
				this.sm = new KeyvalClient(options);
				break;
			case STORAGE.WINDOW:
				this.sm = new WindowClient(options);
				break;
			default:
			// this.sm = null
		}
	}

	public update = async (query?: IQuery) => {
		if (this.sm === null) {
			return;
		}
		const subscribers = await this.sm.getSubscribers();
		if (subscribers.length === 0) {
			return;
		}
		const subscriberQuery: any[] = [];

		// single update for initial load
		if (query) {
			subscriberQuery.push(this.api.get(query));
		} else {
			// Paralelize calls
			subscribers?.forEach((query: IQuery) => {
				subscriberQuery.push(this.api.get(query));
			});
		}

		await Promise.allSettled(subscriberQuery).then((results) =>
			results.forEach(async (res) => {
				let data
				let status: number | void = 400;
				if (res.status === "fulfilled") {
					let result = res.value;
					if (this.sm === null) {
						return 400;
					}
					if (result.success === true) {
						
						const previousQuery = this.sm.subscribers.filter(
							(query: IQuery) => query.widget === result.query.widget
						)[0];
						let newHash: string | any[] = "";
						let filteredMessages: any[];
						switch (result.query.type) {
							case API.MESSAGES:
								filteredMessages = result.data.messages.filter(
									(msg: any) => msg.id !== null
								);
								result.data.messages = filteredMessages;
								// check if any topic dynamics have changed
								newHash = hashSum(result.data.messages);
								if (previousQuery.hash === newHash) {
									console.info(
										"%capi%c %cno updates",
										CSS.API,
										CSS.NONE,
										CSS.NO_UPDATES,
										API.MESSAGES,
										result.query.slide,
										result.query.widget
									);
									console.debug(
										"%capi%c %cno updates",
										CSS.API,
										CSS.NONE,
										CSS.NO_UPDATES,
										API.MESSAGES,
										result
									);
									return 204;
								} else {
									data = result
									previousQuery.hash = newHash;
									status = await this.sm.setMessages(result.query, result);
								}

								break;
							case API.CLOUD:
								newHash = hashSum(result.data);
								if (previousQuery.hash === newHash) {
									console.info(
										"%capi%c %cno updates",
										CSS.API,
										CSS.NONE,
										CSS.NO_UPDATES,
										API.CLOUD,
										result.query.slide,
										result.query.widget
									);
									console.debug(
										"%capi%c %cno updates",
										CSS.API,
										CSS.NONE,
										CSS.NO_UPDATES,
										API.CLOUD,
										result
									);
									status = 204;
								} else {
									previousQuery.hash = newHash;
									data = {
										data: {
											dashboard: result.query.dashboard,
											cloud: result.data,
											query: result.query,
											slide: result.query.slide,
										},
										query: result.query,
										message: result.message,
										success: result.success,
									};
									status = await this.sm.setCloud(result.query, data.data.cloud);
								}
								break;
							case API.SERIES:
								newHash = hashSum(result.data);
								if (previousQuery.hash === newHash) {
									console.info(
										"%capi%c %cno updates",
										CSS.API,
										CSS.NONE,
										CSS.NO_UPDATES,
										API.SERIES,
										result.query.slide,
										result.query.widget
									);
									console.debug(
										"%capi%c %cno updates",
										CSS.API,
										CSS.NONE,
										CSS.NO_UPDATES,
										API.SERIES,
										result
									);
									status = 204;
								} else {
									previousQuery.hash = newHash;
									data = {
										data: {
											dashboard: result.query.dashboard,
											series: result.data,
											query: result.query,
											slide: result.query.slide,
										},
										query: result.query,
										message: result.message,
										success: result.success,
									};
									status = await this.sm.setSeries(result.query, data.data.series);
								}
								break;
							default:
								console.warn(
									"%capi%c %cstorage",
									CSS.API,
									CSS.NONE,
									CSS.STORAGE,
									"error",
									`data type ${result.query.type} unknown`
								);
						}
					} else {
						status = 401;
					}

					// Data has been updated now get results from storage
					// @ts-ignore

					switch (status) {
						case 201:
							console.info(
								"%capp%c %cbroadcast",
								CSS.API,
								CSS.NONE,
								CSS.BROADCAST,
								result.query.slide,
								result.data.title ?? result.query.widget
							);
							console.debug(
								"%capp%c %cbroadcast",
								CSS.API,
								CSS.NONE,
								CSS.BROADCAST,
								result
							);
							const query = structuredClone(data.query);
							switch (result.query.type) {
								case "messages":
									result = await this.sm.getMessages(query);
									break;
								case "cloud":
									result = await this.sm.getCloud(query);
									if (result) result.query = query;
									break;
								case "series":
									result = await this.sm.getSeries(query);
									if (result) result.query = query;
									break;
								default:
									console.warn(
										"%capp%c %cbroadcast",
										CSS.API,
										CSS.NONE,
										CSS.BROADCAST,
										"Unhandled data type",
										result.query
									);
							}
							result &&
								this.bc.postMessage({
									event: EVENTS.WIDGET_UPDATE,
									data: result.data,
								});
							break;
						default:
							console.warn(
								"%capp%c %cbroadcast",
								CSS.API,
								CSS.NONE,
								CSS.BROADCAST,
								"Fetch error",
								result.query.slide,
								result.data.title ?? result.query.widget
							);
							break;
					}
					return status;
				} else {
					console.warn(
						"%capi%c %cstorage",
						CSS.API,
						CSS.NONE,
						CSS.STORAGE,
						EVENTS.ERROR,
						res.status
					);
					return 400;
				}
			})
		);
	};

	public hide = (query: IQuery) => {
		this.api.hideMessage(query);
	};

	private actions = async (messageEvent: MessageEvent) => {
		switch (messageEvent.data.event) {
			case EVENTS.SUBSCRIBE:
				this.sm?.subscribe(messageEvent.data.data);
				break;
			case EVENTS.UPDATE:
				console.debug(
					"%capi%c %cstorage",
					CSS.API,
					CSS.NONE,
					CSS.STORAGE,
					EVENTS.UPDATE,
					messageEvent.data
				);
				await this.update();
				break;
			default:
		}
	};

	public cleanMessages = async () => {
		if (this.options?.suspended) {
			console.info(
				"%cstorage%c %cstorage",
				CSS.STORAGE,
				CSS.NONE,
				CSS.MESSAGES,
				`Account suspended`
			);
			return;
		}

		const retentionDuration = this.options?.retention || 86400 * 4;

		const count: number | undefined = await this.sm?.cleanMessages(
			retentionDuration
		);
		console.info(
			"%cstorage%c %cstorage",
			CSS.STORAGE,
			CSS.NONE,
			CSS.MESSAGES,
			`${count} messages deleted`
		);
	};

	public hideMessage = async (query: IQuery): Promise<IResponse> => {
		const count = await this.sm?.hideMessage(query.id, 0);

		console.info(
			"%cstorage%c %cstorage",
			CSS.STORAGE,
			CSS.NONE,
			CSS.HIDE,
			`${count} messages hidden`
		);

		return await this.api.hideMessage(query);
	};

	public hideLabels: (query: IQuery) => Promise<IResponse> = async (
		query: IQuery
	): Promise<IResponse> => {
		return await this.api.hideLabels(query);
	};

	public getSubscribers = async () => {
		return await this.sm?.getSubscribers();
	};

	public loadSlide = async (query: IQuery): Promise<IResponse> => {
		return await this.api.loadSlide(query);
	};

	public storeSlide = async (query: IQuery): Promise<IResponse | number> => {
		return await this.sm?.storeSlide(query).then(async () => {
			if (query?.update && query.update) {
				return await this.api.storeSlide(query);
			} else {
				return new Promise((resolve, _reject) => {
					resolve(201);
				});
			}
		});
	};
}
