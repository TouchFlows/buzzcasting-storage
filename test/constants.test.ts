import { STORAGE } from 'buzzcasting-utils'
import { describe, expect, it } from 'vitest'

describe('sTORAGE_DEXIE', () => {
  it('the constant STORAGE_DEXIE should equal "dexie"', () => {
    expect(STORAGE.DEXIE).toEqual('dexie')
  })
})

describe('sTORAGE_KEYVAL', () => {
  it('the constant STORAGE_KEYVAL should equal "keyval"', () => {
    expect(STORAGE.KEYVAL).toEqual('keyval')
  })
})
