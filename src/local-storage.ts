import { API_CSS, MESSAGES } from './constants'
import { getKey, moderation } from './helpers'
import type { IQuery } from './interfaces/IQuery'
import type { IStorageOptions } from './interfaces/IStorageOptions'

export default class LocalStorageClient {
  private subscribers: Array<any> = []
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

  setCloud = async (query: IQuery, data: any) => {
    const key = getKey(query)
    try {
      localStorage.setObject(key, data)
      return 201
    } catch (error) {
      console.debug('[storage] error', query)
      return 400
    }
  }

  getCloud = async (query: IQuery) => {
    const key = getKey(query)
    try {
      return localStorage.getObject(key)
    } catch (error) {
      console.debug('[storage] error', query)
      return 400
    }
  }

  setSeries = async (query: IQuery, data: any) => {
    const key = getKey(query)
    try {
      localStorage.setObject(key, data)
      return 201
    } catch (error) {
      console.debug('[storage] error', query)
      return 400
    }
  }

  getSeries = async (query: IQuery) => {
    const key = getKey(query)
    try {
      return localStorage.getObject(key)
    } catch (error) {
      console.debug('[storage] error', query)
      return 400
    }
  }

  setMessages = async (query: IQuery, data: any) => {
    const key = getKey(query)
    try {
      localStorage.setObject(key, data)
      return 200
    } catch (error) {
      console.debug('[storage] error', query)
      return 400
    }
  }

  getMessages = async (query: IQuery) => {
    const key = getKey(query)
    try {
      return localStorage.getObject(key)
    } catch (error) {
      console.debug('[storage] error', query)
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
      console.debug('[storage] error', query)
      return 400
    }
  }

  subscribe = (query: IQuery) => {
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
      return
    }
    console.info(
      '%cstorage',
      API_CSS,
      'subscribe',
      query,
    )
    this.subscribers.push(query)
  }

  getSubscribers() {
    return this.subscribers
  }
}
