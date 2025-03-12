import type { IModal, IQuery, IResponse } from "..";
import { API, BuzzcastingStorageReader, CSS, EVENTS } from "..";
import { attrs, clearContents, log } from "../utils";

/**
 * Main class for managing widgets and data updates
 */
export default class Widget {
	private storageReader: BuzzcastingStorageReader;
	private broadcastChannel: BroadcastChannel;
	private element: HTMLElement;
	private query: IQuery;

	private callbacks: Array<(arg: IResponse) => void>;

	/**
	 * Main container for managing widgets and data updates
	 *
	 * @param element widget web component
	 * @param callbacks functions in the widget that will receive the update
	 * @param selector container for the element - by default buzzcasting-presentation (optional)
	 */
	constructor(
		element: HTMLElement,
		callbacks: Array<(arg: IResponse) => void>,
		selector?: string
	) {
		this.element = element;

		this.callbacks = callbacks;

		selector =
			typeof selector !== "undefined" ? selector : "buzzcasting-presentation";

		let query: IQuery;
		// @ts-ignore
		query = { ...element.dataset };
		delete query.hmr;

		query.presentation =
			element.closest(selector.toUpperCase())?.id ?? `${selector} not found`;

		//query = widgetParams(query);
		this.query = query;

		clearContents(element);

		const options = window.BuzzCasting.getOptions();
		this.storageReader = new BuzzcastingStorageReader(options);
		// @ts-ignore
		this.broadcastChannel = new BroadcastChannel(query.presentation);
		this.broadcastListener();
	}

	public addCallbackListener(cb: (arg: IResponse) => void): void {
		this.callbacks.push(cb);
	}

	/**
	 * Data received from BroadcastChannel
	 * data that is broadcast needs to be a IMessage[] |ICloud or ISeries structure
	 */
	public broadcastListener() {
		const query: IQuery = this.query;

		this.broadcastChannel.onmessage = async (messageEvent: MessageEvent) => {
			const update: IQuery = messageEvent.data.data;
			switch (messageEvent.data.event) {
				case EVENTS.WIDGET_UPDATE:
					log(4, [
						"%cwidget%c %cupdate",
						CSS.WIDGET,
						CSS.NONE,
						CSS.GET_DATA,
						this.query.type,
						{ id: this.query.widget, element: this.element },
					]);
					try {
						if (update.widget === query.widget) {
							this.callbacks.forEach(async (cb) => {
								const data = await this.getData();
								cb(data);
							});
						}
					} catch (e) {
						log(4, [EVENTS.WIDGET_UPDATE, update]);
					}

					break;
				case EVENTS.APP_READY:
					this.subscribe();
					break;
				default:
			}
		};
	}

	/**
	 * This is used to register the component on the container's broadcast channel
	 * This takes place when the container indicates it has finished loading (ready)
	 */
	subscribe() {
		log(3, [
			"%cwidget%c %csubscribe",
			CSS.WIDGET,
			CSS.NONE,
			CSS.SUBSCRIBE,
			this.query.presentation,
			this.query.widget,
		]);

		log(4, [
			"%cwidget%c %csubscribe",
			CSS.WIDGET,
			CSS.NONE,
			CSS.SUBSCRIBE,
			this.query,
		]);
		this.broadcastChannel.postMessage({
			event: EVENTS.SUBSCRIBE,
			data: this.query,
		});
	}

	/**
	 * Generic call to any query type
	 *
	 * @returns IResponse
	 */
	public getData = async (): Promise<IResponse> => {
		switch (this.query.type) {
			case API.CLOUD:
				return await this.getCloud();
			case API.MESSAGES:
				return await this.getMessages();
			case API.SERIES:
				return await this.getSeries();
		}
		return {
			data: null,
			message: `wrong method call, '${this.query.type}' is unknown`,
			success: false,
		};
	};

	/**
	 * Get Widget Coud Data
	 *
	 * @returns IResponse
	 */
	public getCloud = async (): Promise<IResponse> => {
		if (this.query.type !== API.CLOUD) {
			log(4, [
				"%cstorage%c %cwidget",
				CSS.STORAGE,
				CSS.NONE,
				CSS.WIDGET,
				this.query.widget,
				"Wrong method call for getCloud, expected type is",
				this.query.type,
			]);
			log(3, [
				"%cstorage%c %cwidget",
				CSS.API,
				CSS.NONE,
				CSS.CLOUD,
				this.query,
			]);
			return {
				data: null,
				message: `wrong method call for getCloud, expected type is '${this.query.type}'`,
				success: false,
			};
		}
		return await this.storageReader.getCloud(this.query);
	};

	/**
	 * Get Widget Messages Data
	 *
	 * @returns IResponse
	 */
	public getMessages = async (): Promise<IResponse> => {
		if (this.query.type !== API.MESSAGES) {
			log(4, [
				"%cstorage%c %cwidget",
				CSS.STORAGE,
				CSS.NONE,
				CSS.WIDGET,
				this.query.widget,
				"Wrong method call for getMessages, expected type is",
				this.query.type,
			]);
			return {
				data: null,
				message: `wrong method call for getMessages, expected type is '${this.query.type}'`,
				success: false,
			};
		}

		log(3, [
			"%cstorage%c %cwidget",
			CSS.API,
			CSS.NONE,
			CSS.MESSAGES,
			this.query,
		]);
		return await this.storageReader.getMessages(this.query);
	};

	/**
	 * Get Widget Series Data
	 *
	 * @returns IResponse
	 */
	public getSeries = async (): Promise<IResponse> => {
		if (this.query.type !== API.SERIES) {
			log(3, [
				"%cstorage%c %cwidget",
				CSS.STORAGE,
				CSS.NONE,
				CSS.WIDGET,
				this.query.widget,
				"Wrong method call for getSeries, expected type is",
				this.query.type,
			]);
			log(2, [
				"%cstorage%c %cwidget",
				CSS.STORAGE,
				CSS.NONE,
				CSS.MESSAGES,
				this.query,
			]);
			return {
				data: null,
				message: `wrong method call for getSeries, expected type is '${this.query.type}'`,
				success: false,
			};
		}
		return await this.storageReader.getSeries(this.query);
	};

	/**
	 * Emit a show modal event using the element's attributes
	 * the component is the web component name to show
	 *
	 * @param modal IModal
	 */
	public showModal = (modal: IModal) => {
		log(3, [
			"%cwidget",
			CSS.WIDGET,
			EVENTS.SHOW_MODAL,
			modal.showComponent,
			// @ts-ignore
			attrs(this.element.attributes), //props['data-widget'],
		]);
		const ev = new CustomEvent(EVENTS.SHOW_MODAL, {
			detail: {
				component: modal.showComponent,
				props: modal.props, //mergedProps,
				timeout: modal?.timeout,
			},
			bubbles: true,
			cancelable: true,
			composed: true,
		});
		window.dispatchEvent(ev);
	};

	public destroy() {
		this.broadcastChannel.close();
	}
}
