//공식 사용하기: 넓이 = π x 반지름^2 (넓이=파이 x 반지름 제곱)

let logCallFunc = []; // 함수 호출 로그 배열
let countCallFunc = 1; // 함수 호출 횟수 누적

// 원의 넓이 구하기
function calculateCircle(radius) {
    if (!isNumber(radius)) return '숫자형타입만 계산이 가능합니다';
    if (!isPositiveNumber(radius)) return '반지름은 0보다 커야 합니다';
    logCallFunc.push('circle');
    let result = radius * radius * Math.PI;
    countCallFunc++;
    return Math.round(result);
}

// 사각형의 넓이 구하기
function calculateRect(width, height) {
    if (isUndefined(width, height)) return '밑변과 길이 둘 다 입력해야 합니다'
    if (!isNumber(width, height)) return '숫자형 타입만 계산이 가능합니다.'
    if (!isPositiveNumber(width, height)) return '밑변과 길이는 0보다 커야 합니다';
    logCallFunc.push('rect');
    let result = width * height;
    countCallFunc++;
    return result;
}

// 사다리꼴 넓이 구하기
function calculateTrapezoid(top, bottom, height) {
    if (isUndefined(top, bottom, height)) return '3개의 인자가 필요합니다'
    if (!isNumber(top, bottom, height)) return '숫자형 타입만 계산이 가능합니다.'
    if (!isPositiveNumber(top, bottom, height)) return '윗변, 아랫변, 높이는 0보다 커야 합니다';
    logCallFunc.push('trape');
    let result = (top + bottom) * height / 2
    countCallFunc++;
    return result;
}

// 타입이 숫자인지 체크
function isNumber() {
    var len = arguments.length;
    for (let i = 0; i < len; i++) {
        if (typeof arguments[i] !== 'number') return false;
    }
    return true;
}

// 숫자가 양수인지 체크
function isPositiveNumber() {
    var len = arguments.length;
    for (let i = 0; i < len; i++) {
        if (arguments[i] <= 0) return false;
    }
    return true;
}

// 인자가 undefined인지 체크
function isUndefined() {
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'undefined') return true;
    }
    return false;
}

// 다각형 넓이 구하기
function getArea(polygon, ...args) {
    if (polygon !== 'circle' && polygon !== 'rect' && polygon !== 'trapezoid') return '다각형값을 다시 입력하세요.'
    if (args.length < 1) return '최소 한 가지 값이 필요합니다'
    console.log('계산이 ' + countCallFunc + '번 일어났습니다.');
    switch (polygon) {
        case 'circle':
            return '원의 넓이 : ' + calculateCircle(args[0]);;
            break;
        case 'rect':
            return '사각형의 넓이 : ' + calculateRect(args[0], args[1]);
            break;
        case 'trapezoid':
            return '사다리꼴의 넓이 : ' + calculateTrapezoid(args[0], args[1], args[2])
            break;
    }
}

// 함수 호출 로그
function getReport() {
    console.log();
    console.log('함수 호출 로그 : ' + logCallFunc);
}
console.log(getArea('circle', 5));
console.log(getArea('circle', 3));
console.log(getArea('circle', 2));
console.log(getArea('rect', 2, 4));
console.log(getArea('trapezoid', 1, 4, 2));
getReport();