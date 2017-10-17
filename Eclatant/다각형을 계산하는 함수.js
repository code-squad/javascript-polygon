function getCircle(radius) {
  if (arguments.length !== 1) {
    console.log("1개의 인자가 필요합니다.");
    return false;
  }

  var circleArea = Math.pow(radius, 2) * Math.PI;

  return circleArea;
}

function getRectangle(base, height) {
  if (arguments.length !== 2) {
    console.log("2개의 인자가 필요합니다.");
    return false;
  }

  var reacArea = base * height;

  return rectArea;
}

function getTrapezoid(base, upperSide, height) {
  if (arguments.length !== 3) {
    console.log("3개의 인자가 필요합니다.");
    return false;
  }

  var trapezoidArea = base * upperSide * height / 2;

  return trapezoidArea;
}
