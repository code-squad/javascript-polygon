// 원 넓이 구하는 함수
var notNumberPattern = /D/;
var re = new RegExp("[a-z0-9]");

function calCircleArea (radius) {
    if (arguments.length === 0)
        return "최소 한가지 값이 필요합니다";

    if (arguments[0] < 0)
        return "반지름은 0보다 커야 합니다";
    
    if (typeof(radius) === "number")
        return Math.PI * radius * radius;
    else
        return "숫자형 타입만 계산이 가능합니다";
}

// 사각형 넓이 구하는 함수
function calQuadRangleArea(width, height) {
    return width * height;
}

// 사다리꼴 넓이 구하는 함수
function calTrapezoidArea(lowerbase, upperbase, height) {
    if (arguments.length <= 2) {
        return "3개의 인자가 필요합니다 !";
    }
    return (lowerbase + upperbase) * height;
}

// 정상값 테스트
console.log(calCircleArea(10));

// 예외처리 테스트
console.log(calCircleArea("10"));
console.log(calCircleArea());
console.log(calCircleArea(-1));

console.log(calQuadRangleArea(10, 15));
console.log(calTrapezoidArea(10, 5, 12));
console.log(calTrapezoidArea(10, 5));