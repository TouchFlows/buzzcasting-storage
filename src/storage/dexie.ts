import Dexie from 'dexie'
import type { IMessage, IQuery, IResponse, IStorageOptions } from '..'
import { API, CSS, EVENTS } from '..'
import { moderation, widgetParams } from '../utils/widget'

export default class DexieClient {
  private db: Dexie
  public subscribers: Array<any> = []
  private options: IStorageOptions

  constructor(options: IStorageOptions) {
    this.options = options

    this.db = new Dexie(options.app)
    this.db.version(3).stores({
      player: 'id,title,name,location',
      monitor:
				'id,player_id,cols,rows,order,width,height,physicalwidth,physicalheight,devicePixelRatio,screenLeft,screenTop,orientation,monitor',
      display: 'id,monitor_id,presentation_id,colstart,colend,rowstart,rowend',
      channel: 'id,slide_index',
      presentation: 'id,name,data',
      slide: 'id,title,json,html,css',
      cloud: 'id,dashboard_id,data',
      messages: 'id,utc,visible,data',
      series: 'id,dashboard_id,data',
      topics:
				'[widget_id+message_id],widget_id,dashboard_id,title,engagement,impressions,reach,sentiment,visible,utc',
      widgets: 'id,dashboard_id,type',
    })
    this.db.open()
  }

  /**
   * Retrieve Cloud Data
   * @param query IQuery
   * @returns IResponse
   */
  getCloud = async (query: IQuery): Promise<IResponse> => {
    const data = await this.db.table(API.CLOUD).where({ id: query.widget }).last().catch(() => {
      console.warn(
        '%capi%C %ccloud',
        CSS.API,
        CSS.NONE,
        CSS.CLOUD,
        query.slide,
        query.widget,
      )
    })
    if (data === undefined) {
      return { data: null, message: 'Cloud Data error', success: false }
    }
    data.data.presentation = query?.presentation || 'not set'
    data.data.slide = query?.slide || 'not set'
    data.message = 'Messages retrieved successfully'
    data.success = true
    return data
  }

  /**
   * Retrieve Cloud Data
   * @param query IQuery
   * @returns IResponse
   */
  getSeries = async (query: IQuery): Promise<IResponse> => {
    const data = await this.db.table(API.SERIES).where({ id: query.widget }).last().catch(() => {
      console.warn(
        '%capi%c %cseries',
        CSS.API,
        CSS.NONE,
        CSS.SERIES,
        query.slide,
        query.widget,
      )
    })
    if (data === undefined) {
      return { data: null, message: 'Series Data error', success: false }
    }
    data.data.presentation = query?.presentation || 'not set'
    data.data.slide = query?.slide || 'not set'
    data.message = 'Messages retrieved successfully'
    data.success = true
    return data
  }

  /**
   * Retrieve Cloud Data
   * @param query IQuery
   * @returns IResponse
   */
  getMessages = async (query: IQuery): Promise<IResponse> => {
    const widgetFilter = (topic: { widget_id: string }) =>
      topic.widget_id === query.widget

    const sinceFilter = (topic: { utc: number }) =>
      topic.utc > (query?.since || 0)
    /* eslint-disable unicorn/consistent-function-scoping */
    const visibleFilter = (topic: { visible: number | undefined }) =>
      topic?.visible !== 0
    /* eslint-enable */
    try {
      const topicMessages: any = await this.db.table(API.TOPICS).orderBy('utc').reverse().filter(widgetFilter).filter(sinceFilter).filter(visibleFilter).limit(query?.limit ?? 25).toArray().catch(() => {
        console.warn(
          '%capi%c %cmessages',
          CSS.API,
          CSS.NONE,
          CSS.MESSAGES,
          query.slide,
          query.widget,
        )
      })
      if (topicMessages.length === 0) {
        return { data: null, message: 'No Messages error', success: false }
      }

      const title = topicMessages[0] ? topicMessages[0].title : 'No title'

      const messageIds = topicMessages.map(
        (message: { message_id: any }) => message.message_id,
      )

      // may not come back in order of call, so need to sort
      const messages: any[] = await this.db.table(API.MESSAGES).where('id').anyOf(messageIds).toArray().then((messages) => {
        return messages.sort((a, b) => {
          return b.utc - a.utc
        })
      })

      const messagesMap: IMessage[] = messages.map(
        (message: any) => message.data,
      )

      return {
        data: {
          presentation: query?.presentation || 'not set',
          slide: query?.slide || 'not set',
          messages: messagesMap,
          title,
          topics: [query.dashboard, query.widget].join('-'),
          query,
        },
        message: 'Messages retrieved successfully',
        success: true,
      }
    } catch (error) {
      console.error('%cstorage', CSS.STORAGE, 'set', query, error)
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
    if (query.type === API.CLOUD && data !== '') {
      return await this.db.table(API.CLOUD).put({
        id: query.widget,
        dashboard_id: query.dashboard,
        data: data.data,
      }).then(() => 201).catch((error: Error) => {
        console.error('%cstorage', CSS.STORAGE, 'set', query, error)
        return 400
      })
    }
    return 400
  }

  /**
   * Update Series
   * @param query IQuery
   * @param data
   * @returns number
   */
  setSeries = async (query: IQuery, data: any): Promise<number> => {
    if (query.type === API.SERIES && data !== '') {
      return await this.db.table(API.SERIES).put({
        id: query.widget,
        dashboard_id: query.dashboard,
        data: data.data,
      }).then(() => 201).catch((error: Error) => {
        console.error('%cstorage', CSS.STORAGE, 'set', query, error)
        return 400
      })
    }
    return 400
  }

  /**
   * Update Messages
   * @param query IQuery
   * @param data
   * @param data.title Widget name or id
   * @param data.data any
   * @param data.data.messages IMessages
   * @returns number
   */
  setMessages = async (
    query: IQuery,
    data: { title: any, data: { messages: IMessage[], title: string } },
  ): Promise<number> => {
    if (query.type !== API.MESSAGES) {
      return 400
    }
    const title: string = data.data.title
    let errorCount = 0

    data.data.messages.forEach(async (message: IMessage) => {
      await this.db.table(API.MESSAGES).put({ id: message.id, utc: message.utc, data: message }).catch((error: Error) => {
        errorCount++
        console.error(
          '%cstorage',
          CSS.STORAGE,
          'set message',
          `title: ${title}`,
          message,
          error,
        )
      })
      await this.db.table(API.TOPICS).put({
        widget_id: query.widget,
        message_id: message.id,
        dashboard_id: query.dashboard,
        title,
        engagement: message.dynamics?.engagement,
        impressions: message.dynamics?.semrush_visits,
        reach: message.dynamics?.potential_reach,
        sentiment: message.topics[0].sentiment,
        utc: message.utc,
      }).catch((error: Error) => {
        errorCount++
        console.error(
          '%cstorage',
          CSS.STORAGE,
          'set topic',
          `title: ${title}`,
          message,
          error,
        )
      })
    })
    return errorCount === 0 ? 201 : 400
  }

  /**
   * Wipe Message data after number of seconds
   * @param retentionDuration
   */
  cleanMessages = async (retentionDuration: number): Promise<number> => {
    const currentDate = Date.now() / 1000

    const topicFilter = (topic: { utc: number }) =>
      topic.utc < currentDate - retentionDuration

    const messagesFilter = (message: { utc: number }) =>
      message.utc < currentDate - retentionDuration

    await this.db.table(API.TOPICS).orderBy('utc').filter(topicFilter).modify((_message, ref) => {
      delete ref.value
    }).catch((error) => {
      console.error(
        '%cstorage%c %clean',
        CSS.STORAGE,
        CSS.NONE,
        CSS.MESSAGES,
        error,
      )
      return 0
    })

    return await this.db.table(API.MESSAGES).orderBy('utc').filter(messagesFilter).modify((_message, ref) => {
      delete ref.value
    }).catch((error) => {
      console.error(
        '%cstorage%c %clean',
        CSS.STORAGE,
        CSS.NONE,
        CSS.MESSAGES,
        error,
      )
      return 0
    })
  }

  hideMessage = async (id: string, visible: number) => {
    await this.db.table(API.TOPICS).where('message_id').equals(id).modify({ visible }).catch((error) => {
      console.error(
        '%cstorage%c %chide',
        CSS.STORAGE,
        CSS.NONE,
        CSS.HIDE,
        error,
      )
      return 0
    })
  }

  /**
   * Update Cloud
   * @param query IQuery
   * @returns number
   */
  setWidget = async (query: IQuery): Promise<number> => {
    return await this.db.table(API.WIDGETS).put({
      id: query.widget,
      dashboard_id: query.dashboard,
      type: query.type,
    }).then(() => 201).catch((error: Error) => {
      console.error('%cstorage', CSS.STORAGE, API.WIDGET, query, error)
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

    const alreadySubscribed = this.subscribers.filter(
      (widget) => widget.widget === query.widget,
    ).length
    if (alreadySubscribed > 0) {
      return null
    }
    if (query.type === API.MESSAGES) {
      query = moderation(this.options, query)
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

  /**
   * Retrieve Cloud Data
   * @param query IQuery
   * @returns IResponse
   */
  loadSlide = async (query: IQuery): Promise<IResponse> => {
    const data = await this.db.table(API.SLIDE).where({ id: query.slide }).last().catch(() => {
      console.warn(
        '%capi%c %cseries',
        CSS.API,
        CSS.NONE,
        CSS.SERIES,
        query.slide,
        query.widget,
      )
    })
    if (data === undefined) {
      return { data: null, message: 'Slide Load error', success: false }
    }
    data.data.slide = query?.slide || 'not set'
    data.message = 'Slide retrieved successfully'
    data.success = true
    return data
  }

  /**
   * Update Slide
   * @param query IQuery
   * @returns number
   */
  storeSlide = async (query: IQuery): Promise<number> => {
    if (query.type === API.SLIDE && query.data !== '') {
      return await this.db.table(API.SLIDE).put({
        id: query.id,
        title: query.data.title || 'Not set',
        json: query.data.json || {},
        html: query.data.html || '',
        css: query.data.css || '',
      }).then(() => 201).catch((error: Error) => {
        console.error(
          '%cstorage',
          CSS.STORAGE,
          EVENTS.SLIDE_STORE,
          query,
          error,
        )
        return 400
      })
    }
    return 400
  }
}
