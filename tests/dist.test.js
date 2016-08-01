import test from 'ava'
import deepFreeze from 'deep-freeze-strict'

import flattenArray from '../dist/array-flatten'

test('returns a flattened array', t => {
  const arr = [['a', 'b', 'c'], ['d', 'e'], 'd']
  deepFreeze(arr)
  const expected = ['a', 'b', 'c', 'd', 'e', 'd']
  const actual = flattenArray(arr)
  t.deepEqual(actual, expected)
})

test('empty arrays are not included', t => {
  const arr = [['a', 'b', 'c'], ['d', 'e'], [], 'd', []]
  deepFreeze(arr)
  const expected = ['a', 'b', 'c', 'd', 'e', 'd']
  const actual = flattenArray(arr)
  t.deepEqual(actual, expected)
})

test('does a shallow flatteing', t => {
  const arr = [['a', ['b', 'c']], ['d', 'e'], [], 'd', []]
  deepFreeze(arr)
  const expected = ['a', ['b', 'c'], 'd', 'e', 'd']
  const actual = flattenArray(arr)
  t.deepEqual(actual, expected)
})
