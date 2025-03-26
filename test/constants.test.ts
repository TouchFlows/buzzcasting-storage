import { describe, expect, it } from 'vitest'
import { STORAGE } from 'buzzcasting-utils'

describe('STORAGE_DEXIE', () => {
  it('the constant STORAGE_DEXIE should equal "dexie"', () => {
    expect(STORAGE.DEXIE).toEqual('dexie')
  })
})

describe('STORAGE_KEYVAL', () => {
  it('the constant STORAGE_KEYVAL should equal "keyval"', () => {
    expect(STORAGE.KEYVAL).toEqual('keyval')
  })
})
