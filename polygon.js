const {PI} = Math;


const checkNumber = (value) => {
  return (typeof(value) === "number" && !isNaN(value)) ? true : false;
}
  
module.exports.circle = (r) => {
  if(!checkNumber(r)){
    return "Input error"
  }
  
  return r*r*PI;
}
  
module.exports.square = (height, width) => {
  if(!checkNumber(height) || (!checkNumber(width))){
    return "Type error"
  }

  return height*width;
},
  
module.exports.trapezoid = (height, underWidth, upperWidth) => {
if(!checkNumber(height) || !checkNumber(underWidth) || !checkNumber(upperWidth)){
    return "Type error"
  }
  return height*(underWidth + upperWidth)/2;
},

module.exports.cylinder = (r, height) => {
  if(!checkNumber(r) || !checkNumber(height)){
    return "Type error"
  }

  return r*r*height*PI;
}


