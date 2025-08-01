import type {
  IPreference,
  IQuery,
  IResponse,
  IStorageOptions,
} from 'buzzcasting-utils'
import {
  API,
  CSS,
  EVENTS,
  hashSum,
  log,
  STORAGE,
  typeCss,
} from 'buzzcasting-utils'
import { version } from '../../package.json'
import ApiClient from '../api/api'
import DexieClient from '../storage/dexie'
import KeyvalClient from '../storage/keyval'
import LocalStorageClient from '../storage/local-storage'
import SessionStorageClient from '../storage/session-storage'
import WindowClient from '../storage/window'

export class BuzzcastingStorageManager {
  private sm:
    | WindowClient
    | LocalStorageClient
    | SessionStorageClient
    | KeyvalClient
    | DexieClient
    | null

  private api: ApiClient
  private bc: BroadcastChannel | null
  private options: IStorageOptions
  private subscribers: any = []
  // private temp: {[x:string]:any} = []

  constructor(options: IStorageOptions) {
    log(3, [
      '%cpresentation',
      CSS.PRESENTATION,
      options.presentation,
      EVENTS.VERSION,
      version,
    ])
    this.options = options
    this.sm = null
    this.bc = null
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

  public addSubscriber(query: IQuery) {
    this.subscribers[query.widget] = query
  }

  public deleteSubscriber(query: IQuery) {
    delete this.subscribers[query.widget]
  }

  public update = async (data: any) => {
    log(3, [
      '%clupdate%c %cdata',
      CSS.NO_UPDATES,
      CSS.NONE,
      CSS.MESSAGES,
      data,
    ])
    if (this.sm === null || Object.keys(this.subscribers).length === 0) {
      return
    }

    const subscriberQueries: any[] = []

    Object.values(this.subscribers).forEach((apiQuery: any) => {
      // Paralelize calls
      subscriberQueries.push(this.api.get(apiQuery))
    })

    subscriberQueries.forEach(async (apiCall) => {
      await apiCall.then(
        async (apiResp: any) => await this.processResponse(apiResp),
      )
    })
  }

  private processResponse = async (resp: any) => {
    let data
    let status: number | void = 400
    if (resp.success === true) {
      const previousHash = this.subscribers[resp.query.widget]
      let newHash: string | any[] = ''

      switch (resp.query.type) {
        case API.MESSAGES:
          // check and filter that message has an ID
          resp.data.messages = resp.data.messages.filter(
            (msg: any) => msg.id !== null,
          )
          // check if any topic dynamics have changed
          newHash
						= resp.data.messages.length > 0
              ? hashSum(resp.data.messages[0].utc)
              : 'none'
          if (previousHash?.hash && previousHash.hash === newHash) {
            log(3, [
              '%cload%c %ccleanMessages',
              CSS.NO_UPDATES,
              CSS.NONE,
              CSS.MESSAGES,
              resp.query.widget,
            ])

            log(4, ['%cmessages', CSS.MESSAGES, resp])
            status = 204
          } else {
            data = resp
            previousHash.hash = newHash
            status = await this.sm
              ?.setMessages(resp.query, resp)
              .then(async (code) => {
                // setTimeout(() => {
                code = 201
                return this.broadcastUpdate(code, resp)
                // }, 500); // MTM allow tuning thru options
              })
          }
          break
        case API.CLOUD:
          newHash = hashSum(resp.data.cloud)
          if (previousHash?.hash && previousHash.hash === newHash) {
            log(3, [
              '%cset%c %capi%c %ccloud',
              CSS.NO_UPDATES,
              CSS.NONE,
              CSS.API,
              CSS.NONE,
              CSS.CLOUD,
              resp.query.widget,
            ])

            log(4, ['%ccloud', CSS.CLOUD, resp.query])
            status = 204
          } else {
            previousHash.hash = newHash
            data = {
              data: {
                cloud: resp.data,
              },
              message: resp.message,
              success: resp.success,
              query: resp.query,
            }
            status = await this.sm
              ?.setCloud(resp.query, data.data)
              .then((code) => {
                return this.broadcastUpdate(code, resp)
              })
          }
          break
        case API.SERIES:
          newHash = hashSum(resp.data.series)
          if (previousHash?.hash && previousHash.hash === newHash) {
            log(3, [
              '%cset%c %capi%c %cseries',
              CSS.NO_UPDATES,
              CSS.NONE,
              CSS.API,
              CSS.NONE,
              CSS.CLOUD,
            ])
            log(4, ['%cseries', CSS.SERIES, resp])
            status = 204
          } else {
            previousHash.hash = newHash
            data = {
              data: resp.data,
              message: resp.message,
              success: resp.success,
              query: resp.query,
            }
            status = await this.sm
              ?.setSeries(resp.query, resp.data)
              .then((code) => {
                return this.broadcastUpdate(code, resp)
              })
          }
          break
        default:
          log(4, [
            `%cfetch%c %capi`,
            CSS.NO_UPDATES,
            CSS.NONE,
            CSS.API,
            `Bad request: type ${resp.query.type} unknown`,
          ])
          return resp
          status = 204
      }
    } else {
      // status = 401;
      log(4, [
        `%cset%c %c${resp.query.type}%c %cbad request`,
        CSS.KO,
        CSS.NONE,
        CSS.STORAGE,
        CSS.NONE,
        CSS.NO_UPDATES,
        resp.query,
      ])
      /**
       * Send back data from the local storage instead
       */
      switch (resp.query.type) {
        case API.MESSAGES:
          return await this.sm?.getMessages(resp.query).then((response) => {
            this.broadcastUpdate(201, response)
          })

        case API.CLOUD:
          return await this.sm?.getCloud(resp.query).then((response) => {
            this.broadcastUpdate(201, response)
          })

        case API.SERIES:
          return await this.sm?.getSeries(resp.query).then((response) => {
            this.broadcastUpdate(201, response)
          })
      }
    }
    return status
    // } else {
    // 	log(2, [
    // 		"%capp%c %cstorage",
    // 		CSS.APP,
    // 		CSS.NONE,
    // 		CSS.STORAGE,
    // 		EVENTS.ERROR,
    // 		response.status,
    // 	]);
    // 	return 400;
    // }
  }

  public startBroadcastListener = () => {
    const broadcast = this.options.presentation
    this.bc = new BroadcastChannel(broadcast)

    log(3, ['%cchannel%c %capi', CSS.BROADCAST, CSS.NONE, CSS.API, broadcast])
    this.bc.onmessage = (messageEvent: MessageEvent) => {
      this.actions(messageEvent)
    }
    this.bc.postMessage({ event: EVENTS.STORAGE_INIT, data: {} })
  }

  private broadcastUpdate = (status: number, resp: IResponse) => {
    switch (status) {
      case 201:
        log(3, [
          `%cupdate%c %cwidget%c %c${resp.query?.type}`,
          CSS.BROADCAST,
          CSS.NONE,
          CSS.WIDGET,
          CSS.NONE,
          typeCss(resp.query),
          // @ts-expect-error query.widget is obligatory but not always
          `${resp.data?.title ?? ''} ${resp.query.widget}`,
        ])
        log(4, ['%cevent', CSS.BROADCAST, resp])
        this.bc?.postMessage({
          event: EVENTS.WIDGET_UPDATE,
          data: resp.query,
        })
        break
      case 204:
        // Not modified
        break
      default:
        log(2, [
          `%cupdate%c %cwidget%c %c${resp.query?.type}`,
          CSS.KO,
          CSS.NONE,
          CSS.WIDGET,
          CSS.NONE,
          typeCss(resp.query),
          'Fetch error',
          resp.query,
        ])
        break
    }
    return status
  }

  public hide = (query: IQuery) => {
    this.api.hideMessage(query)
  }

  private actions = async (messageEvent: MessageEvent) => {
    switch (messageEvent.data.event) {
      case EVENTS.SUBSCRIBE:
        this.addSubscriber(messageEvent.data.data)

        break
      case EVENTS.UPDATE:
        log(3, [
          '%cupdate%c %capi%c %cstorage',
          CSS.BROADCAST,
          CSS.NONE,
          CSS.API,
          CSS.NONE,
          CSS.STORAGE,
          messageEvent.data,
        ])
        await this.update(messageEvent.data.data)
        break
      default:
    }
  }

  public cleanMessages = async () => {
    if (this.options?.suspended) {
      log(2, [
        '%cclean%c %cstorage%c %cmessages',
        CSS.KO,
        CSS.NONE,
        CSS.STORAGE,
        CSS.NONE,
        CSS.MESSAGES,
        `Account suspended`,
      ])
      return
    }

    const retentionDuration = this.options?.retention || 86400 * 4

    const count: number | undefined = await this.sm?.cleanMessages(
      retentionDuration,
    )

    log(3, [
      '%cclean%c %cstorage%c %cmessages',
      CSS.OK,
      CSS.NONE,
      CSS.STORAGE,
      CSS.NONE,
      CSS.MESSAGES,
      `${count} messages deleted`,
    ])
  }

  public hideMessage = async (query: IQuery): Promise<IResponse> => {
    // Clear from local storage
    const count = await this.sm?.hideMessage(query.id, 0)
    log(3, [
      '%chide%c %cstorage%c %cmessages',
      CSS.OK,
      CSS.NONE,
      CSS.STORAGE,
      CSS.NONE,
      CSS.MESSAGES,
      `${count} messages hidden`,
    ])
    // Clear from api server
    return await this.api.hideMessage(query)
  }

  public hideLabels: (query: IQuery) => Promise<IResponse> = async (
    query: IQuery,
  ): Promise<IResponse> => {
    return await this.api.hideLabels(query)
  }

  public getSubscribers = async () => {
    return await new Promise<any[]>((resolve) => resolve(this.subscribers))
  }

  public deleteSubscribers = async () => {
    this.subscribers = []
    return await new Promise<any[]>((resolve) => resolve(this.subscribers))
  }

  public getSlide = async (query: IQuery): Promise<IResponse | undefined> => {
    return await this.sm?.getSlide(query)
  }

  public getSlides = async (query: IQuery): Promise<IResponse | undefined> => {
    return await this.sm?.getSlides(query)
  }

  public setSlide = async (query: IQuery): Promise<IResponse | undefined> => {
    return await this.sm?.setSlide(query)
  }

  public loadSlide = async (query: IQuery): Promise<number> => {
    return await this.api.loadSlide(query)
  }

  public storeSlide = async (query: IQuery): Promise<IResponse | number> => {
    return await this.api.storeSlide(query)
  }

  public getPresentation = async (
    query: IQuery,
  ): Promise<IResponse | undefined> => {
    return await this.sm?.getPresentation(query)
  }

  public getPresentations = async (
    query?: IQuery,
  ): Promise<IResponse | undefined> => {
    return await this.sm?.getPresentations(query)
  }

  public setPresentation = async (
    query: IQuery,
  ): Promise<IResponse | undefined> => {
    return await this.sm?.setPresentation(query)
  }

  public loadPresentation = async (query: IQuery): Promise<number> => {
    return await this.api.loadPresentation(query)
  }

  public storePresentation = async (
    query: IQuery,
  ): Promise<IResponse | number> => {
    return await this.api.storePresentation(query)
  }

  public getPreference = async (
    preference: IPreference,
  ): Promise<IResponse | undefined> => {
    return await this.sm?.getPreference(preference)
  }

  public getPreferences = async (
    query?: IQuery,
  ): Promise<IResponse | undefined> => {
    return await this.sm?.getPreferences(query)
  }

  public setPreference = async (
    preference: IPreference,
  ): Promise<IResponse | undefined> => {
    return await this.sm?.setPreference(preference)
  }

  public loadPreference = async (
    preference: IPreference,
  ): Promise<IResponse | undefined> => {
    return await this.api.loadPreference(preference)
  }

  public storePreference = async (
    preference: IPreference,
  ): Promise<IResponse | number> => {
    return await this.api.storePreference(preference)
  }

  /* public loadDashboardWidgets = async (query: IQuery): Promise<Number> => {
		return await this.api.loadDashboardWidgets(query);
	}; */

  public getWidget = async (query: IQuery): Promise<IResponse | undefined> => {
    return await this.sm?.getWidget(query)
  }

  public getWidgets = async (
    query?: IQuery,
  ): Promise<IResponse | undefined> => {
    return await this.sm?.getWidgets(query)
  }

  public setWidget = async (query: IQuery): Promise<IResponse | undefined> => {
    return await this.sm?.setWidget(query)
  }

  public loadDashboards = async (
    query?: IQuery,
  ): Promise<IResponse | undefined> => {
    return await this.api.loadDashboards(query)
  }

  public getDashboard = async (
    query: IQuery,
  ): Promise<IResponse | undefined> => {
    return await this.sm?.getDashboard(query)
  }

  public getDashboards = async (): Promise<IResponse | undefined> => {
    return await this.sm?.getDashboards()
  }

  public setDashboard = async (
    query: IQuery,
  ): Promise<IResponse | undefined> => {
    return await this.sm?.setDashboard(query)
  }

  public loadImages = async (
    folder: string,
  ): Promise<IResponse | undefined> => {
    return await this.api.loadImages(folder)
  }

  public storeImage = async (
    imageFile: FormData,
  ): Promise<IResponse | number> => {
    return await this.api.storeImage(imageFile)
  }

  public deleteImage = async (
    folderName: string,
    imageName: string,
  ): Promise<IResponse | number> => {
    return await this.api.deleteImage(folderName, imageName)
  }

  public getImages = async (query: IQuery): Promise<IResponse | undefined> => {
    return await this.sm?.getImages(query)
  }

  public setImage = async (query: IQuery): Promise<IResponse | undefined> => {
    return await this.sm?.setImage(query)
  }
}
