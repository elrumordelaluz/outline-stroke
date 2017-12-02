# svg-outline-stroke

Sometimes you need an `svg` image that have `paths` with `stroke` attributes but
outlined like after apply the _Outline Stroke_ in _Illustrator_ or _Convert to
Outlines_ in _Sketch_

```zsh
yarn add outline-stroke
```

```js
const outlineStroke = require('svg-outline-stroke')

const strokedSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <line x1="32" y1="16" x2="32" y2="48" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2"/>
  <line x1="48" y1="32" x2="16" y2="32" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2"/>
</svg>`

outlineStroke(strokedSVG).then(outlined => {
  console.log(outlined)
})

// Scale passing width and height options
outlineStroke(strokedSVG, { width: 500, height: 500 }).then(outlined => {
  console.log(outlined)
})
```

or from `Buffer`

```js
const fs = require('fs')
const outlineStroke = require('svg-outline-stroke')

fs.readFile('./source.svg', (err, data) => {
  if (err) throw err
  outlineStroke(data).then(outlined => {
    fs.writeFile('./dest.svg', outlined, err => {
      if (err) throw err
      console.log('yup, outlined!')
    })
  })
})
```

or from `.svg` file directly

```js
const path = require('path')

outlineStroke(path.resolve('source.svg')).then(outlined =>
  console.log(outlined)
)
```
