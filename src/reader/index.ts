import type { IQuery, IResponse, IStorageOptions } from 'buzzcasting-utils'
import { API, CSS, STORAGE } from 'buzzcasting-utils'
import DexieClient from '../storage/dexie'
import KeyvalClient from '../storage/keyval'
import LocalStorageClient from '../storage/local-storage'
import SessionStorageClient from '../storage/session-storage'

import WindowClient from '../storage/window'

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
        '%cget%c %cstorage%c %ccloud',
        CSS.KO,
        CSS.NONE,
        CSS.STORAGE,
        CSS.NONE,
        CSS.CLOUD,
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
        '%cget%c %cstorage%c %cmessages',
        CSS.KO,
        CSS.NONE,
        CSS.STORAGE,
        CSS.NONE,
        CSS.MESSAGES,
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
        '%cget%c %cstorage%c %cseries',
        CSS.KO,
        CSS.NONE,
        CSS.STORAGE,
        CSS.NONE,
        CSS.SERIES,
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
