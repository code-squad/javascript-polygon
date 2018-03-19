var errorComment = {
  notNumber: "숫자형 타입만 계산이 가능합니다.",
  nullValue: "최소 한가지 값이 필요합니다.",
  notTwoValue: "2개의 값이 필요합니다.",
  notThreeValue: "3개의 인자가 필요합니다!",
  minusValueCircle: "반지름은 0보다 커야 합니다.",
  minusValue: "0 보다 커야 합니다."
};

var calculateCount = 0; // calculateCount 변수
var printCalculate = []; // 계산한 수값 저장

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
      } else if(radius){
        let circleResult = radius * radius * Math.PI;
        calculateCount++;
        printCalculate.push("circle");
        return ("계산이 " + calculateCount + "번 일어났습니다. \n" + "원의 넓이는 " + circleResult + " 입니다.");
      }
      break;

    case 2:
      let resultArray = [];
      if (radius <= 0 || otherRadius <= 0) {
        return errorComment.minusValueCircle;
      } else if (typeof radius === "stirng" || typeof otherRadius === "string") {
        return errorComment.notNumber;
      } else if (!radius || !otherRadius) {
        return errorComment.nullValue;
      } else {
        for (let i = radius; i <= otherRadius; i++) {
          let circleResult = i * i * Math.PI;
          calculateCount++;
          printCalculate.push("circle");
          resultArray.push(circleResult);
        }
        return ("범위 계산이 " + calculateCount + "번 일어났습니다. \n" + "원의 넓이는 " + resultArray.join("\n") + " 입니다.");
      }
      break;
  }
}

// 사각형의 넓이
function getSquareArea(bottomSide, height) {
  let filteringType = checkType(bottomSide, height);
  if (filteringType === "minusType") {
    return errorComment.minusValue;
  } else if (!bottomSide || !height) {
    return errorComment.notTwoValue;
  } else if (filteringType === "stringType") {
    return errorComment.notNumber;
  } else {
    let squareResult = bottomSide * height;
    calculateCount++;
    printCalculate.push("rect");
    return ("계산이 " + calculateCount + "번 일어났습니다. \n" + "사각형의 넓이는 " + squareResult + " 입니다.");
  }
}

// 사다리꼴의 넓이
function getTrapezoidArea(topSide, bottomSide, height) {
  let filteringType = checkType(topSide, bottomSide, height);

  if (filteringType === "minusType") {
    return errorComment.minusValue;
  } else if (!topSide || !bottomSide || !height) { 
    return errorComment.notThreeValue;
  } else if (filteringType === "stringType") {
    return errorComment.notNumber;
  } else {
    let resultTrapzoid = (topSide + bottomSide) * height / 2;
    calculateCount++;
    printCalculate.push("trapezoid");
    return ("계산이 " + calculateCount + "번 일어났습니다. \n" + "사다리꼴의 넓이는 " + resultTrapzoid + " 입니다.");
  }
}

// 여러함수 호출 함수
function getArea(wantGetArea, firstValue, secondValue, thirdValue) {
  switch (wantGetArea) {
    case "rect":
      return getSquareArea(firstValue, secondValue);
    case "trapezoid":
      return getTrapezoidArea(firstValue, secondValue, thirdValue);
    case "circle":
      let notUndefined = (secondValue === undefined) ? firstValue : secondValue;
      return getCircleArea(firstValue, notUndefined);
  }
}

// 계산 수행 순서 함수
function getReport() {
  return "계산 수행 순서: " + printCalculate.join();
}

// refactoring 조건 확인 함수
var checkType = function(topSide, bottomSide, height) {
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === "string") {
      return "stringType";
    } else if(arguments[i] <= 0){
      return "minusType";
    }
  }
};

// console.log(getArea('circle') + "\n");
// console.log(getArea('circle', 1, 10) + "\n");
// console.log(getArea('circle', 1) + "\n");

// // console.log(getArea('rect', -1, 2) + "\n");

// console.log(getArea('rect', 2, 2) + "\n");
// // console.log(getArea('rect', 2) + "\n");

// console.log(getArea('trapezoid', 1, 2, 3));
// console.log(getReport());
