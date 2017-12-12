<p align="center">
  <img alt="Outline Stroke" title="Outline Stroke" src="/logo.svg" width="450">
</p>

<p align="center">
  Sometimes you need an `svg` image that have `stroke`d attributes in its
  `paths` but **outlined** like after applying _Outline Stroke_ in _Adobe Illustrator_ or _Convert to Outlines_ in _SketchApp_
</p>

<p align="center">
  [![Build Status](https://travis-ci.org/elrumordelaluz/outline-stroke.svg?branch=master)](https://travis-ci.org/elrumordelaluz/outline-stroke)
</p>

## Install

```zsh
yarn add svg-outline-stroke
```

## Usage

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

## Related

[micro-outline-stroke](https://github.com/elrumordelaluz/micro-outline-stroke)
Microservice with a public [endpoint](https://micro-outline-stroke.now.sh/)
