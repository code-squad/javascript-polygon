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
                    calculateCount.push('circle');
                    return '계산이 ' + count + "번 일어났습니다. \n" +  "원의 넓이는 " + circleResult + " 입니다.";
                }
            }
            break;
    }
}

// 사각형의 넓이
function getSquareArea (bottomSide, height) {
    if(arguments[0] <= 0 || arguments[1] <= 0 && typeof arguments === 'number'){
        return errorComment.minusValue;
    } else if((typeof arguments[0] !== 'number' || typeof arguments[1] !== 'number') && arguments.length === 2){
        return errorComment.notNumber;
    } else if (arguments.length !== 2){
        return errorComment.notTwoValue;
    } else if(bottomside !== null && height ){
        let squareResult = bottomSide * height;
        return "사각형의 넓이는 " + squareResult + " 입니다.";
    }
}

// 사다리꼴의 넓이
function getTrapezoidArea (topSide, bottomSide, height) {
    if((arguments[0] <= 0 || arguments[1] <= 0 || arguments[2] <=0) && typeof arguments === 'number'){
        return errorComment.minusValue;
    } else if((typeof arguments[0] !== "number" || typeof arguments[1] !== "number" || typeof arguments[2] !== "number") && arguments.length === 3 ){
        return errorComment.notNumber;
    } else if (arguments.length !== 3){
        return errorComment.notThreeValue;
    } else {
        let resultTrapzoid = (topSide + bottomSide) * height / 2;
        return "사다리꼴의 넓이는 " + resultTrapzoid + " 입니다.";
    }
}

//getArea('circle', 10);
// >  원의 넓이 값출력

//getArea('rect', 10,15);
// >  사각형의 넓이값출력

//getArea('trapezoid', 10,15,12);
// >  사다리꼴의 넓이값출력

//getArea('circle', 1, 100);
// > 반지름이 1부터 100까지 1씩 증가하면서, 100개의 원의 넓이의 결과값을 출력.

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

// getArea('circle', 10);
// console.log(getArea('rect', 10, 15));
// console.log(getArea("trapezoid", 10, 15, 12));
// console.log(getArea('circle', 1, 100));

console.log(getCircleArea(5));

console.log(getCircleArea(5));
