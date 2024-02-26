import type { IQuery, IStorageOptions } from '..'
import {
  API_CSS,
  BROADCAST_CSS,
  CLOUD,
  MESSAGES,
  NONE,
  NO_UPDATES,
  SERIES,
  SLIDE_CSS,
  STORAGE_CSS,
  STORAGE_DEXIE,
  STORAGE_KEYVAL,
  STORAGE_LOCAL,
  STORAGE_SESSION,
  STORAGE_WINDOW,
} from '..'
import { version } from '../../package.json'
import ApiClient from '../api/api'
import DexieClient from '../storage/dexie'
import KeyvalClient from '../storage/keyval'
import LocalStorageClient from '../storage/local-storage'
import SessionStorageClient from '../storage/session-storage'
import WindowClient from '../storage/window'
import { sum } from '../utils/hash-sum'

export class BuzzcastingStorageManager {
  private sm:
    | WindowClient
    | LocalStorageClient
    | SessionStorageClient
    | KeyvalClient
    | DexieClient
    | null

  private api: ApiClient
  private bc: BroadcastChannel
  private options: IStorageOptions

  constructor(options: IStorageOptions) {
    console.info(
      '%cstorage%c %cslide',
      STORAGE_CSS,
      NONE,
      SLIDE_CSS,
      options.slide,
      'version',
      version,
    )
    this.options = options
    this.sm = null

    const broadcast = options?.slide || options.app
    this.bc = new BroadcastChannel(broadcast)
    console.info(
      '%capi%c %cbroadcast',
      API_CSS,
      NONE,
      BROADCAST_CSS,
      'channel',
      broadcast,
    )
    this.bc.onmessage = (messageEvent: MessageEvent) => {
      this.actions(messageEvent)
    }
    this.bc.postMessage({ event: 'sm-init', data: {} })

    this.api = new ApiClient(options)
    switch (options.storage) {
      case STORAGE_DEXIE:
        this.sm = new DexieClient(options)
        break
      case STORAGE_LOCAL:
        this.sm = new SessionStorageClient(options)
        break
      case STORAGE_SESSION:
        this.sm = new LocalStorageClient(options)
        break
      case STORAGE_KEYVAL:
        this.sm = new KeyvalClient(options)
        break
      case STORAGE_WINDOW:
        this.sm = new WindowClient(options)
        break
      default:
			// this.sm = null
    }
  }

  public update = async (query?: IQuery) => {
    if (this.sm === null) {
      return
    }
    const subscribers = await this.sm.getSubscribers()
    if (subscribers.length === 0) {
      return
    }
    const subscriberQuery: any[] = []

    // single update for initial load
    if (query) {
      subscriberQuery.push(this.api.get(query))
    } else {
      // Paralelize calls
      subscribers?.forEach((query: IQuery) => {
        subscriberQuery.push(this.api.get(query))
      })
    }

    await Promise.allSettled(subscriberQuery).then((results) =>
      results.forEach(async (res) => {
        let status: number | void = 400
        if (res.status === 'fulfilled') {
          const data = res.value
          if (this.sm === null) {
            return 400
          }
          if (data.success === true) {
            const previousQuery = this.sm.subscribers.filter(
              (query: IQuery) => query.widget === data.query.widget,
            )[0]
            let newHash: string | any[] = ''
            switch (data.query.type) {
              case MESSAGES:
                newHash = sum(data.data.messages)
                if (previousQuery.hash === newHash) {
                  console.debug(
                    '%capi%c %cno updates',
                    API_CSS,
                    NONE,
                    NO_UPDATES,
                    MESSAGES,
                    data.query.slide,
                    data.query.widget,
                  )
                  return 204
                } else {
                  previousQuery.hash = newHash
                  status = await this.sm.setMessages(data.query, data)
                }

                break
              case CLOUD:
                newHash = sum(data.data)
                if (previousQuery.hash === newHash) {
                  console.debug(
                    '%capi%c %cno updates',
                    API_CSS,
                    NONE,
                    NO_UPDATES,
                    CLOUD,
                    data.query.slide,
                    data.query.widget,
                  )
                  status = 204
                } else {
                  previousQuery.hash = newHash
                  status = await this.sm.setCloud(data.query, data)
                }
                break
              case SERIES:
                newHash = sum(data.data)
                if (previousQuery.hash === newHash) {
                  console.debug(
                    '%capi%c %cno updates',
                    API_CSS,
                    NONE,
                    NO_UPDATES,
                    SERIES,
                    data.query.slide,
                    data.query.widget,
                  )
                  status = 204
                } else {
                  previousQuery.hash = newHash
                  status = await this.sm.setSeries(data.query, data)
                }
                break
              default:
                console.warn(
                  '%capi%c %cstorage',
                  API_CSS,
                  NONE,
                  STORAGE_CSS,
                  'error',
									`data type ${data.query.type} unknown`,
                )
            }
          } else {
            status = 401
          }
          switch (status) {
            case 201:
              console.info(
                '%capp%c %cbroadcast',
                API_CSS,
                NONE,
                BROADCAST_CSS,
                data.query.slide,
                data.data.title ?? data.query.widget,
              )
              this.bc.postMessage({ event: 'widget-update', data })
              break
            case 400:
              console.warn(
                '%capp%c %cbroadcast',
                API_CSS,
                NONE,
                BROADCAST_CSS,
                data.query.slide,
                data.data.title ?? data.query.widget,
              )
              break
            default:
          }
          return status
        } else {
          console.warn(
            '%capi%c %cstorage',
            API_CSS,
            NONE,
            STORAGE_CSS,
            'error',
          )
          return 400
        }
      }),
    )
  }

  public hide = (query: IQuery) => {
    this.api.hideMessage(query)
  }

  private actions = async (messageEvent: MessageEvent) => {
    switch (messageEvent.data.event) {
      case 'subscribe':
        this.sm?.subscribe(messageEvent.data.data)
        break
      case 'update':
        console.debug(
          '%capi%c %cstorage',
          API_CSS,
          NONE,
          STORAGE_CSS,
          'update',
          messageEvent.data,
        )
        await this.update()
        break
      default:
    }
  }

  public cleanMessages = async () => {
    const retentionDuration = this.options?.retention || 86400 * 4
    return await this.sm?.cleanMessages(retentionDuration)
  }

  // TODO: add checksum to avoid broadcasting update
  // private setHash(widget: string) {

  // }

  public getSubscribers = async () => {
    return await this.sm?.getSubscribers()
  }
}
export { STORAGE_LOCAL }
