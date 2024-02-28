import type { IQuery, IResponse } from '..'
import { API, BuzzcastingStorageReader, CSS, EVENTS, filterAttributes, widgetParams } from '..'

export default class Widget {
  private storageReader: BuzzcastingStorageReader
  private broadcastChannel: BroadcastChannel
  private query: IQuery
  private attributes: { [x: string]: string }

  private listeners: Array<(arg: IResponse) => void>

  /**
   *
   * @param callbacks functions in the widget that will receive the update
   * @param query
   */
  constructor(
    element: HTMLElement,
    callbacks: Array<(arg: IResponse) => void>,
    selector?: string,
  ) {
    selector = typeof selector !== 'undefined' ? selector : 'buzzcasting-slide'

    this.listeners = callbacks

    let query: IQuery
    query = { ...element.dataset }
    delete query.hmr

    query.slide
			= element.closest(selector.toUpperCase())?.id ?? `${selector} not found`

    query = widgetParams(query)
    this.query = query

    this.attributes = filterAttributes(element.attributes)

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
        case EVENTS.WIDGET_UPDATE:
          if (
            update.query.slide === query.slide
            && update.query.widget === query.widget
          ) {
            this.listeners.forEach((cb) => {
              cb(messageEvent.data.data)
            })
          }
          break
        case EVENTS.SLIDE_READY:
          this.subscribe()
          break
        default:
      }
    }
  }

  subscribe() {
    console.debug(
      '%cwidget%c %csubscribe',
      CSS.WIDGET,
      CSS.NONE,
      CSS.SUBSCRIBE,
      this.query.slide,
      this.query.widget,
    )
    this.broadcastChannel.postMessage({
      event: EVENTS.SUBSCRIBE,
      data: this.query,
    })
  }

  public getCloud = async (): Promise<IResponse> => {
    if (this.query.type !== API.CLOUD) {
      console.warn(
        '%cstorage%c %cwidget',
        CSS.STORAGE,
        CSS.NONE,
        CSS.WIDGET,
        this.query.widget,
        'Wrong method call for getCloud, expected type is',
        this.query.type,
      )
      return {
        data: null,
        message: `wrong method call for getCloud, expected type is ${this.query.type}`,
        success: false,
      }
    }
    return await this.storageReader.getCloud(this.query)
  }

  public getMessages = async (): Promise<IResponse> => {
    if (this.query.type !== API.MESSAGES) {
      console.warn(
        '%cstorage%c %cwidget',
        CSS.STORAGE,
        CSS.NONE,
        CSS.WIDGET,
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
    if (this.query.type !== API.SERIES) {
      console.warn(
        '%cstorage%c %cwidget',
        CSS.STORAGE,
        CSS.NONE,
        CSS.WIDGET,
        this.query.widget,
        'Wrong method call for getSeries, expected type is',
        this.query.type,
      )
      return {
        data: null,
        message: `wrong method call for getSeries, expected type is ${this.query.type}`,
        success: false,
      }
    }
    return await this.storageReader.getSeries(this.query)
  }

  public showModal = (modal: {
    showComponent: string
    dataset?: any
    attributes?: any
  }) => {
    const ev = new CustomEvent(EVENTS.SHOW_MODAL, {
      detail: {
        component: modal.showComponent,
        attributes: { ...modal.attributes, ...this.attributes },
        dataset: { ...modal.dataset, ...this.query },
      },
      bubbles: true,
      cancelable: true,
      composed: true,
    })
    // console.debug(ev.detail)
    window.dispatchEvent(ev)
  }

  public destroy() {
    this.broadcastChannel.close()
  }
}
