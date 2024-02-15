import { set } from 'idb-keyval'
import { getKey, moderation } from './helpers'
import {
  CLOUD,
  MESSAGES,
  SERIES,
  STORAGE_CSS,
  SUBSCRIBE,
  WIDGET,
} from './constants'
import type { IQuery } from './interfaces/IQuery'
import type { IStorageOptions } from './interfaces/IStorageOptions'

export default class KeyvalClient {
  public subscribers: Array<any> = []
  private options: IStorageOptions

  constructor(options: IStorageOptions) {
    this.options = options
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
    if (query.widget === undefined) {
      const topics = query.topics?.split('-')
      query.dashboard = topics ? topics[0] : ''
      query.widget = topics ? topics[1] : ''
    }
    if (query.type === MESSAGES) {
      query = moderation(this.options, query)
    }
    const alreadySubscribed = this.subscribers.filter(
      (widget) => widget.widget === query.widget,
    ).length
    if (alreadySubscribed > 0) {
      return null
    }
    console.info('%cstorage', STORAGE_CSS, SUBSCRIBE, query.slide, query.widget)
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
