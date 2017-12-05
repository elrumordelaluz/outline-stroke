const potrace = require('potrace')
const sharp = require('sharp')

const outlineStroke = input => {
  const src = Buffer.isBuffer(input) ? input : new Buffer(input)
  return new Promise((resolve, reject) => {
    sharp(src)
      .toBuffer()
      .then(buffer => {
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
