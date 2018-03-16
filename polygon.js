var errorComment = {
  notNumber: "숫자형 타입만 계산이 가능합니다.",
  nullValue: "최소 한가지 값이 필요합니다.",
  notTwoValue: "2개의 값이 필요합니다.",
  notThreeValue: "3개의 인자가 필요합니다!",
  minusValueCircle: "반지름은 0보다 커야 합니다.",
  minusValue: "0 보다 커야 합니다."
};

var calculateCount = 0; // calculateCount 변수
var resultCalculateCount = []; // 계산한 수값 저장

// 원의 넓이
function getCircleArea(radius, otherRadius) {
  switch (arguments.length) {
    case 1:
      if (radius <= 0) {
        return errorComment.minusValueCircle;
      } else if (typeof radius === "string") {
        return errorComment.notNumber;
      } else if (!radius) {
        return errorComment.nullValue;
      } else {
        let circleResult = radius * radius * Math.PI;
        calculateCount++;
        resultCalculateCount.push("circle");
        return ("계산이 " + calculateCount + "번 일어났습니다. \n" + "원의 넓이는 " + circleResult + " 입니다.");
      }
      break;

    case 2:
      let resultArray = [];
      if (radius <= 0 || otherRadius <= 0) {
        return errorComment.minusValueCircle;
      } else if (typeof radius === "string" || typeof otherRadius === "string") {
        return errorComment.notNumber;
      } else if (!radius) {
        return errorComment.nullValue;
      } else {
        for (let i = radius; i <= otherRadius; i++) {
          let circleResult = radius * i * Math.PI;
          calculateCount++;
          resultCalculateCount.push("circle");
          resultArray.push(circleResult);
        }
        return ("범위 계산이 " + calculateCount + "번 일어났습니다. \n" + "원의 넓이는 " + resultArray.join("\n") + " 입니다.");
      }
      break;
  }
}

// 사각형의 넓이
function getSquareArea(bottomSide, height) {
  if (conditionConfirm(bottomSide, height) === 'emptyValue') {
    return errorComment.notTwovalue;
  } else if (conditionConfirm(bottomSide, height) === 'minusValue') {
    return errorComment.minusValue;
  } else if (conditionConfirm(bottomSide, height) === 'notNumber') {
    return errorComment.notNumber;
  } else { // height 가 0이라면 false인데 괜찮나요?
    let squareResult = bottomSide * height;
    calculateCount++;
    resultCalculateCount.push("rect");
    return ("계산이 " + calculateCount + "번 일어났습니다. \n" + "사각형의 넓이는 " + squareResult + " 입니다.");
  }
}

// 사다리꼴의 넓이
function getTrapezoidArea(topSide, bottomSide, height) {
  if (conditionConfirm(topSide, bottomSide, height) === 'emptyValue') { // 이 함수는 왜 계속 여러번 호출되죠? conditionConfirm(bottomSide, height)
    return errorComment.notThreeValue;
  } else if (conditionConfirm(topSide, bottomSide, height) === 'minusValue') {
    return errorComment.minusValue;
  } else if (conditionConfirm(topSide, bottomSide, height) === 'notNumber') {
    return errorComment.notNumber;
  } else {
    let resultTrapzoid = (topSide + bottomSide) * height / 2;
    calculateCount++;
    resultCalculateCount.push("trapezoid");
    return ("계산이 " + calculateCount + "번 일어났습니다. \n" + "사다리꼴의 넓이는 " + resultTrapzoid + " 입니다.");
  }
}

// 여러함수 호출 함수 => switch 문으로 한번 수정해보세요. if문이 더 적절한지 비교하면서 느껴보시고요.
function getArea(wantGetArea, firstValue, secondValue, thirdValue) {
  if (wantGetArea === "rect") {
    return getSquareArea(firstValue, secondValue);
  } else if (wantGetArea === "trapezoid") {
    return getTrapezoidArea(firstValue, secondValue, thirdValue);
  } else if (wantGetArea === "circle" && (firstValue, secondValue)) {
    return getCircleArea(firstValue, secondValue);
  } else if (wantGetArea === "circle") {
    return getCircleArea(firstValue);
  }
}

// 계산 수행 순서 함수
function getReport() {
  return "계산 수행 순서: " + resultCalculateCount.join();
}

// 조건 확인 함수
function conditionConfirm(topSide, bottomSide, height) {
  if ((typeof topSide === "string" || typeof bottomSide === "string" || typeof height === "string") && arguments.length === 3) {
    return 'notNumber';
  } else if ((typeof topSide !== "number" || typeof bottomSide !== "number" || typeof height !== "number") && arguments.length === 3) {
    return 'emptyValue';
  } else if ((topSide <= 0 || bottomSide <= 0 || height <= 0) && arguments.length === 3) {
    return 'minusValue';
  }
}

// refactoring 조건 확인 함수
// checkType(Array.from(arguments), "string")
// checkType(Array.from(arguments), "number")



// console.log(getArea('circle') + "\n");
// console.log(getArea('circle', 1, 10) + "\n");
// console.log(getArea('circle', 2) + "\n");
console.log(getArea('rect', 3) + "\n");
// console.log(getReport());