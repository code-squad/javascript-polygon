// getArea('circle', 10);
// > 원의 넓이 값출력

// getArea('rect', 10,15);
// > 사각형의 넓이값출력

// getArea('trapezoid', 10,15,12);
// > 사다리꼴의 넓이값출력

// getArea('circle', 1, 100);
// > 반지름이 1부터 100까지 1씩 증가하면서, 100개의 원의 넓이의 결과값을 출력.

function checkArgTypeofNumber(arg, predictArgNumber) {
  for (var i = 0; i < predictArgNumber; i += 1) {
    if (typeof arg[i] !== "number") {
      console.log("숫자형 타입만 계산이 가능합니다!");
      return true;
    }
  }

  return false;
}

function getCircle(numArr) {
  if (numArr.length !== 1) {
    console.log("1개의 인자가 필요합니다.");
    return false;
  }

  if (checkArgTypeofNumber(numArr, 1)) {
    return false;
  }

  if (numArr[0] <= 0) {
    console.log("반지름은 0보다 커야 합니다.");
    return false;
  }

  var circleArea = Math.pow(numArr[0], 2) * Math.PI;

  return circleArea;
}

function getRect(numArr) {
  if (numArr.length !== 2) {
    console.log("2개의 인자가 필요합니다.");
    return false;
  }

  if (checkArgTypeofNumber(numArr, 2)) {
    return false;
  }

  if (numArr[0] <= 0) {
    console.log("밑변은 0보다 커야 합니다.");
    return false;
  }

  if (numArr[1] <= 0) {
    console.log("높이는 0보다 커야 합니다.");
    return false;
  }

  var rectArea = numArr[0] * numArr[1];

  return rectArea;
}

function getTrapezoid(numArr) {
  if (numArr.length !== 3) {
    console.log("3개의 인자가 필요합니다.");
    return false;
  }

  if (checkArgTypeofNumber(numArr, 3)) {
    console.log("숫자형 타입만 계산이 가능합니다.");
    return false;
  }

  if (numArr[0] <= 0) {
    console.log("밑변은 0보다 커야 합니다.");
    return false;
  }

  if (numArr[1] <= 0) {
    console.log("윗변은 0보다 커야 합니다.");
    return false;
  }

  if (numArr[2] <= 0) {
    console.log("높이는 0보다 커야 합니다.");
    return false;
  }

  var trapezoidArea = numArr[0] * numArr[1] * numArr[2] / 2;

  return trapezoidArea;
}

// Array.prototype 사용하기 : http://www.bsidesoft.com/?p=323
// arguments는 완전한 배열이 아니므로 slice를 하려면 아래처럼 코드를 써야 한다
function getArea(calculateCase) {
  var arg = Array.prototype.slice.call(arguments, 1);

  switch (calculateCase) {
    case "circle":
      console.log(getCircle(arg));
      break;
    case "rect":
      console.log(getRect(arg));
      break;
    case "trapezoid":
      console.log(getTrapezoid(arg));
      break;
  }
}
