var calledFunctionCount = 0;
var calledFunctionSequence = [];

// 원 넓이 구하는 함수
function calCircleArea(radius) {

    let lastData = arguments[1];

    calledFunctionCount++;
    calledFunctionSequence.push('Circle');
    if (arguments.length === 0) {
        return "최소 한가지 값이 필요합니다";
    }
    else if (arguments.length === 2 && arguments[1] !== undefined) {
        for (let i = arguments[0]; i < arguments[1]; i++) {
            console.log(i + "번째 원의 넓이 : " + Math.PI * i * i);
            calledFunctionCount++;
            console.log("계산이 " + calledFunctionCount + "번 일어났습니다.");
        }
        return lastData + "번째 원의 넓이 : " + Math.PI * lastData * lastData;
    }

    if (arguments[0] < 0)
        return "반지름은 0보다 커야 합니다";

    if (isAllNumber(radius))
        return Math.PI * radius * radius + "\n" + "계산이 " + calledFunctionCount + "번 일어났습니다.";
    else
        return "숫자형 타입만 계산이 가능합니다";
}

// 사각형 넓이 구하는 함수
function calRectangleArea(width, height) {
    calledFunctionCount++;
    calledFunctionSequence.push('Rect');
    if (arguments.length <= 1)
        return "최소 한가지 값이 필요합니다";
    else if (arguments.length >= 3)
        return "두개의 값만 지정하시기 바랍니다";

    if (arguments[0] <= 0 || arguments[1] <= 0)
        return "가로 및 세로 길이는 0보다 커야합니다";

    if (isAllNumber(width, height)) {
        return width * height + "\n" + "계산이 " + calledFunctionCount + "번 일어났습니다.";
    } else {
        return "숫자형 타입만 계산이 가능합니다";
    }
}

function isAllNumber() {
    var correctNum = 0;

    for (var i = 0; i < arguments.length; i++) {
        if (typeof (arguments[i]) === "number") {
            correctNum++;
        }
    }

    // ERROR
    // for in 으로 받으면 모두 string 으로 type이 결정되어버림
    // 새로 리턴을 하기 때문에 문제가 생기는 것 같음
    // for (var value in arguments) {
    //     var type = typeof (value);
    //     console.log(type);
    //     if (type === "number") { correctNum++; }
    // }

    var result = ((arguments.length) === correctNum) ? true : false;

    return result;
}

// 사다리꼴 넓이 구하는 함수
function calTrapezoidArea(lowerbase, upperbase, height) {
    calledFunctionCount++;
    calledFunctionSequence.push('Trapezoid');
    if (arguments.length <= 2)
        return "최소 세가지 값이 필요합니다";
    else if (arguments.length >= 4)
        return "세개의 값만 지정하시기 바랍니다";

    if (arguments[0] <= 0 || arguments[1] <= 0 || arguments[2] <= 0)
        return "밑변 및 윗변, 높이의 길이는 0보다 커야합니다";

    if (isAllNumber(lowerbase, upperbase, height))
        return (lowerbase + upperbase) * height + "\n" + "계산이 " + calledFunctionCount + "번 일어났습니다.";
    else
        return "숫자형 타입만 계산이 가능합니다";
}

function getArea(mode, firstData, secondData, thirdData) {
    switch (mode) {
        case "circle":
            console.log(calCircleArea(firstData, secondData));
            break;
        case "rect":
            console.log(calRectangleArea(firstData, secondData));
            break;
        case "trapezoid":
            console.log(calTrapezoidArea(firstData, secondData, thirdData));
            break;
        default:
            break;
    }
}

function getReport() {
    calledFunctionSequence.forEach(value => console.log(value));
}

// // 정상값 테스트
// console.log(calCircleArea(10));
//
// // 예외처리 테스트
// console.log(calCircleArea("10"));
// console.log(calCircleArea());
// console.log(calCircleArea(-1));
//
// console.log("-----------------");
//
// // 정상값 테스트
// console.log(calRectangleArea(10, 15));
//
// // 예외처리 테스트
// console.log(calRectangleArea(10));
// console.log(calRectangleArea(10, 20, 30));
// console.log(calRectangleArea(10, 0));
// console.log(calRectangleArea(0, 10));
// console.log(calRectangleArea("10", 15));
// console.log(calRectangleArea(10, "15"));
//
// console.log("-----------------");
//
// console.log(calTrapezoidArea(10, 5, 12));
// console.log(calTrapezoidArea(10, 5));
// console.log(calTrapezoidArea(10, 20, 30, 40));
// console.log(calTrapezoidArea("10", 10, 10));
// console.log(calTrapezoidArea(10, 0, 10));
//
// console.log("-----------------");
//
// getArea('circle', 10);
// getArea('rect', 10, 15);
// getArea('trapezoid', 10, 5, 12);
// getArea('circle', 1, 100);
//
// console.log("-----------------");
//
// getReport();


// isAllNumber 테스트
console.log(calCircleArea(10));
console.log(calCircleArea("10"));

console.log(calRectangleArea(10, 15));
console.log(calRectangleArea("10", 15));

console.log(calTrapezoidArea(10, 5, 12));
console.log(calTrapezoidArea("10", 10, 10));


