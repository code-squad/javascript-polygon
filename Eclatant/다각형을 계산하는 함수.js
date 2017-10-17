function getCircle(radius) {
  if (arguments.length !== 1) {
    console.log("1개의 인자가 필요합니다.");
    return null;
  }

  var result = Math.pow(radius, 2) * Math.PI;

  return result;
}

function getRectangle(base, height) {
  if (arguments.length !== 2) {
    console.log("2개의 인자가 필요합니다.");

    return null;
  }

  var result = base * height;

  return result;
}

function getTrapezoid(base, upperSide, height) {
  if (arguments.length !== 3) {
    console.log("3개의 인자가 필요합니다.");

    return null;
  }

  var result = base * upperSide * height / 2;

  return result;
}
