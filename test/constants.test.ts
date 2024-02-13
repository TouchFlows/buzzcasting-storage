import { describe, expect, it } from 'vitest'
import { STORAGE_DEXIE } from '../src/constants'

describe('sTORAGE_DEXIE', () => {
  it('the constant STORAGE_DEXIE should equal "dexie"', () => {
    expect(STORAGE_DEXIE).toEqual('dexie')
  })
})
