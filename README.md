# svg-outline-stroke [![Build Status](https://travis-ci.org/elrumordelaluz/outline-stroke.svg?branch=master)](https://travis-ci.org/elrumordelaluz/outline-stroke)

> Sometimes you need an `svg` image that have `stroke`d attributes in its
> `paths` but **outlined** like after applying _Outline Stroke_ in _Adobe
> Illustrator_ or _Convert to Outlines_ in _SketchApp_

### Install

One important dependency of this package is the awesome
[canvas](https://github.com/Automattic/node-canvas) so in order to allow the
installation process is necessary to have
[installed before](https://github.com/Automattic/node-canvas#installation) some
other packages.
[More details](https://github.com/Automattic/node-canvas/wiki/_pages).

```zsh
yarn add outline-stroke
```

### Usage

`String` input:

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

`Buffer` input:

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

`.svg` from _File System_ input:

```js
const path = require('path')

outlineStroke(path.resolve('source.svg')).then(outlined =>
  console.log(outlined)
)
```

### Options

`width` and `height` to scale the output (defaults to `256`)

```js
outlineStroke(strokedSVG, { width: 1000, height: 1000 })
```
