'use strict';

require('mocha')
const assert = require('assert')
const slice = require('./')

describe('array-slice', () => {
  it('should return the  specified range.', () => {
    const arr = ['a', 'b', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    assert.deepEqual(slice(arr, 3, 6), ['e', 'f', 'g'])
    assert.deepEqual(slice(arr, 1), ['b', 'd', 'e', 'f', 'g', 'h', 'i', 'j'])
    assert.deepEqual(slice(arr, -1), ['j'])
  })
  it('should not mutate the array', () => {
    const arr = ['a', 'b', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    slice(arr, 3, 6)
    assert.deepEqual(arr, ['a', 'b', 'd', 'e', 'f', 'g', 'h', 'i', 'j'])
  })
})
