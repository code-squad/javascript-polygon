// calculateCircle(10) 인경우 정상적인 결과를 출력.

// calculateCircle("10") 인경우
// > "숫자형타입만 계산이 가능합니다."

// calculateCircle() 인경우
// > "최소 한가지 값이 필요합니다"

// calculateCircle(-1) 인경우
// > "반지름은 0보다 커야 합니다"

function checkArgTypeofNumber(arg, predictArgNumber) {
  for (var i = 0; i < predictArgNumber; i += 1) {
    if (typeof arg[i] !== "number") {
      console.log("숫자형 타입만 계산이 가능합니다!");
      return true;
    }
  }

  return false;
}

function circle(radius) {
  if (arguments.length !== 1) {
    console.log("1개의 인자가 필요합니다.");
    return null;
  }

  if (checkArgTypeofNumber(arguments, 1)) {
    return null;
  }

  if (radius <= 0) {
    console.log("반지름은 0보다 커야 합니다.");
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

  if (checkArgTypeofNumber(arguments, 2)) {
    return null;
  }

  if (base <= 0) {
    console.log("밑변은 0보다 커야 합니다.");
    return null;
  }

  if (height <= 0) {
    console.log("높이는 0보다 커야 합니다.");
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

  if (checkArgTypeofNumber(arguments, 3)) {
    console.log("숫자형 타입만 계산이 가능합니다.");
    return null;
  }

  if (base <= 0) {
    console.log("밑변은 0보다 커야 합니다.");
    return null;
  }

  if (upperSide <= 0) {
    console.log("윗변은 0보다 커야 합니다.");
    return null;
  }

  if (height <= 0) {
    console.log("높이는 0보다 커야 합니다.");
    return null;
  }

  var result = base * upperSide * height / 2;

  return result;
}
