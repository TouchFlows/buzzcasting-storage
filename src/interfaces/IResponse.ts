import type { ICloud } from './ICloud'
import type { IMessages } from './IMessages'
import type { IQuery } from './IQuery'
import type { ISeries } from './ISeries'

export declare interface IResponse {
  data: IMessagesData | ISeries | ICloud | null
  query?: IQuery
  message: string
  success: boolean
}

export declare interface IMessagesData {
  messages: IMessages
}
