import { MESSAGES, STORAGE_CSS, SUBSCRIBE, WIDGET } from './constants'
import { getKey, moderation } from './helpers'
import type { IQuery } from './interfaces/IQuery'
import type { IStorageOptions } from './interfaces/IStorageOptions'

export default class WindowClient {
  public subscribers: Array<any> = []
  private options: IStorageOptions

  constructor(options: IStorageOptions) {
    this.options = options
    window.BuzzCasting.WidgetData = new Set()
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
      console.error('%cstorage', STORAGE_CSS, 'set', query, error)
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
      console.error('%cstorage', STORAGE_CSS, 'set', query, error)
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
      console.error('%cstorage', STORAGE_CSS, 'set', query, error)
      return 400
    }
  }

  cleanMessages = async (_retentionDuration: number) => {
    console.log('cleanMessages not implemented for ', this.options.storage)
  }

  setWidget = async (query: IQuery) => {
    const key = `widget.${query.widget}`
    try {
      window.BuzzCasting.WidgetData[key] = query
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
    if (query.widget === undefined) {
      const topics = query.topics?.split('-')
      query.dashboard = topics ? topics[0] : ''
      query.widget = topics ? topics[1] : ''
    }
    if (query.type === MESSAGES) {
      query = moderation(this.options, query)
    }
    const widgetExists = this.subscribers.filter(
      (widget) => widget.widget === query.widget,
    )
    if (widgetExists.length) {
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
