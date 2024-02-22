import type {
  IQuery,
  IResponse,
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

export default class LocalStorageClient {
  public subscribers: Array<any> = []
  private options: IStorageOptions

  constructor(options: IStorageOptions) {
    this.options = options
    // extend Storage in order to be able to store / read JSON objects
    Storage.prototype.setObject = function (
      key: string,
      value: string | object,
    ) {
      this.setObject(key, JSON.stringify(value))
    }

    Storage.prototype.getObject = function (key: string) {
      const value = this.getObject(key)
      return value && JSON.parse(value)
    }
  }

  getCloud = async (query: IQuery): Promise<IResponse> => {
    const key = getKey(query)
    try {
      return localStorage.getObject(key)
    } catch (error) {
      console.warn('%capi', API_CSS, CLOUD, query.slide, query.widget)
      return { data: null, message: 'Messages Data error', success: false }
    }
  }

  getSeries = async (query: IQuery): Promise<IResponse> => {
    const key = getKey(query)
    try {
      return localStorage.getObject(key)
    } catch (error) {
      console.warn('%capi', API_CSS, SERIES, query.slide, query.widget)
      return { data: null, message: 'Messages Data error', success: false }
    }
  }

  getMessages = async (query: IQuery): Promise<IResponse> => {
    const key = getKey(query)
    try {
      return localStorage.getObject(key)
    } catch (error) {
      console.warn('%capi', API_CSS, MESSAGES, query.slide, query.widget)
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
      localStorage.setObject(key, data)
      return 201
    } catch (error) {
      console.error('%cstorage', STORAGE_CSS, CLOUD, query, error)
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
      localStorage.setObject(key, data)
      return 201
    } catch (error) {
      console.error('%cstorage', STORAGE_CSS, SERIES, query, error)
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
      localStorage.setObject(key, data)
      return 200
    } catch (error) {
      console.error('%cstorage', STORAGE_CSS, MESSAGES, query, error)
      return 400
    }
  }

  cleanMessages = async (_retentionDuration: number) => {
    console.log('cleanMessages not implemented for ', this.options.storage)
  }

  setWidget = async (query: IQuery) => {
    const key = `widget.${query.widget}`
    try {
      localStorage.setObject(key, query)
      return 201
    } catch (error) {
      console.error('%cstorage', STORAGE_CSS, WIDGET, query, error)
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
    if (query.type === MESSAGES) {
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
