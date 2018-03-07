//공식 사용하기: 넓이 = π x 반지름^2 (넓이=파이 x 반지름 제곱)

let logCallFunc = [];
let countCallFunc = 0;

function calculateCircle(radius) {
    if (!isNumber(radius)) return '숫자형타입만 계산이 가능합니다';
    if (!isPositiveNumber(radius)) return '반지름은 0보다 커야 합니다';
    logCallFunc.push('circle');
    let result = radius * radius * Math.PI;
    countCallFunc++;
    console.log('계산이 ' + countCallFunc + '번 일어났습니다.');
    return result;
}

function calculateRect(width, height) {
    if (!isNumber(width, height)) return '숫자형 타입만 계산이 가능합니다.'
    if (!isPositiveNumber(width, height)) return '밑변과 길이는 0보다 커야 합니다';
    logCallFunc.push('rect');
    let result = width * height;
    countCallFunc++;
    console.log('계산이 ' + countCallFunc + '번 일어났습니다.');
    return result;
}

function calculateTrapezoid(top, bottom, height) {
    if (!isNumber(top, bottom, height)) return '숫자형 타입만 계산이 가능합니다.'
    if (!isPositiveNumber(top, bottom, height)) return '윗변, 아랫변, 높이는 0보다 커야 합니다';
    logCallFunc.push('trape');
    let result = (top + bottom) * height / 2
    countCallFunc++;
    console.log('계산이 ' + countCallFunc + '번 일어났습니다.');
    return result;
}

function isNumber() {
    var len = arguments.length;
    for (let i = 0; i < len; i++) {
        if (typeof arguments[i] !== 'number') return false;
    }
    return true;
}

function isPositiveNumber() {
    var len = arguments.length;
    for (let i = 0; i < len; i++) {
        if (arguments[i] <= 0) return false;
    }
    return true;
}

function getArea() {
    if (arguments.length < 2) return '최소 한 가지 값이 필요합니다'
    switch (arguments[0]) {
        case 'circle':
            return calculateCircle(arguments[1]);;
            break;
        case 'rect':
            if (arguments.length < 3) return '밑변과 길이 둘 다 입력해야 합니다'
            return calculateRect(arguments[1], arguments[2]);
            break;
        case 'trapezoid':
            if (arguments.length < 4) return '3개의 인자가 필요합니다'
            return calculateTrapezoid(arguments[1], arguments[1], arguments[3])
            break;
    }
}

function getReport() {
    console.log(logCallFunc);
}
console.log(getArea('circle', 5));
console.log(getArea('circle', 5));
console.log(getArea('circle', 5));
console.log(getArea('rect', 2, 4));
console.log(getArea('trapezoid', 1, 4, 2));
getReport();