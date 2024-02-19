import { BuzzcastingStorageManager } from './manager'
import { BuzzcastingStorageReader } from './reader'

declare global {
  interface Window {
    BuzzCasting: any
  }
}

export { sum } from './utils/hash-sum'

export * from './interfaces/IQuery'

export * from './interfaces/IStorageOptions'

export * from './constants'

export { BuzzcastingStorageManager, BuzzcastingStorageReader }
