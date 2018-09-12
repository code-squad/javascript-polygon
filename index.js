// 1. 반지름을 입력받아 원의 넓이 계산
function circlesizeCalc(radius1, radius2) {
    if (arguments.length === 0) {
        console.log('반지름을 입력해주세요')
    } else if (typeof radius1 !== 'number') {
        console.log('숫자만 입력해주세요')
    } else if (radius1 <= 0) {
        console.log('반지름은 0보다 커야합니다')
    } else if (arguments.length === 1) {
        var result = Math.PI * Math.pow(radius1, 2);
        console.log('원의 넓이는' + result + '입니다');
        return result;
    } else {
        for (i = radius1; i <= radius2; i++) {
            var result = Math.PI * Math.pow(i, 2);
            console.log('반지름' + i + '인 원의 넓이는' + result + '입니다')
        }
    }
}
// 2. 사각형의 넓이 계산
function rectCalc(base, height) {
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
// 4. 원기둥의 겉넓이 계산
function CylinderSizecalc(radius, height) {
    if (arguments.length < 2) {
        console.log('반지름과 높이를 입력해주세요')
    } else if (typeof radius !== 'number' || typeof height !== 'number') {
        console.log('숫자만 입력해주세요')
    } else if (radius <= 0 || height <= 0) {
        console.log('반지름과 높이는 0보다 커야합니다')
    } else {
        var result = 2 * circlesizeCalc(radius) + (2 * Math.PI * radius * height);
        console.log('원기둥의 겉넓이는' + result + '입니다');
    }
}

// getArea 함수를 사용하면 모든도형의 넓이값을 얻는다.
function getArea(shape, para1, para2, para3) {
    switch (shape) {
        case 'circle': circlesizeCalc(para1, para2)
            break;
        case 'rect': rectCalc(para1, para2)
            break;
        case 'trapezoid': trapezoidSizecalc(para1, para2, para3)
            break;
        case 'Cylinder': CylinderSizecalc(para1, para2)
            break;
    }
}
getArea('circle', 5)
getArea('circle', 5, 8);
getArea('rect', 5, 10);
getArea('trapezoid', 5, 10, 5);
getArea('Cylinder', 5, 10);