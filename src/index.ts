import { IQuery } from "./interfaces/IQuery";

import ApiClient from "./api";
import {
	CLOUD,
	MESSAGES,
	SERIES,
	STORAGE_DEXIE,
	STORAGE_KEYVAL,
	STORAGE_LOCAL,
	STORAGE_SESSION,
	STORAGE_WINDOW,
} from "./constants";
import DexieClient from "./dexie";
import { IStorageManager } from "./interfaces/IStorageManager";
import KeyvalClient from "./keyval";
import LocalStorageClient from "./local-storage";
import SessionStorageClient from "./session-storage";
import WindowClient from "./window";

declare global {
	interface Window {
		BuzzCasting: any

	}
}

export default class BuzzcastingStorageManager {
  private sm:
    | WindowClient
    | LocalStorageClient
    | SessionStorageClient
    | KeyvalClient
    | DexieClient
    | null;
  private api: ApiClient;
  private bc: BroadcastChannel;
  private options: IStorageManager;

  //private options: IStorageManager

  constructor(options: IStorageManager) {
    this.options = options;
    this.bc = new BroadcastChannel(options.app);
    console.debug("[sm] broadcast channel", options.app);
    this.bc.onmessage = (messageEvent: MessageEvent) => {
      this.actions(messageEvent);
    };
    this.bc.postMessage({ event: "sm-init", data: {} });
    this.api = new ApiClient(options);
    switch (options.storage) {
      case STORAGE_DEXIE:
        this.sm = new DexieClient(options);
        break;
      case STORAGE_LOCAL:
        this.sm = new SessionStorageClient(options);
        break;
      case STORAGE_SESSION:
        this.sm = new LocalStorageClient(options);
        break;
      case STORAGE_KEYVAL:
        this.sm = new KeyvalClient(options);
        break;
      case STORAGE_WINDOW:
        this.sm = new WindowClient(options);
        break;
      default:
        this.sm = null;
    }
  }

  public update = async () => {
    const subscribers = this.sm?.getSubscribers();
    if (subscribers?.length === 0) return;
    const subscriberQuery: any[] = [];
    // Paralelize calls
    subscribers?.forEach((dataset) => {
      subscriberQuery.push(this.api.get(dataset));
    });
    await Promise.allSettled(subscriberQuery).then((results) =>
      results.forEach((res) => {
        if (res.status === "fulfilled") {
          const data = res.value;
          switch (data.query.type) {
            case MESSAGES:
              this.sm?.setMessages(data.query, data.data);
              break;
            case CLOUD:
              this.sm?.setCloud(data.query, data.data);
              break;
            case SERIES:
              this.sm?.setSeries(data.query, data.data);
              break;
            default:
              console.warn(`data type ${data.query.type} unknown`);
          }
          console.debug("[store]", data.data.title ?? data.query.widget);
          this.bc.postMessage({ event: "widget-update", data: data.query });
        } else {
          console.warn("[store error]");
        }
      })
    );
  };

  public hide = (query: IQuery) => {
    this.api.hideMessage(query);
  };

  private actions = async (messageEvent: MessageEvent) => {
    switch (messageEvent.data.event) {
      case "subscribe":
        this.sm?.subscribe(messageEvent.data.data);
        break;
      case "update":
        console.debug("[sm] update", messageEvent.data);
        await this.update();
        break;
      default:
    }
  };

  public getCloud = async (query: IQuery) => {
    return await this.sm?.getCloud(query);
  };

  public getSeries = async (query: IQuery) => {
    return await this.sm?.getSeries(query);
  };

  public getMessages = async (query: IQuery) => {
    return await this.sm?.getMessages(query);
  };

  public cleanMessages = async () => {
    const retentionDuration = this.options?.retention || 86400 * 4;
    return await this.sm?.cleanMessages(retentionDuration);
  };

  public getSubscribers = async () => {
    return await this.sm?.getSubscribers();
  };
}
