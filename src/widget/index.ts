import type { IQuery, IResponse } from '..'
import {
  BuzzcastingStorageReader,
  CLOUD,
  MESSAGES,
  NONE,
  SERIES,
  STORAGE_CSS,
  SUBSCRIBE_CSS,
  WIDGET_CSS,
  widgetParams,
} from '..'

export default class Widget {
  private storageReader: BuzzcastingStorageReader
  private broadcastChannel: BroadcastChannel
  private query: IQuery

  private readonly listeners: Array<(arg: IResponse) => void>

  /**
   *
   * @param callbacks functions in the widget that will receive the update
   * @param query
   */
  constructor(callbacks: Array<(arg: IResponse) => void>, query: IQuery) {
    this.listeners = callbacks
    query = widgetParams(query)
    if (query.widget === undefined) {
      const topics = query.topics?.split('-')
      query.dashboard = topics ? topics[0] : ''
      query.widget = topics ? topics[1] : ''
    }
    this.query = query

    const options = window.BuzzCasting.getOptions()
    this.storageReader = new BuzzcastingStorageReader(options)

    this.broadcastChannel = new BroadcastChannel(query.slide)
    this.startListener()
  }

  public addListener(cb: (arg: IResponse) => void): void {
    this.listeners.push(cb)
  }

  /**
   * Data received from BroadcastChannel
   */
  public startListener() {
    const query: IQuery = this.query

    this.broadcastChannel.onmessage = async (messageEvent: MessageEvent) => {
      const update: IQuery = messageEvent.data.data
      switch (messageEvent.data.event) {
        case 'widget-update':
          if (update.slide === query.slide && update.widget === query.widget) {
            this.listeners.forEach((cb) => {
              cb(messageEvent.data.data)
            })
          }
          break
        case 'slide-ready':
          this.subscribe()
          break
        default:
      }
    }
  }

  subscribe() {
    console.debug(
      '%cwidget%c %csubscribe',
      WIDGET_CSS,
      NONE,
      SUBSCRIBE_CSS,
      this.query.slide,
      this.query.widget,
    )
    this.broadcastChannel.postMessage({ event: 'subscribe', data: this.query })
  }

  public getCloud = async (): Promise<IResponse> => {
    if (this.query.type !== CLOUD) {
      console.warn(
        '%cstorage%c %cwidget',
        STORAGE_CSS,
        NONE,
        WIDGET_CSS,
        this.query.widget,
        'Wrong method call for getCloud, expected type is',
        this.query.type,
      )
      return {
        data: null,
        message: `wrong method call for getMessages, expected type is ${this.query.type}`,
        success: false,
      }
    }
    return await this.storageReader.getCloud(this.query)
  }

  public getMessages = async (): Promise<IResponse> => {
    if (this.query.type !== MESSAGES) {
      console.warn(
        '%cstorage%c %cwidget',
        STORAGE_CSS,
        NONE,
        WIDGET_CSS,
        this.query.widget,
        'Wrong method call for getMessages, expected type is',
        this.query.type,
      )
      return {
        data: null,
        message: `wrong method call for getMessages, expected type is ${this.query.type}`,
        success: false,
      }
    }
    return await this.storageReader.getMessages(this.query)
  }

  public getSeries = async (): Promise<IResponse> => {
    if (this.query.type !== SERIES) {
      console.warn(
        '%cstorage%c %cwidget',
        STORAGE_CSS,
        NONE,
        WIDGET_CSS,
        this.query.widget,
        'Wrong method call for getSeries, expected type is',
        this.query.type,
      )
      return {
        data: null,
        message: `wrong method call for getMessages, expected type is ${this.query.type}`,
        success: false,
      }
    }
    return await this.storageReader.getSeries(this.query)
  }

  public destroy() {
    this.broadcastChannel.close()
  }
}
