const potrace = require('potrace')
const sharp = require('sharp')
const { promisify } = require('util')

const trace = promisify(potrace.trace)

const outlineStroke = input => {
  const src = Buffer.isBuffer(input) ? input : new Buffer(input)
  return sharp(src)
    .toBuffer()
    .then(trace)
}

exports = module.exports = outlineStroke
