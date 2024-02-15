import { describe, expect, it } from 'vitest'
import { STORAGE_DEXIE, STORAGE_KEYVAL } from '../src/constants'

describe('sTORAGE_DEXIE', () => {
  it('the constant STORAGE_DEXIE should equal "dexie"', () => {
    expect(STORAGE_DEXIE).toEqual('dexie')
  })
})

describe('sTORAGE_KEYVAL', () => {
  it('the constant STORAGE_KEYVAL should equal "keyval"', () => {
    expect(STORAGE_KEYVAL).toEqual('keyval')
  })
})
