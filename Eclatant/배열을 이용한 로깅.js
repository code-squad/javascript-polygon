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

function checkNegativeNumber(argArray) {
  for (var i = 0; i < argArray.length; i += 1) {
    if (argArray[i] <= 0) {
      console.log("모든 인수는 양수여야 합니다.");
      return false;
    }
  }

  return true;
}

function checkArgTypeofNumber(argArray) {
  for (var i = 0; i < argArray.length; i += 1) {
    if (typeof argArray[i] !== "number") {
      console.log("숫자형 타입만 계산이 가능합니다!");
      return true;
    }
  }

  return false;
}

function checkArgLength(argArray, correct) {
  if (argArray.length !== correct) {
    console.log(correct + "개의 인자가 필요합니다.");
    return false;
  }

  return true;
}

function getCircle(radius) {
  var circleArea = Math.pow(radius, 2) * Math.PI;
  var argArray = [radius];

  if (
    checkArgLength(argArray, 1) &&
    checkArgTypeofNumber(argArray) &&
    checkNegativeNumber(argArray)
  ) {
    return;
  }

  calculateCount.circle += 1;
  calculateCount.commandOrder.push("circle");

  console.log("원 넓이 계산이 " + calculateCount.circle + "번 일어났습니다.");

  return circleArea;
}

function getRect(base, height) {
  var rectArea = base * height;
  var argArray = [base, height];

  if (
    checkArgLength(argArray, 2) &&
    checkArgTypeofNumber(argArray) &&
    checkNegativeNumber(argArray)
  ) {
    return;
  }

  calculateCount.rect += 1;
  calculateCount.commandOrder.push("rect");

  console.log("사각형 넓이 계산이 " + calculateCount.rect + "번 일어났습니다.");

  return rectArea;
}

function getTrapezoid(base, upperSide, height) {
  var trapezoidArea = base * upperSide * height / 2;
  var argArray = [base, upperSide, height];

  if (
    checkArgLength(argArray, 3) &&
    checkArgTypeofNumber(argArray) &&
    checkNegativeNumber(argArray)
  ) {
    return;
  }

  calculateCount.trapezoid += 1;
  calculateCount.commandOrder.push("trapezoid");

  console.log("사다리꼴 넓이 계산이 " + calculateCount.trapezoid + "번 일어났습니다.");

  return trapezoidArea;
}

function getArea(calculateCase) {
  switch (calculateCase) {
    case "circle":
      console.log(getCircle(arguments[1]));
      break;
    case "rect":
      console.log(getRect(arguments[1], arguments[2]));
      break;
    case "trapezoid":
      console.log(getTrapezoid(arguments[1], arguments[2], arguments[3]));
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

getArea("circle", 10);
getArea("rect", 10, 30);
getArea("trapezoid", 10, 20, 30);
