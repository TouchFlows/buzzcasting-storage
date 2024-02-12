import { describe, expect, it } from 'vitest'
import { STORAGE_DEXIE } from '../src/constants'

describe('STORAGE_DEXIE', () => {
  it('The constant STORAGE_DEXIE should equal "dexie"', () => {
    expect(STORAGE_DEXIE).toEqual('dexie')
  })
})
