const potrace = require('potrace')
const svg2img = require('svg2img')

const outlineStroke = input => {
  return new Promise((resolve, reject) => {
    svg2img(input, (err, buffer) => {
      if (err) {
        reject(`Error in svg2img: ${err}`)
      }
      potrace.trace(buffer, (err, svg) => {
        if (err) {
          reject(`Error in potrace: ${err}`)
        }
        resolve(svg)
      })
    })
  })
}

exports = module.exports = outlineStroke
