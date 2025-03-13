import {
  API,
  CSS,
  type IQuery,
  type IResponse,
  type IStorageOptions,
  STORAGE,
} from '..'
import DexieClient from '../storage/dexie'
import KeyvalClient from '../storage/keyval'
import LocalStorageClient from '../storage/local-storage'
import SessionStorageClient from '../storage/session-storage'

import WindowClient from '../storage/window'

// export * from "../interfaces/IQuery";

// export * from "../interfaces/IStorageOptions";

// export * from "../constants";

export class BuzzcastingStorageReader {
  private sm:
    | WindowClient
    | LocalStorageClient
    | SessionStorageClient
    | KeyvalClient
    | DexieClient
    | null

  constructor(options: IStorageOptions) {
    this.sm = null

    switch (options.storage) {
      case STORAGE.DEXIE:
        this.sm = new DexieClient(options)
        break
      case STORAGE.LOCAL:
        this.sm = new SessionStorageClient(options)
        break
      case STORAGE.SESSION:
        this.sm = new LocalStorageClient(options)
        break
      case STORAGE.KEYVAL:
        this.sm = new KeyvalClient(options)
        break
      case STORAGE.WINDOW:
        this.sm = new WindowClient(options)
        break
      default:
			// this.sm = null
    }
  }

  /**
   * Retieve Cloud Data
   * @param query Widgets parameters, type "cloud"
   * @returns IResponse
   */
  public getCloud = async (query: IQuery): Promise<IResponse> => {
    if (query.type !== API.CLOUD) {
      console.warn(
        '%capp%c %get',
        CSS.APP,
        CSS.NONE,
        CSS.GET_DATA,
        query.widget,
        'wrong method call for getMessages, type used is',
        query.type,
      )
      return {
        data: null,
        message: `'wrong method call for getMessages, type used is ${query.type}`,
        success: false,
      }
    }
    return await this.sm?.getCloud(query)
  }

  /**
   * Retieve Message Data
   * @param query Widgets parameters, type "messages"
   * @returns IResponse
   */
  public getMessages = async (query: IQuery): Promise<IResponse> => {
    if (query.type !== API.MESSAGES) {
      console.warn(
        '%capp%c %cmessages%c %cget',
        CSS.APP,
        CSS.NONE,
        CSS.MESSAGES,
        CSS.NONE,
        CSS.GET_DATA,
        query.widget,
        'wrong method call for getMessages, type used is',
        query.type,
      )
      return {
        data: null,
        message: `'wrong method call for getMessages, type used is ${query.type}`,
        success: false,
      }
    }
    return await this.sm?.getMessages(query)
  }

  /**
   * Retrieve Series Data
   * @param query Widgets parameters, type "series"
   * @returns IResponse
   */
  public getSeries = async (query: IQuery): Promise<IResponse> => {
    if (query.type !== API.SERIES) {
      console.warn(
        '%capp%c %get',
        CSS.APP,
        CSS.NONE,
        CSS.GET_DATA,
        query.widget,
        'wrong method call for getMessages, type used is',
        query.type,
      )
      return {
        data: null,
        message: `'wrong method call for getSeries, type used is ${query.type}`,
        success: false,
      }
    }
    return await this.sm?.getSeries(query)
  }
}
