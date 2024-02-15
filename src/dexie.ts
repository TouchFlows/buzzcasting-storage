import Dexie from 'dexie'
import { moderation } from './helpers'
import {
  CLOUD,
  MESSAGES,
  SERIES,
  STORAGE_CSS,
  SUBSCRIBE,
  TOPICS,
  WIDGET,
  WIDGETS,
} from './constants'
import type { IStorageOptions } from './interfaces/IStorageOptions'
import type { IQuery } from './interfaces/IQuery'
import type { Message } from './interfaces/IMessages'

export default class DexieClient {
  private db: Dexie
  private subscribers: Array<any> = []
  private options: IStorageOptions

  constructor(options: IStorageOptions) {
    this.options = options

    this.db = new Dexie(options.app)
    this.db.version(2).stores({
      player: 'id,title,name,location',
      monitor:
				'id,player_id,cols,rows,order,width,height,physicalwidth,physicalheight,devicePixelRatio,screenLeft,screenTop,orientation,monitor',
      display: 'id,monitor_id,presentation_id,colstart,colend,rowstart,rowend',
      channel: 'id,slide_index',
      presentation: 'id,name,data',
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
   * Update Cloud
   * @param query IQuery
   * @param data
   * @returns number
   */
  setCloud = async (query: IQuery, data: any): Promise<number> => {
    if (query.type === CLOUD && data !== '') {
      return await this.db
        .table(CLOUD)
        .put({
          id: query.widget,
          dashboard_id: query.dashboard,
          data: data.data,
        })
        .then(() => 201)
        .catch((error: Error) => {
          console.error('%cstorage', STORAGE_CSS, 'set', query, error)
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
    if (query.type === SERIES && data !== '') {
      return await this.db
        .table(SERIES)
        .put({
          id: query.widget,
          dashboard_id: query.dashboard,
          data: data.data,
        })
        .then(() => 201)
        .catch((error: Error) => {
          console.error('%cstorage', STORAGE_CSS, 'set', query, error)
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
    data: { title: any, data: { messages: Message[] } },
  ): Promise<number> => {
    if (query.type !== MESSAGES) {
      return 400
    }
    const title = data.title
    try {
      data.data.messages.forEach(async (message: Message) => {
        await this.db
          .table(MESSAGES)
          .put({ id: message.id, utc: message.utc, data: message })
        await this.db.table(TOPICS).put({
          widget_id: query.widget,
          message_id: message.id,
          dashboard_id: query.dashboard,
          title,
          engagement: message.dynamics?.engagement,
          impressions: message.dynamics?.semrush_visits,
          reach: message.dynamics?.potential_reach,
          sentiment: message.topics[0].sentiment,
          utc: message.utc,
        })
      })
      return 201
    } catch (error) {
      console.error('%cstorage', STORAGE_CSS, 'set', query, error)
      return 400
    }
  }

  /**
   * Wipe Message data after number of seconds
   * @param retentionDuration
   */
  cleanMessages = async (retentionDuration: number) => {
    const currentDate = Date.now() / 1000

    const beforeFilter = (topic: { utc: number }) =>
      topic.utc < retentionDuration - currentDate

    await this.db
      .table('topics')
      .orderBy('utc')
      .filter(beforeFilter)
      .modify((_message, ref) => {
        delete ref.value
      })
  }

  /**
   * Update Cloud
   * @param query IQuery
   * @returns number
   */
  setWidget = async (query: IQuery): Promise<number> => {
    return await this.db
      .table(WIDGETS)
      .put({
        id: query.widget,
        dashboard_id: query.dashboard,
        type: query.type,
      })
      .then(() => 201)
      .catch((error: Error) => {
        console.error('%cstorage', STORAGE_CSS, WIDGET, query, error)
        return 400
      })
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
    const alreadySubscribed = this.subscribers.filter(
      (widget) => widget.widget === query.widget,
    ).length
    if (alreadySubscribed > 0) {
      return null
    }
    if (query.type === MESSAGES) {
      query = moderation(this.options, query)
    }
    console.info(
      '%cstorage',
      STORAGE_CSS,
      SUBSCRIBE,
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
