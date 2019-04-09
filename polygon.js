const {PI} = Math;
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let polygonCalls = []

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

const saveFunctionCallName = (funcName) => {
  polygonCalls.push(funcName)
}

module.exports.getCircle = async (radius) => {
  let prop = [radius]
  if(!checkNumbers(prop)){
    radius = await input('[ circle radius ] >> ')
  }
  
  prop = [radius]
  if(!checkNumbers(prop)){
    throw new Error('Input Error!')
  }

  const circle = radius*radius*PI;
  console.log('result circle => ', circle)
  saveFunctionCallName('circle')
  return
}
  
module.exports.getSquare = async (height, width) => {
  let props = [height, width]
  if(!checkNumbers(props)){
    height = await input('[ square height ] >> ')
    width = await input('[ square width ] >> ')
  }

  props = [height, width]
  if(!checkNumbers(props)){
    throw new Error('Type Error!')
  }
  const square = height*width;
  console.log('result square => ', square)
  saveFunctionCallName('square')
  return
}
  
module.exports.getTrapezoid = async (height, underWidth, upperWidth) => {
  let props = [height, underWidth, upperWidth]
  if(!checkNumbers(props)){
    height = await input('[ trapezoid height ] >> ')
    underWidth = await input('[ trapezoid underWidth ] >> ')
    upperWidth = await input('[ trapezoid upperWidth ] >> ')
  }

  props = [height, underWidth, upperWidth]
  if(!checkNumbers(props)){
    throw new Error('Type Error!')
  }
  const trapezoid = height*(underWidth + upperWidth)/2
  console.log('result trapezoid => ', trapezoid)
  saveFunctionCallName('trapezoid')
  return
}

module.exports.getCylinder = async (radius, height) => {
  let props = [radius, height]
  
  if(!checkNumbers(props)){
    radius = await input('[ cylinder radius ] >> ')
    height = await input('[ cylinder height ] >> ')
  }

  props = [radius, height]
  if(!checkNumbers(props)){
    throw new Error('Type Error!')
  }

  let cylinder = radius*radius*height*PI
  console.log('result cylinder => ', cylinder)
  saveFunctionCallName('cylinder')
  return
}

module.exports.getArea = async (type, a, b, c) => {
  let that = this
  
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
  let result = `수행 순서 출력 >> ${polygonCalls.reduce((acc, call) => acc + ', ' + call)}`
  console.log(result)
  return
}

module.exports.shutdownRl = async () => {
  await rl.close()
  return
}
