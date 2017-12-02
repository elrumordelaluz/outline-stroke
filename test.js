import test from 'ava'
import path from 'path'
import fs from 'fs'
import outlineStroke from './'

const src = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <line x1="32" y1="16" x2="32" y2="48" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2"/>
  <line x1="48" y1="32" x2="16" y2="32" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2"/>
</svg>`

const expected = `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256" version="1.1">
	<path d="M 124 94 L 124 124 94 124 L 64 124 64 128 L 64 132 94 132 L 124 132 124 162 L 124 192 128 192 L 132 192 132 162 L 132 132 162 132 L 192 132 192 128 L 192 124 162 124 L 132 124 132 94 L 132 64 128 64 L 124 64 124 94 " stroke="none" fill="black" fill-rule="evenodd"/>
</svg>`

test('Converts from string', async t => {
  const res = await outlineStroke(src)
  t.is(res, expected)
})

test.cb('Converts from Buffer', t => {
  fs.readFile('./src.svg', (err, data) => {
    outlineStroke(data).then(res => {
      t.is(res, expected)
      t.end()
    })
  })
})

test('Converts from file', async t => {
  const res = await outlineStroke(path.resolve('src.svg'))
  t.is(res, expected)
})
