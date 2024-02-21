import { BuzzcastingStorageManager } from './manager'
import { BuzzcastingStorageReader } from './reader'

/**
 * Constants
 */
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

/**
 * Cloud
 */
export declare interface ICloud {
  labels: Label[]
  current: any[]
  previous: any[]
  type: string
  total: number
  current_total: number
  previous_total: number
}

export declare interface Label {
  label: string
  count: number
  info: string
  current: CloudIndicators
  previous: CloudIndicators
}

declare interface CloudIndicators {
  total: number
  positive: number
  negative: number
  neutral: number
  engagement: number
  reach: number
  velocity: number
}
/**
 * Messages
 */
export declare interface Sender {
  id: string
  title: string
  name: string
  avatar: string
  bio: string
  location: string
  verified: number
  following: number
  followers: number
  listed: number
  favourites: number
  messages: number
  influence: number
}

declare interface Topic {
  topic: string
  engagement: number
  impressions: number
  reach: number
  sentiment: number
}

export declare interface Dynamics {
  engagement?: number
  semrush_visits?: number
  potential_reach?: number
  facebook_insights_reach?: number
  facebook_insights_impressions?: number
  facebook_insights_link_clicks?: number
  twitter_shares?: number
  facebook_shares?: number
  twitter_insights_retweets?: number
  total_comments: number
  trending_score?: number
}

declare interface Geo {
  latitude: number
  longitude: number
  zip: string
  street: string
  city: string
  country: string
}

export declare interface Medium {
  type: string
  url: string
  width: number
  height: number
}

export declare interface Message {
  id: string
  published: string
  harvested: string
  utc: number
  channel: string
  type: string
  sender: Sender
  reply: string
  replyto: string
  page: string
  conversation: string
  title: string
  content: string
  sentiment: number
  link: string
  language: string
  region: string
  topics: Topic[]
  dynamics?: Dynamics
  geo?: Geo
  media?: Medium[]
}

export declare interface IMessages {
  success?: boolean
  message?: string
  data?: Message[]
}
/**
 * API Response
 */
export declare interface IResponse {
  data: IMessagesData | ISeries | ICloud | null
  message: string
  success: boolean
  query?: IQuery
}

declare interface IMessagesData {
  messages: IMessages
  presentation?: string
  slide?: string
  topics?: string
  query: IQuery
}

/**
 * Query
 */
export declare interface IQuery {
  [x: string]: any
  topics?: string
  dashboard?: string
  widget?: string
  compare?: string
  period?: number
  type?: 'cloud' | 'messages' | 'series' | 'proxy'
  order?: string
  media?: number
  dynamics?: number
  geo?: number
  delay?: string
  approved?: string
  moderation?: 'realtime' | 'delayed' | 'approved' | 'none'
  hrm?: string
  before?: number
  since?: number
  hash?: string
}
/**
 * Series Data
 */
export declare interface ISeries {
  topic: string
  title: string
  series: Series[]
  category: Category
  metrics: Metrics
  indicators: Indicators
  timestamp: number
}

export declare interface Series {
  name: string
  label: string
  current: number[]
  current_total: number
  previous_total: number
  previous: number[]
  current_category: number
  previous_category: number
}

declare interface Category {
  type: string
  data: string[]
}

declare interface Metrics {
  doc: number
  previous: number
  change: number
}

declare interface Indicators {
  value: number
}
/**
 * Storage Options
 */
export declare interface IStorageOptions {
  app: string
  version: string
  storage: string
  slide?: string
  presentation?: string
  token?: string
  bearer?: string
  csrf?: string
  moderation?: string
  beforeTime?: string
  delay?: number
  period?: number
  retention?: number
}

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
