import type { ICloud } from './ICloud'
import type { IMessages } from './IMessages'
import type { IQuery } from './IQuery'
import type { ISeries } from './ISeries'

export declare interface IResponse {
  data: IMessagesData | ISeries | ICloud | null
  message: string
  success: boolean
  query?: IQuery
}

export declare interface IMessagesData {
  messages: IMessages
  presentation?: string
  slide?: string
  topics?: string
  query: IQuery
}
