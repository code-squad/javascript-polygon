// 1. 반지름을 입력받아 원의 넓이 계산
function circlesizeCalc(radius) {
    if (arguments.length === 0) {
        console.log('반지름을 입력해주세요')
    } else if (typeof radius !== 'number') {
        console.log('숫자만 입력해주세요')
    } else if (radius <= 0) {
        console.log('반지름은 0보다 커야합니다')
    } else {
        var result = Math.PI * Math.pow(radius, 2);
        console.log('원의넓이는' + result + '입니다');
    }
}
// 2. 사각형의 넓이 계산
function areaSizecalc(base, height) {
    if (arguments.length < 2) {
        console.log('밑변의 길이와 높이를 입력해주세요')
    } else if (typeof base !== 'number' || typeof height !== 'number') {
        console.log('숫자만 입력해주세요')
    } else if (base <= 0 || height <= 0) {
        console.log('밑변과 높이는 0보다 커야합니다')
    } else {
        var result = base * height;
        console.log('사각형의 넓이는' + result + '입니다');
    }
}
// 3.사다리꼴의 넓이
function trapezoidSizecalc(base1, base2, height) {
    if (arguments.length < 3) {
        console.log('밑변,윗변의 길이와 높이를 입력해주세요')
    } else if (typeof base1 !== 'number' || typeof base2 !== 'number' || typeof height !== 'number') {
        console.log('숫자만 입력해주세요')
    } else if (base1 <= 0 || base2 <= 0 || height <= 0) {
        console.log('밑변과 윗변과 높이는 0보다 커야합니다')
    } else {
        var result = (base1 + base2) / 2 * height;
        console.log('사다리꼴의 넓이는' + result + '입니다');
    }
}
// 4. 원기둥의 넓이 계산
function trapezoidSizecalc(radius, height) {
    if (arguments.length < 2) {
        console.log('반지름과 높이를 입력해주세요')
    } else if (typeof radius !== 'number' || typeof height !== 'number') {
        console.log('숫자만 입력해주세요')
    } else if (radius <= 0 || height <= 0) {
        console.log('반지름과 높이는 0보다 커야합니다')
    } else {
        var result = 2 * Circle(radius) + (2 * Math.PI * radius * height);
        console.log('사다리꼴의 넓이는' + result + '입니다');
    }
}
