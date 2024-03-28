import type {
  IQuery,
  IResponse,
  IStorageOptions,
} from '..'
import {
  API,
  CSS,
} from '..'
import { getKey, moderation, widgetParams } from '../utils/widget'

export default class WindowClient {
  public subscribers: Array<any> = []
  private options: IStorageOptions

  constructor(options: IStorageOptions) {
    this.options = options
    window.BuzzCasting.WidgetData = new Set()
  }

  getCloud = async (query: IQuery): Promise<IResponse> => {
    const key = getKey(query)
    try {
      return window.BuzzCasting.WidgetData[key]
    } catch (error) {
      console.warn('%capi', CSS.API, API.CLOUD, query.slide, query.widget)
      return { data: null, message: 'Cloud Data error', success: false }
    }
  }

  getSeries = async (query: IQuery): Promise<IResponse> => {
    const key = getKey(query)
    try {
      return window.BuzzCasting.WidgetData[key]
    } catch (error) {
      console.warn('%capi', CSS.API, API.SERIES, query.slide, query.widget)
      return { data: null, message: 'Series Data error', success: false }
    }
  }

  getMessages = async (query: IQuery): Promise<IResponse> => {
    const key = getKey(query)
    try {
      return window.BuzzCasting.WidgetData[key]
    } catch (error) {
      console.warn('%capi', CSS.API, API.MESSAGES, query.slide, query.widget)
      return { data: null, message: 'Messages Data error', success: false }
    }
  }

  /**
   * Update Cloud
   * @param query IQuery
   * @param data
   * @returns number
   */
  setCloud = async (query: IQuery, data: any) => {
    const key = getKey(query)
    try {
      window.BuzzCasting.WidgetData[key] = data
      return 201
    } catch (error) {
      console.error('%cstorage', CSS.STORAGE, 'set', query, error)
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
      window.BuzzCasting.WidgetData[key] = data
      return 201
    } catch (error) {
      console.error('%cstorage', CSS.STORAGE, 'set', query, error)
      return 400
    }
  }

  /**
   * Update Messages
   * @param query IQuery
   * @param data
   * @returns number
   */
  setMessages = async (query: IQuery, data: any) => {
    const key = getKey(query)
    try {
      window.BuzzCasting.WidgetData[key] = data
      return 201
    } catch (error) {
      console.error('%cstorage', CSS.STORAGE, 'set', query, error)
      return 400
    }
  }

  cleanMessages = async (_retentionDuration: number) => {
    console.log('cleanMessages not implemented for ', this.options.storage)
  }

  hideMessage = async (id: string, visible: number) => {
    console.debug(`hideMessage ${id} ${visible} not implemented for ${this.options.storage}`)
  }

  setWidget = async (query: IQuery) => {
    const key = `widget.${query.widget}`
    try {
      window.BuzzCasting.WidgetData[key] = query
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
}
