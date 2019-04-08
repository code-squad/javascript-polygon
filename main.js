const polygon = require('./polygon');
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = () => {
  return new Promise((resolve, reject) => {
    rl.question('input >> ', (answer) => {
      answer *=1
      resolve(answer)
    })
  })
}

const main = async () => {
  console.log('[ circle radius ]')
  var radius = await input()
  var circle = polygon.circle(radius)
  console.log('result circle => ', circle)

  console.log('[ square height ]')
  var height = await input()
  console.log('[ square width ]')
  var width = await input()
  var square = polygon.square(height, width)
  console.log('result square => ', square)

  console.log('[ trapezoid height ]')
  height = await input()
  console.log('[ trapezoid underWidth ]')
  var underWidth = await input()
  console.log('[ trapezoid upperWidth ]')
  var upperWidth = await input()
  var trapezoid = polygon.trapezoid(height, underWidth, upperWidth)
  console.log('result trapezoid => ', trapezoid)

  console.log('[ cylinder radius ]')
  radius = await input()
  console.log('[ cylinder height ]')
  height = await input()
  var cylinder = polygon.cylinder(radius, height)
  console.log('result cylinder => ', cylinder)

  rl.close()
}

main()