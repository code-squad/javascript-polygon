// getCircle(), getArea() 등 실제 넓이 계산이 일어나는 경우 그 횟수를 출력하자.

// getCircle()
// > 계산이 1번 일어났습니다.

// getCircle()
// > 계산이 2번 일어났습니다.

// getArea('circle',2)
// > 계산이 3번 일어났습니다.

// getArea('rect',2,3)
// > 계산이 4번 일어났습니다.

// getReport() //계산수행순서를 저장했다가 자유롭게 그 내역을 출력해보자. 배열을 사용할 수 있다.
// > 계산수행순서 : circle, circle, circle, rect

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
    return;
  }

  if (checkArgTypeofNumber(numArr, 1)) {
    return;
  }

  if (numArr[0] <= 0) {
    console.log("반지름은 0보다 커야 합니다.");
    return;
  }

  var result = Math.pow(numArr[0], 2) * Math.PI;

  calculateCount.circle += 1;
  calculateCount.commandOrder.push("circle");

  var count = calculateCount.circle;
  console.log("계산이 " + count + "번 일어났습니다.");

  return result;
}

function getRect(numArr) {
  if (numArr.length !== 2) {
    console.log("2개의 인자가 필요합니다.");
    return;
  }

  if (checkArgTypeofNumber(numArr, 2)) {
    return;
  }

  if (numArr[0] <= 0) {
    console.log("밑변은 0보다 커야 합니다.");
    return;
  }

  if (numArr[1] <= 0) {
    console.log("높이는 0보다 커야 합니다.");
    return;
  }

  var result = numArr[0] * numArr[1];

  calculateCount.rect += 1;
  calculateCount.commandOrder.push("rect");

  var count = calculateCount.rect;
  console.log("계산이 " + count + "번 일어났습니다.");

  return result;
}

function getTrapezoid(numArr) {
  if (numArr.length !== 3) {
    console.log("3개의 인자가 필요합니다.");
    return;
  }

  if (checkArgTypeofNumber(numArr, 3)) {
    console.log("숫자형 타입만 계산이 가능합니다.");
    return;
  }

  if (numArr[0] <= 0) {
    console.log("밑변은 0보다 커야 합니다.");
    return;
  }

  if (numArr[1] <= 0) {
    console.log("윗변은 0보다 커야 합니다.");
    return;
  }

  if (numArr[2] <= 0) {
    console.log("높이는 0보다 커야 합니다.");
    return;
  }

  var result = numArr[0] * numArr[1] * numArr[2] / 2;

  calculateCount.trapezoid += 1;
  calculateCount.commandOrder.push("trapezoid");

  var count = calculateCount.trapezoid;
  console.log("계산이 " + count + "번 일어났습니다.");

  return result;
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

var calculateCount = {
  circle: 0,
  rect: 0,
  trapezoid: 0,
  commandOrder: []
};

function getReport() {
  console.log(calculateCount.commandOrder.join(", "));
}
