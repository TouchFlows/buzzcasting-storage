import type {
  IQuery,
  IResponse,
  IStorageOptions } from '..'
import {
  API,
  CSS,
} from '..'
import { getKey, moderation, widgetParams } from '../utils/widget'

export default class SessionStorageClient {
  public subscribers: Array<any> = []
  private options: IStorageOptions

  constructor(options: IStorageOptions) {
    this.options = options
    // extend Storage in order to be able to store / read JSON objects
    Storage.prototype.setObject = function (
      key: string,
      value: string | object,
    ) {
      this.setItem(key, JSON.stringify(value))
    }

    Storage.prototype.getObject = function (key: string) {
      const value = this.getItem(key)
      return value && JSON.parse(value)
    }
  }

  getCloud = async (query: IQuery): Promise<IResponse> => {
    const key = getKey(query)
    try {
      return sessionStorage.getObject(key)
    } catch (error) {
      console.warn('%capi', CSS.API, API.CLOUD, query.slide, query.widget, error)
      return { data: null, message: 'Messages Data error', success: false }
    }
  }

  getSeries = async (query: IQuery): Promise<IResponse> => {
    const key = getKey(query)
    try {
      return sessionStorage.getObject(key)
    } catch (error) {
      console.warn('%capi', CSS.API, API.SERIES, query.slide, query.widget, error)
      return { data: null, message: 'Messages Data error', success: false }
    }
  }

  getMessages = async (query: IQuery): Promise<IResponse> => {
    const key = getKey(query)
    try {
      return sessionStorage.getObject(key)
    } catch (error) {
      console.warn('%capi', CSS.API, API.MESSAGES, query.slide, query.widget, error)
      return { data: null, message: 'Messages Data error', success: false }
    }
  }

  /**
   * Update Cloud
   * @param query IQuery
   * @param data
   * @returns number
   */
  setCloud = async (query: IQuery, data: any): Promise<number> => {
    const key = getKey(query)
    try {
      sessionStorage.setObject(key, data)
      return 201
    } catch (error) {
      console.error('%cstorage', CSS.STORAGE, API.CLOUD, query, error)
      return 400
    }
  }

  /**
   * Update Series
   * @param query IQuery
   * @param data
   * @returns number
   */
  setSeries = async (query: IQuery, data: any): Promise<number> => {
    const key = getKey(query)
    try {
      sessionStorage.setObject(key, data)
      return 201
    } catch (error) {
      console.error('%cstorage', CSS.STORAGE, API.SERIES, query, error)
      return 400
    }
  }

  /**
   * Update Messages
   * @param query IQuery
   * @param data
   * @returns number
   */
  setMessages = async (query: IQuery, data: any): Promise<number> => {
    const key = getKey(query)
    try {
      sessionStorage.setObject(key, data)
      return 200
    } catch (error) {
      console.error('%cstorage', CSS.STORAGE, API.MESSAGES, query, error)
      return 400
    }
  }

  cleanMessages = async (_retentionDuration: number): Promise<number> => {
    console.log('cleanMessages not implemented for ', this.options.storage)
    return await new Promise<number>((resolve) => resolve(0))
  }

  hideMessage = async (id: string, visible: boolean) => {
    console.debug(`hideMessage ${id} ${visible} not implemented for ${this.options.storage}`)
  }

  setWidget = async (query: IQuery) => {
    const key = `widget.${query.widget}`
    try {
      sessionStorage.setObject(key, query)
      return 201
    } catch (error) {
      console.error('%cstorage', CSS.STORAGE, API.WIDGET, query, error)
      return 400
    }
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
    const widgetExists = this.subscribers.filter(
      (widget) => widget.widget === query.widget,
    )
    if (widgetExists.length) {
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

  loadSlide = async (query: IQuery): Promise<IResponse> => {
    try {
      return sessionStorage.getObject(`${query.type}.${query.id}`)
    } catch (error) {
      console.warn('%capi', CSS.API, API.SLIDE, query.id, error)
      return { data: null, message: 'Store Load error', success: false }
    }
  }

  /**
   * Update Slide
   * @param query IQuery
   * @returns number
   */
  storeSlide = async (query: IQuery): Promise<number> => {
    try {
      sessionStorage.setObject(`${query.type}.${query.id}`, {
        id: query.id,
        title: query.data.title || 'Not set',
        json: query.data.json || {},
        html: query.data.html || '',
        css: query.data.css || '',
      })
      return 200
    } catch (error) {
      console.error('%cstorage', CSS.STORAGE, API.SLIDE, query, error)
      return 400
    }
  }
}
