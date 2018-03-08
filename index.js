// 원 넓이 구하는 함수
function calCircleArea (radius) {
    return Math.PI * radius * radius;
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

console.log(calCircleArea(10));
console.log(calQuadRangleArea(10, 15));
console.log(calTrapezoidArea(10, 5, 12));
console.log(calTrapezoidArea(10, 5));