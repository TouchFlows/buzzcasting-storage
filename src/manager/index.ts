import type {
	IPreference,
	IQuery,
	IResponse,
	IStorageOptions,
} from "buzzcasting-utils";
import {
	API,
	CSS,
	EVENTS,
	hashSum,
	log,
	STORAGE,
	typeCss,
} from "buzzcasting-utils";
import { version } from "../../package.json";
import ApiClient from "../api/api";
import DexieClient from "../storage/dexie";
import KeyvalClient from "../storage/keyval";
import LocalStorageClient from "../storage/local-storage";
import SessionStorageClient from "../storage/session-storage";
import WindowClient from "../storage/window";

interface IprocessResponse {
	code: number;
	hash: string;
}

export class BuzzcastingStorageManager {
	private sm:
		| WindowClient
		| LocalStorageClient
		| SessionStorageClient
		| KeyvalClient
		| DexieClient
		| null;

	private api: ApiClient;
	private bc: BroadcastChannel | null;
	private options: IStorageOptions;
	private subscribers: any = [];
	// private temp: {[x:string]:any} = []

	constructor(options: IStorageOptions) {
		log(3, [
			"%cpresentation",
			CSS.PRESENTATION,
			options.presentation,
			EVENTS.VERSION,
			version,
		]);
		this.options = options;
		this.sm = null;
		this.bc = null;
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

	public addSubscriber(query: IQuery) {
		this.subscribers[query.widget] = query;
	}

	public deleteSubscriber(query: IQuery) {
		delete this.subscribers[query.widget];
	}

	public update = async (data: any) => {
		log(3, ["%cupdate%c %cdata", CSS.NO_UPDATES, CSS.NONE, CSS.MESSAGES, data]);
		if (this.sm === null || Object.keys(this.subscribers).length === 0) {
			return;
		}

		const subscriberQueries: any[] = [];

		Object.values(this.subscribers).forEach((apiQuery: any) => {
			// Paralelize calls
			subscriberQueries.push(this.api.get(apiQuery));
		});

		subscriberQueries.forEach(async (apiCall) => {
			await apiCall.then(
				async (apiResp: any) => await this.processResponse(apiResp)
			);
		});
	};

	public apiQuery = async (apiQuery: any): Promise<IprocessResponse> => {
		return await this.api
			.get(apiQuery)
			.then(async (apiResp: any) => await this.processResponse(apiResp))
			.catch((e: unknown) => {
				return { code: 204, hash: "" };
			});
	};

	private processResponse = async (apiResp: any): Promise<IprocessResponse> => {
		let data;
		let status: { code: number; hash: string } = { code: 400, hash: "" };
		let newHash: string | any = "";
		let previousHash;
		if (apiResp.success === true) {
			switch (apiResp.query.type) {
				case API.MESSAGES:
					previousHash = await this.sm?.getHash("cards", apiResp.query);
					// initialize cards
					if (previousHash === "none") {
						apiResp.query.hash = "none";
						await this.sm?.setCards(apiResp.query);
					}
					// check and filter that message has an ID
					apiResp.data.messages = apiResp.data.messages.filter(
						(msg: any) => msg.id !== null
					);

					// check if any topic dynamics have changed
					newHash =
						apiResp.data.messages.length > 0
							? hashSum(apiResp.data.messages[0].utc)
							: "none";

					if (previousHash === newHash) {
						log(3, [
							"%cset%c %cstorage%c %cmessages",
							CSS.NO_UPDATES,
							CSS.NONE,
							CSS.STORAGE,
							CSS.NONE,
							CSS.MESSAGES,
							apiResp.data?.title ?? apiResp.query.widget,
							`same hash:${newHash}`,
						]);
						status.code = 204;
					} else {
						if (this.sm !== null) {
							apiResp.query.hash = newHash;
							await this.sm?.setHash("cards", apiResp.query);
							status.code = await this.sm
								.setMessages(apiResp.query, apiResp)
								.then(async (code) => {
									// setTimeout(() => {
									this.broadcastUpdate(code, apiResp);
									return code;
									// }, 500); // MTM allow tuning thru options
								})
								.catch((e: unknown) => {
									return 500;
								});
						} else {
							status.code = 500;
						}
					}
					break;
				case API.CLOUD:
					previousHash = await this.sm?.getHash(API.CLOUD, apiResp.query);
					newHash = hashSum(apiResp.data.cloud);
					if (previousHash === newHash) {
						log(3, [
							"%cset%c %cstorage%c %ccloud",
							CSS.NO_UPDATES,
							CSS.NONE,
							CSS.STORAGE,
							CSS.NONE,
							CSS.CLOUD,
							apiResp.data?.title ?? apiResp.query.widget,
							`same hash:${newHash}`,
						]);

						log(4, [
							"%cdebug%c %ccloud",
							CSS.NO_UPDATES,
							CSS.NONE,
							CSS.CLOUD,
							apiResp.query,
						]);
						status = { code: 204, hash: newHash };
					} else {
						apiResp.query.hash = newHash;
						await this.sm?.setHash(API.CLOUD, apiResp.query);
						data = {
							data: {
								cloud: apiResp.data,
							},
							message: apiResp.message,
							success: apiResp.success,
							query: apiResp.query,
						};
						if (this.sm !== null) {
							status.code = await this.sm
								.setCloud(apiResp.query, data.data)
								.then((code) => {
									this.broadcastUpdate(code, apiResp);
									return code;
								})
								.catch((e: unknown) => {
									return 500;
								});
						} else {
							status.code = 500;
						}
					}
					break;
				case API.SERIES:
					previousHash = await this.sm?.getHash(API.SERIES, apiResp.query);
					newHash = hashSum(apiResp.data.series);
					if (previousHash === newHash) {
						log(3, [
							"%cset%c %cstorage%c %cseries",
							CSS.NO_UPDATES,
							CSS.NONE,
							CSS.STORAGE,
							CSS.NONE,
							CSS.SERIES,
							apiResp.data?.title ?? apiResp.query.widget,
							`same hash:${newHash}`,
						]);
						log(4, [
							"%cdebug%c %cseries",
							CSS.NO_UPDATES,
							CSS.NONE,
							CSS.SERIES,
							apiResp.query,
						]);
						status = { code: 204, hash: newHash };
					} else {
						apiResp.query.hash = newHash;
						await this.sm?.setHash(API.SERIES, apiResp.query);
						data = {
							data: apiResp.data,
							message: apiResp.message,
							success: apiResp.success,
							query: apiResp.query,
						};
						if (this.sm !== null) {
							status.code = await this.sm
								?.setSeries(apiResp.query, apiResp.data)
								.then((code) => {
									this.broadcastUpdate(code, apiResp);
									return code;
								})
								.catch((e: unknown) => {
									return 500;
								});
						} else {
							status.code = 500;
						}
					}
					break;
				default:
					log(3, [
						`%cfetch%c %capi% %c${apiResp.query.type} `,
						CSS.KO,
						CSS.NONE,
						CSS.API,
						CSS.NONE,
						CSS.NO_UPDATES,
						`Bad request: type ${apiResp.query.type} unknown`,
					]);
					status = { code: 404, hash: newHash };
			}
		} else {
			// status = 401;
			log(3, [
				`%cset%c %c${apiResp.query.type}%c %cunauthorized`,
				CSS.KO,
				CSS.NONE,
				CSS.STORAGE,
				CSS.NONE,
				CSS.NO_UPDATES,
				apiResp.query,
			]);
			/**
			 * Send back data from the local storage instead
			 */
			switch (apiResp.query.type) {
				case API.MESSAGES:
					if (this.sm !== null) {
						return await this.sm
							?.getMessages(apiResp.query)
							.then((response) => {
								this.broadcastUpdate(201, response);
								return { code: 201, hash: newHash };
							});
					} else {
						return { code: 500, hash: newHash };
					}
				case API.CLOUD:
					if (this.sm !== null) {
						return await this.sm?.getCloud(apiResp.query).then((response) => {
							this.broadcastUpdate(201, response);
							return { code: 201, hash: newHash };
						});
					} else {
						return { code: 500, hash: newHash };
					}

				case API.SERIES:
					if (this.sm !== null) {
						return await this.sm?.getSeries(apiResp.query).then((response) => {
							this.broadcastUpdate(201, response);
							return { code: 201, hash: newHash };
						});
					} else {
						return { code: 500, hash: newHash };
					}
			}
		}
		return status;
	};

	public startBroadcastListener = () => {
		const broadcast = this.options.presentation;
		this.bc = new BroadcastChannel(broadcast);

		log(3, ["%cchannel%c %capi", CSS.BROADCAST, CSS.NONE, CSS.API, broadcast]);
		this.bc.onmessage = (messageEvent: MessageEvent) => {
			this.actions(messageEvent);
		};
		this.bc.postMessage({ event: EVENTS.STORAGE_INIT, data: {} });
	};

	private broadcastUpdate = (status: number, resp: IResponse) => {
		switch (status) {
			case 201:
				log(3, [
					`%cupdate%c %cwidget%c %c${resp.query?.type}`,
					CSS.BROADCAST,
					CSS.NONE,
					CSS.WIDGET,
					CSS.NONE,
					typeCss(resp.query),
					// @ts-expect-error query.widget is obligatory but not always
					`${resp?.data?.title ?? ""} ${resp.query.widget}`,
				]);
				log(4, [
					"%cdebug%c %cevent",
					CSS.NO_UPDATES,
					CSS.NONE,
					CSS.BROADCAST,
					resp,
				]);
				this.bc?.postMessage({
					event: EVENTS.WIDGET_UPDATE,
					data: resp.query,
				});
				break;
			case 204:
				// Not modified
				break;
			default:
				log(2, [
					`%cupdate%c %cwidget%c %c${resp.query?.type}`,
					CSS.KO,
					CSS.NONE,
					CSS.WIDGET,
					CSS.NONE,
					typeCss(resp.query),
					"Fetch error",
					resp.query,
				]);
				break;
		}
	};

	public hide = (query: IQuery) => {
		this.api.hideMessage(query);
	};

	private actions = async (messageEvent: MessageEvent) => {
		switch (messageEvent.data.event) {
			case EVENTS.SUBSCRIBE:
				this.addSubscriber(messageEvent.data.data);
				break;
			case EVENTS.UPDATE:
				log(3, [
					"%cupdate%c %capi%c %cstorage",
					CSS.BROADCAST,
					CSS.NONE,
					CSS.API,
					CSS.NONE,
					CSS.STORAGE,
					messageEvent.data,
				]);
				await this.update(messageEvent.data.data);
				break;
			default:
		}
	};

	public cleanMessages = async () => {
		if (this.options?.suspended) {
			log(2, [
				"%cclean%c %cstorage%c %cmessages",
				CSS.KO,
				CSS.NONE,
				CSS.STORAGE,
				CSS.NONE,
				CSS.MESSAGES,
				`Account suspended`,
			]);
			return;
		}

		const retentionDuration = this.options?.retention || 86400 * 4;

		const count: number | undefined = await this.sm?.cleanMessages(
			retentionDuration
		);

		log(3, [
			"%cclean%c %cstorage%c %cmessages",
			CSS.OK,
			CSS.NONE,
			CSS.STORAGE,
			CSS.NONE,
			CSS.MESSAGES,
			`${count} messages deleted`,
		]);
	};

	public hideMessage = async (query: IQuery): Promise<IResponse> => {
		// Clear from local storage
		const count = await this.sm?.hideMessage(query.id, 0);
		log(3, [
			"%chide%c %cstorage%c %cmessages",
			CSS.OK,
			CSS.NONE,
			CSS.STORAGE,
			CSS.NONE,
			CSS.MESSAGES,
			`${count} messages hidden`,
		]);
		// Clear from api server
		return await this.api.hideMessage(query);
	};

	public hideLabels: (query: IQuery) => Promise<IResponse> = async (
		query: IQuery
	): Promise<IResponse> => {
		return await this.api.hideLabels(query);
	};

	public getSubscribers = async () => {
		return await new Promise<any[]>((resolve) => resolve(this.subscribers));
	};

	public deleteSubscribers = async () => {
		this.subscribers = [];
		return await new Promise<any[]>((resolve) => resolve(this.subscribers));
	};

	public getSlide = async (query: IQuery): Promise<IResponse | undefined> => {
		return await this.sm?.getSlide(query);
	};

	public getSlides = async (query: IQuery): Promise<IResponse | undefined> => {
		return await this.sm?.getSlides(query);
	};

	public setSlide = async (query: IQuery): Promise<IResponse | undefined> => {
		return await this.sm?.setSlide(query);
	};

	public loadSlide = async (query: IQuery): Promise<number> => {
		return await this.api.loadSlide(query);
	};

	public storeSlide = async (query: IQuery): Promise<IResponse | number> => {
		return await this.api.storeSlide(query);
	};

	public getPresentation = async (
		query: IQuery
	): Promise<IResponse | undefined> => {
		return await this.sm?.getPresentation(query);
	};

	public getPresentations = async (
		query?: IQuery
	): Promise<IResponse | undefined> => {
		return await this.sm?.getPresentations(query);
	};

	public setPresentation = async (
		query: IQuery
	): Promise<IResponse | undefined> => {
		return await this.sm?.setPresentation(query);
	};

	public loadPresentation = async (query: IQuery): Promise<number> => {
		return await this.api.loadPresentation(query);
	};

	public storePresentation = async (
		query: IQuery
	): Promise<IResponse | number> => {
		return await this.api.storePresentation(query);
	};

	public getPreference = async (
		preference: IPreference
	): Promise<IResponse | undefined> => {
		return await this.sm?.getPreference(preference);
	};

	public getPreferences = async (
		query?: IQuery
	): Promise<IResponse | undefined> => {
		return await this.sm?.getPreferences(query);
	};

	public setPreference = async (
		preference: IPreference
	): Promise<IResponse | undefined> => {
		return await this.sm?.setPreference(preference);
	};

	public loadPreference = async (
		preference: IPreference
	): Promise<IResponse | undefined> => {
		return await this.api.loadPreference(preference);
	};

	public storePreference = async (
		preference: IPreference
	): Promise<IResponse | number> => {
		return await this.api.storePreference(preference);
	};

	/* public loadDashboardWidgets = async (query: IQuery): Promise<Number> => {
		return await this.api.loadDashboardWidgets(query);
	}; */

	public getWidget = async (query: IQuery): Promise<IResponse | undefined> => {
		return await this.sm?.getWidget(query);
	};

	public getWidgets = async (
		query?: IQuery
	): Promise<IResponse | undefined> => {
		return await this.sm?.getWidgets(query);
	};

	public setWidget = async (query: IQuery): Promise<IResponse | undefined> => {
		return await this.sm?.setWidget(query);
	};

	public loadDashboards = async (
		query?: IQuery
	): Promise<IResponse | undefined> => {
		return await this.api.loadDashboards(query);
	};

	public getDashboard = async (
		query: IQuery
	): Promise<IResponse | undefined> => {
		return await this.sm?.getDashboard(query);
	};

	public getDashboards = async (): Promise<IResponse | undefined> => {
		return await this.sm?.getDashboards();
	};

	public setDashboard = async (
		query: IQuery
	): Promise<IResponse | undefined> => {
		return await this.sm?.setDashboard(query);
	};

	public loadImages = async (
		folder: string
	): Promise<IResponse | undefined> => {
		return await this.api.loadImages(folder);
	};

	public storeImage = async (
		imageFile: FormData
	): Promise<IResponse | number> => {
		return await this.api.storeImage(imageFile);
	};

	public deleteImage = async (
		folderName: string,
		imageName: string
	): Promise<IResponse | number> => {
		return await this.api.deleteImage(folderName, imageName);
	};

	public getImages = async (query: IQuery): Promise<IResponse | undefined> => {
		return await this.sm?.getImages(query);
	};

	public setImage = async (query: IQuery): Promise<IResponse | undefined> => {
		return await this.sm?.setImage(query);
	};

	public getHash = async (resource: string, query: IQuery): Promise<any> => {
		return await this.sm?.getHash(resource, query);
	};

	public setHash = async (resource: string, query: IQuery): Promise<number> => {
		return (await this.sm?.setHash(resource, query)) ?? 400;
	};
}
