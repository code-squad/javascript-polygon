function getCircleArea(r) {
    if (arguments === 0 || arguments > 1 || isNaN(r)) {
        console.log('error: 값이 없거나 값이 숫자가 아닙니다.');
    } else {
        let p = Math.PI;
        let circleArea = p * Math.pow(r, 2);
        console.log(circleArea);
    }
}

getCircleArea(3);

function getSquareArea(w, l) {
    if (arguments === 0 || arguments > 2 || isNaN(w) || isNaN(l)) {
        console.log('error: 2개의 값(가로,세로)이 아니거나 숫자가 아닙니다.');
    } else {
        let squareArea = w * l
        console.log(squareArea);
    }
}

getSquareArea(3, 1);

function getTrapezoidArea(b1, b2, h) {
    if (arguments === 0 || arguments > 3 || isNaN(b1) || isNaN(b2) || isNaN(h)) {
        console.log('error: 3개의 값(윗변, 아랫변, 높이)이 아니거나 숫자가 아닙니다.');
    } else {
        let trapezoidArea = ((b1 + b2) / 2) * h;
        console.log(trapezoidArea);
    }
}

getTrapezoidArea(10, 14, 10);

function getCylinderArea(r, h) {
    if (arguments === 0 || arguments > 2 || isNaN(r) || isNaN(h)) {
        console.log('error: 2개의 값(반지름, 높이)이 아니거나 숫자가 아닙니다.');
    } else {
        let p = Math.PI
        let cylinderArea = (2 * p * Math.pow(r, 2)) + (h * 2 * p * r);
        console.log(cylinderArea);
    }
}

getCylinderArea(3,4);