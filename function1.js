const { PI } = Math;

function checkType(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      throw "please input Number data type";
    }
  }
}

function checkArgumentCount(arr, correctCount) {
  if (arr.length !== correctCount) {
    throw "please input correct number of arguments";
  }
}

function circleArea(r) {
  checkArgumentCount(arguments, 1);
  checkType(arguments);

  return PI * Math.pow(r, 2);
}

function squareArea(width, height) {
  checkArgumentCount(arguments, 2);
  checkType(arguments);

  return width * height;
}

function trapezoidArea(x1, x2, h) {
  checkArgumentCount(arguments, 3);
  checkType(arguments);

  return ((x1 + x2) * h) / 2;
}

function cylinderArea(r, h) {
  checkArgumentCount(arguments, 2);
  checkType(arguments);

  return 2 * PI * Math.pow(r, 2) + 2 * PI * r * h;
}

console.log(circleArea(3));
console.log(squareArea(2, 7));
console.log(trapezoidArea(6, 3, 3));
console.log(cylinderArea(4, 6));
