const isNumber = function (a) { [...a].forEach((el) => { if (!Number.isFinite(el)) throw new Error('숫자가 아닙니다.') }) }
const lengthChecker = (funcLength, arg) => { if (funcLength !== arg.length) throw new Error('인자의 수가 다릅니다') }
const pi = Math.PI;

function getCircleArea(r, n) {
    if (arguments.length === 1) {
        lengthChecker(1, arguments);
        isNumber(arguments);
        let result = Math.pow(r, 2) * pi;
        executionLog.push({ 'cirlce': result });
        return result;
    } else if (arguments.length === 2) {
        let result = getCircleAreaSum(r, n);
        executionLog.push({ 'cirlce': result });
        return result;
    }
}
// 원의 넓이 구하기


function getCircleAreaSum(start, end) {
    if (start === end) {
        return getCircleArea(start);
    }
    return getCircleArea(start) + getCircleAreaSum(start + 1, end);
}
// recursive로 1에서 n까지 반지름의 원넓이 합 구하기


function getRectangleArea(a, b) {
    lengthChecker(2, arguments);
    isNumber(arguments);
    let result = a * b;
    executionLog.push({ 'rectangle': result });
    return result;
}
// 사각형의 넓이 구하기



function getTrapezoidArea(top, bottom, height) {
    lengthChecker(3, arguments);
    isNumber(arguments);
    let result = ((top + bottom) / 2) * height;
    executionLog.push({ 'trapezoid': result });
    return result;
}
// 사다리꼴 넓이 구하기



function getCylinderArea(r, h) {
    lengthChecker(2, arguments);
    isNumber(arguments);
    let result = 2 * Math.pow(r, 2) * pi + (2 * pi * r * h);
    executionLog.push({ 'cylinder': result });
    return result;

}
//원기둥 넓이 구하기



function getArea(polygon, ...arg) {
    const polygonGroup = {
        'circle': getCircleArea,
        'rectangle': getRectangleArea,
        'trapezoid': getTrapezoidArea,
        'cylinder': getCylinderArea
    }
    return polygonGroup[polygon](...arg);
}
// 모든 다각형 넓이 함수에 접근하는 함수



let executionLog = [];

function printExecutionSequence() {
    console.log(executionLog);
}
// // 함수가 실행되는 순서로 실행된 함수와 결과값을 기록한 배열 print



console.log(getArea('circle', 1));
console.log(getArea('rectangle', 5, 10));
console.log(getArea('trapezoid', 3, 4, 5));
console.log(getArea('circle', 2));
console.log(getArea('circle', 1, 5));
console.log(getArea('trapezoid', 1, 1, 1));
console.log(getArea('cylinder', 1, 1));
printExecutionSequence();
// test case