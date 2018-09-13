function sizeCircle(radius) {
    if (toString.call(radius) != '[object Number]') {
        return console.log('숫자만 계산 가능합니다.');
    }
    const circleArea = radius * radius * Math.PI
    console.log('반지름이 ' + radius + '인 원의넓이는' + circleArea + '입니다.');
}
//test circle
sizeCircle(4)
sizeCircle('문자')
sizeCircle();

function sizeSquare(lowerSide, height) {
    if(lowerSide === undefined || height === undefined) {
        return console.log('인자가 부족합니다.')
    } else if (toString.call(lowerSide) != '[object Number]' || toString.call(height) != '[object Number]') {
        return console.log('숫자만 계산 가능합니다.')
    }
    const squareArea = lowerSide * height
    console.log('밑변과 아랫변이 ' + lowerSide + ', ' + height + '인 사각형의 넓이는' + squareArea + '입니다.')
}

//test square
sizeSquare(4, 3)
sizeSquare(3)
sizeSquare()
sizeSquare('문자', '문자');
sizeSquare('문자');

function sizeTrapezoid(topSide, lowerSide, height) {
    if(topSide === undefined || lowerSide === undefined || height === undefined) {
        return console.log('인자가 부족합니다.')
    } else if (toString.call(topSide) != '[object Number]' || toString.call(lowerSide) != '[object Number]' || toString.call(height) != '[object Number]') {
        return console.log('숫자만 계산할 수 있습니다.')
    }
    const trapezoidArea = (topSide + lowerSide) * height / 2
    console.log('윗변과 아랫변과 높이가 ' + topSide + ', ' + lowerSide + ', ' + height + '인 사다리꼴의 넓이는' + trapezoidArea + '입니다.')
}

//test trapezoid
sizeTrapezoid(2, 3, 4)
sizeTrapezoid(2, 3)
sizeTrapezoid('문자', 2, 3)
sizeTrapezoid('문자', '문자', '문자')
sizeTrapezoid()

