const potrace = require('potrace')
const svg2img = require('svg2img')

// const convert = input => {
//   const canvas = Canvas.createCanvas()
//   canvg(canvas, input, {
//     ignoreMouse: true,
//     ignoreAnimation: true,
//   })
//   const buffer = canvas.toBuffer()
//   return new Promise((resolve, reject) => {
//     if (buffer) {
//       potrace.trace(buffer, (err, svg) => {
//         if (err) {
//           reject(`Error in potrace: ${err}`)
//         }
//         resolve(svg)
//       })
//     } else {
//       reject('No input')
//     }
//   })
// }

// const convert = input => {
//   return svg2png(input).then(buffer => {
//     return new Promise((resolve, reject) => {
//       potrace.trace(buffer, (err, svg) => {
//         if (err) {
//           reject(`Error in potrace: ${err}`)
//         }
//         resolve(svg)
//       })
//     })
//   })
// }

const convert = input => {
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

exports = module.exports = convert
