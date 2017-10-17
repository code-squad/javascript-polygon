function circle(radius) {
  if (arguments.length !== 1) {
    console.log("1개의 인자가 필요합니다.");
    return null;
  }

  var result = Math.pow(radius, 2) * Math.PI;

  return result;
}

function rectangle(base, height) {
  if (arguments.length !== 2) {
    console.log("2개의 인자가 필요합니다.");

    return null;
  }

  var result = base * height;

  return result;
}

function trapezoid(base, upperSide, height) {
  if (arguments.length !== 3) {
    console.log("3개의 인자가 필요합니다.");

    return null;
  }

  var result = base * upperSide * height / 2;

  return result;
}
