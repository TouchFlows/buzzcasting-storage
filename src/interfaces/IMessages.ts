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

export declare interface Topic {
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

export declare interface Geo {
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
