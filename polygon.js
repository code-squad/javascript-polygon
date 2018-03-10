var errorComment = {
    notNumber : "숫자형 타입만 계산이 가능합니다.",
    nullValue: "최소 한가지 값이 필요합니다.",
    notTwoValue: "2개의 값이 필요합니다.",
    notThreeValue: "3개의 인자가 필요합니다!",
    minusValueCircle: "반지름은 0보다 커야 합니다.",
    minusValue: "0 보다 커야 합니다."
};

var count = 0; // count 변수
var calculateCount = []; // 계산한 수값 저장

// 원의 넓이
function getCircleArea (radius, otherRadius) {
    switch (arguments.length) {
        case 1:
            if (radius <= 0) {
                return errorComment.minusValueCircle;
            } else if (typeof radius !== "number") {
                return errorComment.notNumber;
            } else if (radius === null || radius === undefined || radius === " ") {
                return errorComment.nullValue;
            } else {
                let circleResult = radius * radius * Math.PI;
                count++;
                calculateCount.push('circle');
                return '계산이 ' + count + "번 일어났습니다. \n" +  "원의 넓이는 " + circleResult + " 입니다.";
            }
            break;

        case 2:
            let resultArray = [];
            if (radius <= 0 || otherRadius <= 0) {
              return errorComment.minusValueCircle;
            } else if (typeof radius !== "number" || typeof otherRadius !== "number") {
              return errorComment.notNumber;
            } else if (radius === null || radius === undefined || radius === " ") {
              return errorComment.nullValue;
            } else {
                for (let i = radius; i <= otherRadius; i++) {
                    let circleResult = radius * i * Math.PI;
                    count++;
                    calculateCount.push("circle");
                    resultArray.push(circleResult);
                }
                return "범위 계산이 " + count + "번 일어났습니다. \n" + "원의 넓이는 " + resultArray.join("\n") + " 입니다.";
            }
            break;
    }
}

// 사각형의 넓이
function getSquareArea (bottomSide, height) {
    if(bottomSide <= 0 || height <= 0 && typeof arguments === 'number'){
        return errorComment.minusValue;
    } else if((typeof bottomSide !== 'number' || typeof height !== 'number') && arguments.length === 2){
        return errorComment.notNumber;
    } else if (arguments.length !== 2){
        return errorComment.notTwoValue;
    } else if(bottomSide !== null && height ){
        let squareResult = bottomSide * height;
        count++;
        calculateCount.push('rect');
        return '계산이 ' + count + "번 일어났습니다. \n" + "사각형의 넓이는 " + squareResult + " 입니다.";
    }
}

// 사다리꼴의 넓이
function getTrapezoidArea (topSide, bottomSide, height) {
    if ((topSide <= 0 || bottomSide <= 0 || height <= 0) && typeof arguments === "number") {
      return errorComment.minusValue;
    } else if ((typeof topSide !== "number" || typeof bottomSide !== "number" || typeof height !== "number") && arguments.length === 3) {
      return errorComment.notNumber;
    } else if (arguments.length !== 3) {
      return errorComment.notThreeValue;
    } else {
      let resultTrapzoid = (topSide + bottomSide) * height / 2;
      count++;
      calculateCount.push("trapezoid");
      return "계산이 " + count + "번 일어났습니다. \n" + "사다리꼴의 넓이는 " + resultTrapzoid + " 입니다.";
    }
}

// 여러함수 호출 함수
function getArea(wantGetArea, firstValue, secondValue, thirdValue) {
    if(wantGetArea === 'rect'){
        return getSquareArea(firstValue, secondValue);
    } else if(wantGetArea === 'trapezoid'){
        return getTrapezoidArea(firstValue, secondValue, thirdValue);
    } else if(wantGetArea === 'circle' && (firstValue, secondValue)) {
        return getCircleArea(firstValue, secondValue);
    } else if(wantGetArea === 'circle'){
        return getCircleArea(firstValue);
    }
}

// 계산 수행 순서 함수
function getReport() {
    return "계산 수행 순서: " + calculateCount.join();
}

console.log(getArea('circle', 10) + "\n");
console.log(getArea('circle', 1, 10) + "\n");
console.log(getArea('circle', 2) + "\n");
console.log(getArea('rect', 2, 3) + "\n");
console.log(getReport());
