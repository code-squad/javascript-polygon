function isNumber(element){
  return typeof element === 'number';
}

function isNotNaN(element){
  return !isNaN(element);
}

module.exports.checkArgsLen = (type, ...args) => {
  const argsLen = {
    circle: 1,
    rect: 2,
    trapezoid: 3,
    cylinder: 2,
  }
  return argsLen[type] !== undefined && !(argsLen[type] > args.length);
}

module.exports.checkNumber = (...args) => args.every(isNumber) && args.every(isNotNaN);