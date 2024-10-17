import { get, set } from 'idb-keyval'
import { API, CSS, type IQuery, type IStorageOptions } from '..'
import { getKey, moderation, widgetParams } from '../utils/widget'

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
        console.warn('%capi', CSS.API, API.CLOUD, query.slide, query.widget)
        return { data: null, message: 'Cloud Data error', success: false }
      })
  }

  getSeries = async (query: IQuery) => {
    const key = getKey(query)
    return await get(key)
      .then((data) => data)
      .catch(() => {
        console.warn('%capi', CSS.API, API.SERIES, query.slide, query.widget)
        return { data: null, message: 'Series Data error', success: false }
      })
  }

  getMessages = async (query: IQuery) => {
    const key = getKey(query)
    return await get(key)
      .then((data) => data)
      .catch(() => {
        console.warn('%capi', CSS.API, API.MESSAGES, query.slide, query.widget)
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
        console.error('%cstorage', CSS.STORAGE, API.CLOUD, query, error.message)
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
        console.error('%cstorage', CSS.STORAGE, API.SERIES, query, error.message)
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
        console.error('%cstorage', CSS.STORAGE, API.MESSAGES, query, error.message)
        return 400
      })
  }

  cleanMessages = async (_retentionDuration: number): Promise<number> => {
    console.log('cleanMessages not implemented for ', this.options.storage)
    return await new Promise<number>((resolve) => resolve(0))
  }

  hideMessage = async (id: string, visible: boolean) => {
    console.debug(
      `hideMessage ${id} ${visible} not implemented for ${this.options.storage}`,
    )
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
        console.error('%cstorage', CSS.STORAGE, API.WIDGET, query, error.message)
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
    if (query.type === API.MESSAGES) {
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
      CSS.STORAGE,
      CSS.NONE,
      CSS.SUBSCRIBE,
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

  loadSlide = async (query: IQuery) => {
    const key = getKey(query)
    return await get(key)
      .then((data) => data)
      .catch(() => {
        console.warn('%capi', CSS.API, API.SLIDE, query.slide)
        return { data: null, message: 'Slide Load error', success: false }
      })
  }

  /**
   * Update Slide
   * @param query IQuery
   * @returns number
   */
  storeSlide = async (query: IQuery): Promise<number> => {
    const key = getKey(query)
    const data = {
      id: query.id,
      title: query.data.title || 'Not set',
      json: query.data.json || {},
      html: query.data.html || '',
      css: query.data.css || '',
    }
    return await set(key, data)
      .then(() => 201)
      .catch((error: Error) => {
        console.error('%cstorage', CSS.STORAGE, API.SLIDE, query, error.message)
        return 400
      })
  }
}
