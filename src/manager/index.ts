import { API, CSS, EVENTS, STORAGE } from '..'
import { version } from '../../package.json'
import ApiClient from '../api/api'
import DexieClient from '../storage/dexie'
import KeyvalClient from '../storage/keyval'
import LocalStorageClient from '../storage/local-storage'
import SessionStorageClient from '../storage/session-storage'
import WindowClient from '../storage/window'
import { hashSum } from '../utils'
import type { IQuery, IResponse, IStorageOptions } from '..'

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
      CSS.STORAGE,
      CSS.NONE,
      CSS.SLIDE,
      options.slide,
      EVENTS.VERSION,
      version,
    )
    this.options = options
    this.sm = null

    const broadcast = options?.slide || options.app
    this.bc = new BroadcastChannel(broadcast)
    console.info(
      '%capi%c %cbroadcast',
      CSS.API,
      CSS.NONE,
      CSS.BROADCAST,
      EVENTS.CHANNEL,
      broadcast,
    )
    this.bc.onmessage = (messageEvent: MessageEvent) => {
      this.actions(messageEvent)
    }
    this.bc.postMessage({ event: EVENTS.STORAGE_INIT, data: {} })

    this.api = new ApiClient(options)
    switch (options.storage) {
      case STORAGE.DEXIE:
        this.sm = new DexieClient(options)
        break
      case STORAGE.LOCAL:
        this.sm = new SessionStorageClient(options)
        break
      case STORAGE.SESSION:
        this.sm = new LocalStorageClient(options)
        break
      case STORAGE.KEYVAL:
        this.sm = new KeyvalClient(options)
        break
      case STORAGE.WINDOW:
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
              case API.MESSAGES:
                newHash = hashSum(data.data.messages)
                if (previousQuery.hash === newHash) {
                  console.debug(
                    '%capi%c %cno updates',
                    CSS.API,
                    CSS.NONE,
                    CSS.NO_UPDATES,
                    API.MESSAGES,
                    data.query.slide,
                    data.query.widget,
                  )
                  return 204
                } else {
                  previousQuery.hash = newHash
                  status = await this.sm.setMessages(data.query, data)
                }

                break
              case API.CLOUD:
                newHash = hashSum(data.data)
                if (previousQuery.hash === newHash) {
                  console.debug(
                    '%capi%c %cno updates',
                    CSS.API,
                    CSS.NONE,
                    CSS.NO_UPDATES,
                    API.CLOUD,
                    data.query.slide,
                    data.query.widget,
                  )
                  status = 204
                } else {
                  previousQuery.hash = newHash
                  status = await this.sm.setCloud(data.query, data)
                }
                break
              case API.SERIES:
                newHash = hashSum(data.data)
                if (previousQuery.hash === newHash) {
                  console.debug(
                    '%capi%c %cno updates',
                    CSS.API,
                    CSS.NONE,
                    CSS.NO_UPDATES,
                    API.SERIES,
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
                  CSS.API,
                  CSS.NONE,
                  CSS.STORAGE,
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
                CSS.API,
                CSS.NONE,
                CSS.BROADCAST,
                data.query.slide,
                data.data.title ?? data.query.widget,
              )
              this.bc.postMessage({ event: EVENTS.WIDGET_UPDATE, data })
              break
            case 400:
              console.warn(
                '%capp%c %cbroadcast',
                CSS.API,
                CSS.NONE,
                CSS.BROADCAST,
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
            CSS.API,
            CSS.NONE,
            CSS.STORAGE,
            EVENTS.ERROR,
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
      case EVENTS.SUBSCRIBE:
        this.sm?.subscribe(messageEvent.data.data)
        break
      case EVENTS.UPDATE:
        console.debug(
          '%capi%c %cstorage',
          CSS.API,
          CSS.NONE,
          CSS.STORAGE,
          EVENTS.UPDATE,
          messageEvent.data,
        )
        await this.update()
        break
      default:
    }
  }

  public cleanMessages = async () => {
    const retentionDuration = this.options?.retention || 86400 * 4

    const count: number | undefined = await this.sm?.cleanMessages(
      retentionDuration,
    )
    console.info(
      '%cstorage%c %cstorage',
      CSS.STORAGE,
      CSS.NONE,
      CSS.MESSAGES,
      `${count} messages deleted`,
    )
  }

  public hideMessage = async (query: IQuery): Promise<IResponse> => {
    const count = await this.sm?.hideMessage(query.id, 0)

    console.info(
      '%cstorage%c %cstorage',
      CSS.STORAGE,
      CSS.NONE,
      CSS.HIDE,
      `${count} messages hidden`,
    )

    return await this.api.hideMessage(query)
  }

  public hideLabels: (query: IQuery) => Promise<IResponse> = async (
    query: IQuery,
  ): Promise<IResponse> => {
    return await this.api.hideLabels(query)
  }

  public getSubscribers = async () => {
    return await this.sm?.getSubscribers()
  }

  public loadSlide = async (query: IQuery): Promise<IResponse> => {
    return await this.api.loadSlide(query)
  }

  public storeSlide = async (query: IQuery): Promise<IResponse | number> => {
    console.log(query)
    return await this.sm?.storeSlide(query).then(async () => {
      if (query?.update && query.update) {
        return await this.api.storeSlide(query)
      } else {
        return new Promise((resolve, _reject) => {
          resolve(201)
        })
      }
    })
  }
}
