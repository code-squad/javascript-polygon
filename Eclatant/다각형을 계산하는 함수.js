function getCircle(radius) {
  var circleArea = Math.pow(radius, 2) * Math.PI;

  if (arguments.length !== 1) {
    console.log("1개의 인자가 필요합니다.");
    return;
  }

  return circleArea;
}

function getRectangle(base, height) {
  var reacArea = base * height;

  if (arguments.length !== 2) {
    console.log("2개의 인자가 필요합니다.");
    return;
  }

  return rectArea;
}

function getTrapezoid(base, upperSide, height) {
  var trapezoidArea = base * upperSide * height / 2;

  if (arguments.length !== 3) {
    console.log("3개의 인자가 필요합니다.");
    return;
  }

  return trapezoidArea;
}
