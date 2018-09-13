var arr = [];

function isNum(length) {
    if (toString.call(length) != '[object Number]') {
        return true
    }
    return false
}

function sizeCircle(radius1, radius2) {
    if (arguments.length === 2) {
        let sum = 0;
        for (let i = radius1; i <= radius2; i++) {
            sum = sum + (i * i * Math.PI)
            arr.push('circle');
        }
        console.log('원 모두의 합은 ' + sum + '입니다.');
        return;
    } else if (arguments.length != 1) {
        return console.log('인자의 개수가 맞지 않습니다.');
    } else if (isNum(radius1)) {
        return console.log('숫자만 계산 가능합니다.');
    }
    const circleArea = radius1 * radius1 * Math.PI
    console.log('반지름이 ' + radius1 + '인 원의넓이는' + circleArea + '입니다.');    
    arr.push('circle');
}

function sizeSquare(lowerSide, height) {
    if (arguments.length != 2) {
        return console.log('인자의 개수가 맞지 않습니다.');
    } else if (isNum(lowerSide) || isNum(height)) {
        return console.log('숫자만 계산 가능합니다.');
    }
    const squareArea = lowerSide * height
    console.log('밑변과 높이가 ' + lowerSide + ', ' + height + '인 사각형의 넓이는' + squareArea + '입니다.');
    arr.push('rect');
}

function sizeTrapezoid(topSide, lowerSide, height) {
    if (arguments.length != 3) {
        return console.log('인자의 개수가 맞지 않습니다.');
    } else if (isNum(topSide) || isNum(lowerSide) || isNum(height)) {
        return console.log('숫자만 계산할 수 있습니다.');
    }
    const trapezoidArea = (topSide + lowerSide) * height / 2
    console.log('윗변과 아랫변과 높이가 ' + topSide + ', ' + lowerSide + ', ' + height + '인 사다리꼴의 넓이는' + trapezoidArea + '입니다.');
    arr.push('trapezoid');
}

function sizeSylinder(radius, height) {
    if (arguments.length != 2) {
        return console.log('인자의 갯수가 맞지 않습니다.');
    } else if (isNum(radius) || isNum(height)) {
        return console.log('숫자만 계산할 수 있습니다.');
    }
    const sylinderArea = 2 * (Math.PI * radius * radius) + (2 * (radius * Math.PI) * height)
    console.log('반지름과 높이가' + radius + ', ' + height + '인 원기둥의 겉넓이는 ' + sylinderArea + '입니다.');
    arr.push('sylinder')
}

function getArea(polygon, num1, num2, num3) {
    if (polygon === 'circle' && arguments.length === 3) {
        sizeCircle(num1, num2)
    } else if (polygon === 'rect') {
        sizeSquare(num1, num2)
    } else if (polygon === 'trapezoid') {
        sizeTrapezoid(num1, num2, num3)
    } else if (polygon === 'Sylinder') {
        sizeSylinder(num1, num2)
    } else if (polygon === 'circle') {
        sizeCircle(num1)
    }
}

function printExecutionSequence() {
    arr.forEach(function(v, i) {
        console.log((i + 1) + '번째 : ' + v)
    })
}