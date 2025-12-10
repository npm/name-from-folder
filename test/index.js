const nff = require('../')
const { test } = require('node:test')
const assert = require('node:assert')

test('extracts scoped package name', () => {
  assert.strictEqual(nff('/a/b/c/@foo/bar'), '@foo/bar')
})

test('extracts unscoped package name', () => {
  assert.strictEqual(nff('/a/b/c/foo/bar'), 'bar')
})

test('returns false for null input', () => {
  assert.strictEqual(nff(null), false)
})
