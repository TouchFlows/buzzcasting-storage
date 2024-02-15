import { get, set } from 'idb-keyval'
import { getKey, moderation } from './helpers'
import { MESSAGES, STORAGE_CSS } from './constants'
import type { IQuery } from './interfaces/IQuery'
import type { IStorageOptions } from './interfaces/IStorageOptions'

export default class KeyvalClient {
  private subscribers: Array<any> = []
  private options: IStorageOptions

  constructor(options: IStorageOptions) {
    this.options = options
  }

  setCloud = async (query: IQuery, data: any) => {
    if (!data.success) {
      return 400
    }
    const key = getKey(query)
    delete data.success
    delete data.message
    return await set(key, data)
      .then(() => 201)
      .catch(() => 400)
  }

  getCloud = async (query: IQuery) => {
    const key = getKey(query)
    return await get(key)
  }

  setSeries = async (query: IQuery, data: any) => {
    if (!data.success) {
      return 400
    }
    const key = getKey(query)
    delete data.success
    delete data.message
    return await set(key, data)
      .then(() => 201)
      .catch(() => 400)
  }

  getSeries = async (query: IQuery) => {
    const key = getKey(query)
    return await get(key)
  }

  setMessages = async (query: IQuery, data: any) => {
    if (!data.success) {
      return 400
    }
    const key = getKey(query)
    delete data.success
    delete data.message
    return await set(key, data)
      .then(() => 201)
      .catch(() => 400)
  }

  getMessages = async (query: IQuery) => {
    const key = getKey(query)
    return await get(key)
      .then((data) => data)
      .catch(() => 400)
  }

  cleanMessages = async (_retentionDuration: number) => {
    console.log('cleanMessages not implemented for ', this.options.storage)
    return await new Promise<void>((resolve) => resolve())
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
    const alreadySubscribed = this.subscribers.filter(
      (widget) => widget.widget === query.widget,
    ).length
    if (alreadySubscribed > 0) {
      return
    }
    console.info(
      '%cstorage',
      STORAGE_CSS,
      'subscribe',
      query,
    )
    this.subscribers.push(query)
  }

  getSubscribers() {
    return this.subscribers
  }
}
