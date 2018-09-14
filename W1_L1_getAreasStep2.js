const logArr = [];

function getArea(shape, val1, val2, val3) {
    if (shape === 'rect') {
        let result = measureRectangleArea(val1, val2);
        logArr.push('rect');
        console.log('사각형 넓이의 값은 =' + result);
        return result;
    } else if (shape === 'trapezoid') {
        let result = measureTrapezoidArea(val1, val2, val3);
        logArr.push('trapezoid');
        console.log('사다리꼴 넓이의 값은 =' + result);
        return result;
    } else if (shape === 'circle' && !val2){
        let result = measureCircleArea(val1);
        logArr.push('circle');
        console.log('원 넓이의 값은 =' + result);
        return result;
    } else if (shape === 'circle' && !val3){
        let result = measureCirclesArea(val1, val2);
        logArr.push('circle');
        console.log('반지름 '+val1+'부터 '+val2+'까지 넓이의 값은 =' + result);
        return result;
    }
}

function measureCirclesArea(min, max) {
    let p = Math.PI;
    let areas = [];
    for (i = min; i < max + 1; i++) {
        areas.push(p * Math.pow(i, 2));
    }
    let circleAreas = areas.toString();
    return circleAreas;
}

function measureCircleArea(r) {
    if (arguments.length !== 1) {
        console.log('error: 값이 1개가 아닙니다.');
    } else if (isNaN(r)) {
        console.log('error: 값이 숫자가 아닙니다.');
    } else {
        let p = Math.PI;
        let circleArea = p * Math.pow(r, 2);
        return circleArea;
    }
}

function measureRectangleArea(w, l) {
    if (arguments.length != 2) {
        console.log('error: 값이 2개(가로,세로)가 아닙니다.');
    } else if (isNaN(w) || isNaN(l)) {
        console.log('값이 숫자가 아닙니다.');
    } else {
        let rectangleArea = w * l;
        return rectangleArea;
    }
}

function measureTrapezoidArea(b1, b2, h) {
    if (arguments.length != 3) {
        console.log('error: 값이 3개(윗변, 아랫변, 높이)가 아닙니다.');
    } else if (isNaN(b1) || isNaN(b2) || isNaN(h)) {
        console.log('error: 값이 숫자가 아닙니다.');
    } else {
        let trapezoidArea = ((b1 + b2) / 2) * h;
        return trapezoidArea;
    }
}

function printExecutionSequence(){
    logArr.forEach(function(value){
        console.log(value);
        });
}

getArea('rect',3,4);
getArea('trapezoid',3,4,5);
getArea('circle',3);
getArea('circle',3,4);
printExecutionSequence();