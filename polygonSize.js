function sizeCircle(radius) {
    if (toString.call(radius) != '[object Number]') {
        return console.log('숫자만 계산 가능합니다.');
    }
    const circleArea = radius * radius * Math.PI
    console.log('반지름이 ' + radius + '인 원의넓이 : ' + circleArea);
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
    console.log('밑변과 아랫변이 ' + lowerSide + ', ' + height + '인 사각형의 넓이' + squareArea)
}

//test square
sizeSquare(4, 3)
sizeSquare(3)
sizeSquare()
sizeSquare('문자', '문자');
sizeSquare('문자');

