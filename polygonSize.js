function sizeCircle(radius) {
    if(toString.call(radius) != '[object Number]') {
        return console.log('숫자만 계산 가능합니다.')
    }
    const circleArea = radius * radius * Math.PI
    console.log('반지름이 ' + radius + '인 원의넓이 : ' + circleArea);
}
//testcode
sizeCircle(4)
sizeCircle('문자')

function sizeSquare(base, height) {
    const squareArea = base * height
}

