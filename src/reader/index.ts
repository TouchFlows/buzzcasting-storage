import DexieClient from '../storage/dexie'
import KeyvalClient from '../storage/keyval'
import LocalStorageClient from '../storage/local-storage'
import SessionStorageClient from '../storage/session-storage'
import WindowClient from '../storage/window'

import type {
  IQuery,
  IResponse,
  IStorageOptions } from '..'
import {
  APP_CSS,
  CLOUD,
  GET_DATA,
  MESSAGES,
  NONE,
  SERIES,
  STORAGE_DEXIE,
  STORAGE_KEYVAL,
  STORAGE_LOCAL,
  STORAGE_SESSION,
  STORAGE_WINDOW,
} from '..'

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
      case STORAGE_DEXIE:
        this.sm = new DexieClient(options)
        break
      case STORAGE_LOCAL:
        this.sm = new SessionStorageClient(options)
        break
      case STORAGE_SESSION:
        this.sm = new LocalStorageClient(options)
        break
      case STORAGE_KEYVAL:
        this.sm = new KeyvalClient(options)
        break
      case STORAGE_WINDOW:
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
    if (query.type !== CLOUD) {
      console.warn(
        '%capp%c %get',
        APP_CSS,
        NONE,
        GET_DATA,
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
    if (query.type !== MESSAGES) {
      console.warn(
        '%capp%c %get',
        APP_CSS,
        NONE,
        GET_DATA,
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
    if (query.type !== SERIES) {
      console.warn(
        '%capp%c %get',
        APP_CSS,
        NONE,
        GET_DATA,
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
}
