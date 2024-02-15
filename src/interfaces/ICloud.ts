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
  current: Current
  previous: Previous
}

export declare interface Current {
  total: number
  positive: number
  negative: number
  neutral: number
  engagement: number
  reach: number
  velocity: number
}

export declare interface Previous {
  total: number
  positive: number
  negative: number
  neutral: number
  engagement: number
  reach: number
  velocity: number
}
