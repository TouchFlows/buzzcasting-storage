import type { IModal, IQuery, IResponse } from '..'
import { API, BuzzcastingStorageReader, CSS, EVENTS } from '..'
import { attrs, clearContents, widgetParams } from '../utils'

/**
 * Main class for managing widgets and data updates
 */
export default class Widget {
  private storageReader: BuzzcastingStorageReader
  private broadcastChannel: BroadcastChannel
  private element: HTMLElement
  private query: IQuery

  private listeners: Array<(arg: IResponse) => void>

  /**
   * Main container for managing widgets and data updates
   *
   * @param element widget web component
   * @param callbacks functions in the widget that will receive the update
   * @param selector container for the element - by default buzzcasting-slide (optional)
   */
  constructor(
    element: HTMLElement,
    callbacks: Array<(arg: IResponse) => void>,
    selector?: string,
  ) {
    this.element = element

    this.listeners = callbacks

    selector = typeof selector !== 'undefined' ? selector : 'buzzcasting-slide'

    let query: IQuery
    // @ts-ignore
    query = { ...element.dataset }
    delete query.hmr

    query.slide
			= element.closest(selector.toUpperCase())?.id ?? `${selector} not found`

    query = widgetParams(query)
    this.query = query

    clearContents(element)

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
              cb(messageEvent.data)
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

  /**
   * This is used to register the component on the container's broadcast channel
   * This takes place when the container indicates it has finished loading (ready)
   */
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

  /**
   * Generic call to any query type
   *
   * @returns IResponse
   */
  public getData = async (): Promise<IResponse> => {
    switch (this.query.type) {
      case API.CLOUD:
        return await this.getCloud()
      case API.MESSAGES:
        return await this.getMessages()
      case API.SERIES:
        return await this.getSeries()
    }
    return {
      data: null,
      message: `wrong method call, '${this.query.type}' is unknown`,
      success: false,
    }
  }

  /**
   * Get Widget Coud Data
   *
   * @returns IResponse
   */
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
        message: `wrong method call for getCloud, expected type is '${this.query.type}'`,
        success: false,
      }
    }
    return await this.storageReader.getCloud(this.query)
  }

  /**
   * Get Widget Messages Data
   *
   * @returns IResponse
   */
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
        message: `wrong method call for getMessages, expected type is '${this.query.type}'`,
        success: false,
      }
    }
    console.debug(
      '%cstorage%c %cwidget',
      CSS.API,
      CSS.NONE,
      CSS.MESSAGES,
      this.query    );
    return await this.storageReader.getMessages(this.query)
  }

  /**
   * Get Widget Series Data
   *
   * @returns IResponse
   */
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
        message: `wrong method call for getSeries, expected type is '${this.query.type}'`,
        success: false,
      }
    }
    return await this.storageReader.getSeries(this.query)
  }

  /**
   * Emit a show modal event using the element's attributes
   * the component is the web component name to show
   *
   * @param modal IModal
   */
  public showModal = (modal: IModal) => {
    // const props: any[] = attrs(this.element.attributes)
    // if (Object.prototype.hasOwnProperty.call(props, 'data-topics')) {
    //   // @ts-ignore
    //   const topic = props['data-topics'].split('-')
    //   if (topic.length > 1) {
    //     // @ts-ignore
    //     props['data-widget'] = topic[1]
    //     // @ts-ignore
    //     props['data-dashboard'] = topic[0]
    //   } else {
    //     // @ts-ignore
    //     props['data-widget'] = topic[0]
    //     // @ts-ignore
    //     props['data-dashboard'] = this.query.slide
    //   }
    // }
    // const mergedProps = { ...modal.props, ...props }

    console.debug(
      '%cwidget',
      CSS.WIDGET,
      EVENTS.SHOW_MODAL,
      modal.showComponent,
      // @ts-ignore
      attrs(this.element.attributes)//props['data-widget'],
    )
    const ev = new CustomEvent(EVENTS.SHOW_MODAL, {
      detail: {
        component: modal.showComponent,
        props: modal.props, //mergedProps,
        timeout: modal?.timeout,
      },
      bubbles: true,
      cancelable: true,
      composed: true,
    })
    window.dispatchEvent(ev)
  }

  public destroy() {
    this.broadcastChannel.close()
  }
}
