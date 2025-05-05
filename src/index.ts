import { BuzzcastingStorageManager } from './manager'
import { BuzzcastingStorageReader } from './reader'
import Widget from './widget'

declare global {
  interface Window {
    BuzzCasting: any
  }
}
export { BuzzcastingStorageManager, BuzzcastingStorageReader, Widget }
