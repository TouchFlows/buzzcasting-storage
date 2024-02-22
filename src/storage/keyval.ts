import { get, set } from 'idb-keyval'
import type {
  IQuery,
  IStorageOptions } from '..'
import {
  API_CSS,
  CLOUD,
  MESSAGES,
  NONE,
  SERIES,
  STORAGE_CSS,
  SUBSCRIBE_CSS,
  WIDGET,
} from '..'
import { getKey, moderation, widgetParams } from '../utils/helpers'

export default class KeyvalClient {
  public subscribers: Array<any> = []
  private options: IStorageOptions

  constructor(options: IStorageOptions) {
    this.options = options
  }

  getCloud = async (query: IQuery) => {
    const key = getKey(query)
    return await get(key)
      .then((data) => data)
      .catch(() => {
        console.warn('%capi', API_CSS, CLOUD, query.slide, query.widget)
        return { data: null, message: 'Cloud Data error', success: false }
      })
  }

  getSeries = async (query: IQuery) => {
    const key = getKey(query)
    return await get(key)
      .then((data) => data)
      .catch(() => {
        console.warn('%capi', API_CSS, SERIES, query.slide, query.widget)
        return { data: null, message: 'Series Data error', success: false }
      })
  }

  getMessages = async (query: IQuery) => {
    const key = getKey(query)
    return await get(key)
      .then((data) => data)
      .catch(() => {
        console.warn('%capi', API_CSS, MESSAGES, query.slide, query.widget)
        return { data: null, message: 'Messages Data error', success: false }
      })
  }

  /**
   * Update Cloud
   * @param query IQuery
   * @param data
   * @returns number
   */
  setCloud = async (query: IQuery, data: any): Promise<number> => {
    if (!data.success) {
      return 400
    }
    const key = getKey(query)
    delete data.success
    delete data.message
    return await set(key, data)
      .then(() => 201)
      .catch((error: Error) => {
        console.error('%cstorage', STORAGE_CSS, CLOUD, query, error)
        return 400
      })
  }

  /**
   * Update Series
   * @param query IQuery
   * @param data
   * @returns bumber
   */
  setSeries = async (query: IQuery, data: any): Promise<number> => {
    if (!data.success) {
      return 400
    }
    const key = getKey(query)
    delete data.success
    delete data.message
    return await set(key, data)
      .then(() => 201)
      .catch((error: Error) => {
        console.error('%cstorage', STORAGE_CSS, SERIES, query, error)
        return 400
      })
  }

  /**
   * Update Messages
   * @param query IQuery
   * @param data
   * @returns number
   */
  setMessages = async (query: IQuery, data: any): Promise<number> => {
    if (!data.success) {
      return 400
    }
    const key = getKey(query)
    delete data.success
    delete data.message
    return await set(key, data)
      .then(() => 201)
      .catch((error: Error) => {
        console.error('%cstorage', STORAGE_CSS, MESSAGES, query, error)
        return 400
      })
  }

  cleanMessages = async (_retentionDuration: number) => {
    console.log('cleanMessages not implemented for ', this.options.storage)
    return await new Promise<void>((resolve) => resolve())
  }

  /**
   * Update Cloud
   * @param query IQuery
   * @returns number
   */
  setWidget = async (query: IQuery): Promise<number> => {
    const key = getKey(query)
    const data = {
      id: query.widget,
      dashboard_id: query.dashboard,
      type: query.type,
    }
    return await set(key, data)
      .then(() => 201)
      .catch((error: Error) => {
        console.error('%cstorage', STORAGE_CSS, WIDGET, query, error)
        return 400
      })
  }

  /**
   * Add component subscriber
   * @param query IQuery
   * @returns null
   */
  subscribe = (query: IQuery): null => {
    query = widgetParams(query)
    if (query.type === MESSAGES) {
      query = moderation(this.options, query)
    }
    const alreadySubscribed = this.subscribers.filter(
      (widget) => widget.widget === query.widget,
    ).length
    if (alreadySubscribed > 0) {
      return null
    }
    console.debug(
      '%cstorage%c %csubscribe',
      STORAGE_CSS,
      NONE,
      SUBSCRIBE_CSS,
      query.slide,
      query.widget,
    )
    this.subscribers.push(query)
    return null
  }

  /**
   * Get current subscribers
   * @returns IQuery[]
   */
  getSubscribers = async (): Promise<IQuery[]> => {
    return await new Promise<IQuery[]>((resolve) => resolve(this.subscribers))
  }
}
