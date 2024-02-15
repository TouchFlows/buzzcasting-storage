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
