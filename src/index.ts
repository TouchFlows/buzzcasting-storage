import { BuzzcastingStorageManager } from './manager'
import { BuzzcastingStorageReader } from './reader'
import {
  API_CSS,
  APP_CSS,
  BROADCAST_CSS,
  CLOUD,
  CLOUD_CSS,
  GET_DATA,
  HIDE_CSS,
  MESSAGES,
  MESSAGES_CSS,
  NONE,
  NO_UPDATES,
  PRESENTATION_CSS,
  SERIES,
  SERIES_CSS,
  SLIDE_CSS,
  STORAGE_CSS,
  STORAGE_DEXIE,
  STORAGE_KEYVAL,
  STORAGE_LOCAL,
  STORAGE_SESSION,
  STORAGE_WINDOW,
  SUBSCRIBE,
  SUBSCRIBE_CSS,
  TOPICS,
  WIDGET,
  WIDGETS,
  WS_CSS,
} from './constants'

declare global {
  interface Window {
    BuzzCasting: any
  }
}

export {
  BuzzcastingStorageManager,
  BuzzcastingStorageReader,
  MESSAGES,
  CLOUD,
  SERIES,
  TOPICS,
  WIDGET,
  WIDGETS,
  SUBSCRIBE,
  STORAGE_KEYVAL,
  STORAGE_LOCAL,
  STORAGE_SESSION,
  STORAGE_DEXIE,
  STORAGE_WINDOW,
  STORAGE_CSS,
  BROADCAST_CSS,
  API_CSS,
  GET_DATA,
  NO_UPDATES,
  NONE,
  CLOUD_CSS,
  MESSAGES_CSS,
  SERIES_CSS,
  HIDE_CSS,
  APP_CSS,
  WS_CSS,
  SUBSCRIBE_CSS,
  SLIDE_CSS,
  PRESENTATION_CSS,
}
