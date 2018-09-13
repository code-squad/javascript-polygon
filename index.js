// printExecutionSequence 함수 만들기
let logFunctions = [];
let countFunction = 0;
function printExecutionSequence() {
    console.log('계산 실행순서 : ' + logFunctions.join());
    console.log('계산 실행 횟수 : ' + countFunction);
}
function pushLog(shape) {
    logFunctions.push(shape);
    countFunction++;
}
// 모든에러체크 동작 함수
function errorCheck(...arguments) {
    if (isUndefined(...arguments)) {
        console.log('값을 입력하세요.')
        return true;
    } else if (isPositivenumber(...arguments)) {
        console.log('0보다 큰수만 입력하세요.')
        return true;
    } else if (isNumber(...arguments)) {
        console.log('숫자만 입력해주세요.')
        return true;
    }
}
// 숫자 확인 함수
function isNumber() {
    let len = arguments.length;
    for (let i = 0; i < len; i++)
        if (typeof arguments[i] !== 'number') {
            return true;
        }
    return false;
}
// 양수 확인 함수
function isPositivenumber() {
    let len = arguments.length;
    for (let i = 0; i < len; i++) {
        if (arguments[i] <= 0) {
            return true;
        }
    }
    return false;
}
// 인자값이 있는지 확인하는 함수
function isUndefined() {
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'undefined') {
            return true;
        }
        return false;
    }
}
// 1. 반지름을 입력받아 원의 넓이 계산
function circleSizecalc(radius1) {
    if (errorCheck(radius1)) {
        return;
    } else {
        let result = Math.PI * Math.pow(radius1, 2);
        console.log('원의 넓이는' + result + '입니다');
        pushLog('circle')
    }
}
// 1-1. 반지름을 입력받아 radius2값 만큼 계산
function circlesSizecalc(radius1, radius2) {
    if (errorCheck(radius1, radius2)) {
        return;
    } else {
        for (i = radius1; i <= radius2; i++) {
            let result = Math.PI * Math.pow(i, 2);
            console.log('반지름' + i + '인 원의 넓이는' + result + '입니다');
            pushLog('circle');
        }
    }
}
// 2. 사각형의 넓이 계산
function rectCalc(base, height) {
    if (errorCheck(base, height)) {
        return;
    } else {
        let result = base * height;
        console.log('사각형의 넓이는' + result + '입니다');
        pushLog('rect');
    }
}
// 3.사다리꼴의 넓이
function trapezoidSizecalc(base1, base2, height) {
    if (errorCheck(base1, base2, height)) {
        return;
    } else {
        let result = (base1 + base2) / 2 * height;
        console.log('사다리꼴의 넓이는' + result + '입니다');
        pushLog('trapezoid');
    }
}
// 4. 원기둥의 겉넓이 계산
function CylinderSizecalc(radius, height) {
    if (errorCheck(radius, height)) {
        return;
    } else {
        let result = 2 * Math.PI * radius * (radius + height)
        console.log('원기둥의 겉넓이는 ' + result + '입니다');
        pushLog('cylinder');
    }
}
// getArea 함수를 사용하면 모든도형의 넓이값을 얻는다.
function getArea(shape, para1, para2, para3) {
    switch (shape) {
        case 'circle': circleSizecalc(para1)
            break;
        case 'circleAll': circlesSizecalc(para1, para2)
            break;
        case 'rect': rectCalc(para1, para2)
            break;
        case 'trapezoid': trapezoidSizecalc(para1, para2, para3)
            break;
        case 'Cylinder': CylinderSizecalc(para1, para2)
            break;
    }
}

getArea('circle')
getArea('circle', 5)

getArea('circleAll', 5, 'a');
getArea('circleAll', 5, 8)

getArea('rect', 5, -10);
getArea('rect', 5, 10);

getArea('trapezoid', 5, 5);
getArea('tripezoid', 5, 5, 10);

getArea('Cylinder', 5, 0);
getArea('Cylinder', 5, 10);
printExecutionSequence();