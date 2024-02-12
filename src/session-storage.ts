import { IQuery } from "./interfaces/IQuery";
import { IStorageManager } from "./interfaces/IStorageManager";
import { getKey, moderation } from "./helpers";
import { MESSAGES } from "./constants";

export default class SessionStorageClient {
  private subscribers: Array<any> = [];
  private options: IStorageManager;

  constructor(options: IStorageManager) {
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

  setCloud = async (query: IQuery, data: any) => {
    const key = getKey(query);
    return new Promise<any>(async (resolve) => {
      resolve(window.sessionStorage.setObject(key, data));
    });
  };

  getCloud = async (query: IQuery) => {
    const key = getKey(query);
    return new Promise<any>(async (resolve) => {
      resolve(window.sessionStorage.getObject(key));
    });
  };

  setSeries = async (query: IQuery, data: any) => {
    const key = getKey(query);
    return new Promise<any>(async (resolve) => {
      resolve(window.sessionStorage.setObject(key, data));
    });
  };

  getSeries = async (query: IQuery) => {
    const key = getKey(query);
    return new Promise<any>(async (resolve) => {
      resolve(window.sessionStorage.getObject(key));
    });
  };

  setMessages = async (query: IQuery, data: any) => {
    const key = getKey(query);
    return new Promise<any>(async (resolve) => {
      resolve(window.sessionStorage.setObject(key, data));
    });
  };

  getMessages = async (query: IQuery) => {
    const key = getKey(query);
    return new Promise<any>(async (resolve) => {
      resolve(window.sessionStorage.getObject(key));
    });
  };

  cleanMessages = async (_retentionDuration: number) => {
    console.log("cleanMessages not implemented for ", this.options.storage);
    return;
  };

  setWidget = async (query: IQuery) => {
    let key = `widget.${query.widget}`;
    return new Promise<any>(async (resolve) => {
      resolve(window.sessionStorage.setObject(key, query));
    });
  };

  subscribe = (query: IQuery) => {
    if (query.widget === undefined) {
      const info = query.topics?.split("-");
      query.dashboard = info ? info[0] : '';
      query.widget = info ? info[1] : '';
    }
    if (query.type === MESSAGES) {
      query = moderation(this.options, query);
    }
    const widgetExists = this.subscribers.filter(
      (widget) => widget.widget == query.widget
    );
    if (widgetExists.length) return;
    this.subscribers.push(query);
  };

  getSubscribers() {
    return this.subscribers;
  }
}
