const {PI} = Math;
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var polygonCalls = []

const input = (query) => {
  return new Promise((resolve, reject) => {
    rl.question(query, (answer) => {
      answer *=1
      resolve(answer)
    })
  })
}

const checkNumbers = (property) => {
  function checkNum(value) {  
    return typeof(value) === "number" && !isNaN(value)
  }
  return property.every(checkNum)
}

module.exports.getCircle = async (radius) => {
  var prop = [radius]
  if(!checkNumbers(prop)){
    var radius = await input('[ circle radius ] >> ')
  }
  
  prop = [radius]
  if(!checkNumbers(prop)){
    throw new Error('Input Error!')
  }

  var circle = radius*radius*PI;
  console.log('result circle => ', circle)
  polygonCalls.push('circle')
  return true;
}
  
module.exports.getSquare = async (height, width) => {
  var props = [height, width]
  if(!checkNumbers(props)){
    height = await input('[ square height ] >> ')
    width = await input('[ square width ] >> ')
  }

  props = [height, width]
  if(!checkNumbers(props)){
    throw new Error('Type Error!')
  }
  var square = height*width;
  console.log('result square => ', square)
  polygonCalls.push('square')
  return true;
}
  
module.exports.getTrapezoid = async (height, underWidth, upperWidth) => {
  var props = [height, underWidth, upperWidth]
  if(!checkNumbers(props)){
    var height = await input('[ trapezoid height ] >> ')
    var underWidth = await input('[ trapezoid underWidth ] >> ')
    var upperWidth = await input('[ trapezoid upperWidth ] >> ')
  }

  props = [height, underWidth, upperWidth]
  if(!checkNumbers(props)){
    throw new Error('Type Error!')
  }
  const trapezoid = height*(underWidth + upperWidth)/2
  console.log('result trapezoid => ', trapezoid)
  polygonCalls.push('trapezoid')
  return true
}

module.exports.getCylinder = async (radius, height) => {
  var props = [radius, height]
  if(!checkNumbers(props)){
    var radius = await input('[ cylinder radius ] >> ')
    var height = await input('[ cylinder height ] >> ')
  }

  props = [radius, height]
  if(!checkNumbers(props)){
    throw new Error('Type Error!')
  }

  var cylinder = radius*radius*height*PI
  console.log('result cylinder => ', cylinder)
  polygonCalls.push('cylinder')
  return true
}

module.exports.getArea = async (type, a, b, c) => {
  var that = this
  
  function recurCircle(a, b) {
    if(a > b){
      return
    }
    that.getCircle(a)
    recurCircle(a+1, b)
  }

  switch (type) {
    case 'circle' : 
      if (checkNumbers([b])) {
        recurCircle(a, b)
      } else {
        await this.getCircle(a)
      }
      break;
    case 'square' : 
      await this.getSquare(a, b)
      break;
    case 'trapezoid' : 
      await this.getTrapezoid(a, b, c)
      break;
    case 'cylinder' : 
      await this.getCylinder(a, b)
      break;
    default : 
      throw new Error('TYPE ERROR!!!')
  }
}

module.exports.printExecutionSequence = () => {
  var result = '계산 수행 순서 : '
  polygonCalls.forEach(element => result = result.concat(element + ', '))
  console.log(result.substr(0, result.length-2))
}

module.exports.shutdownRl = async () => {
  await rl.close()
  return true
}
