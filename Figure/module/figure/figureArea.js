exports.circleArea = (radius) => {
  isNum(radius);
  return parseInt(radius * radius * Math.PI);
}    

exports.square = (length, width) => {
  isNum(length, width);
  return parseInt(length * width);
}

exports.trapezoid = (Bbase, Tbase, height) => {
  isNum(Bbase, Tbase, height);
  return parseInt((((Bbase + Tbase) * (height)) / 2));
} 


exports.cylinder = (radius, height) => {
  isNum(radius, height);
  return parseInt(((2 * Math.PI) + (2 * Math.PI * radius) + (height)));
}

isNum = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
      sum += args[i];
  }
  try {
    if(isNaN(sum)) {
      throw "Invalid Input!! Start Again!!\n";
    }
  }
  catch(err) {
    console.log(err);
  }
}

// when using arguments in arrow function, we do use ...args instead of arguments.
// function isNum() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//       sum += arguments[i];
//   }
//   try {
//     if(isNaN(sum)) {
//       throw "Invalid Input!! Start Again!!\n";
//     }
//   }
//   catch(err) {
//     console.log(err);
//   }
// }