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

export declare interface Category {
  type: string
  data: string[]
}

export declare interface Metrics {
  doc: number
  previous: number
  change: number
}

export declare interface Indicators {
  value: number
}
