const logArr = [];

getArea('rect',3,4);
getArea('trapezoid',3,4,5);
getArea('circle',3);
getArea('circle',3,4);
printExecutionSequence();

function getArea(shape, val1, val2, val3) {
    if (shape === 'rect') {
        logArr.push('rect');
        let result = measureRectangleArea(val1, val2);
        return console.log('사각형의 넓이는 '+result);
    } else if (shape === 'trapezoid') {
        logArr.push('trapezoid');
        let result = measureTrapezoidArea(val1, val2, val3);
        return console.log('사다리꼴의 넓이는 '+result);
    } else if (shape === 'circle' && !val2 && !val3){
        logArr.push('circle');
        let result = measureCircleArea(val1);
        return console.log('원의 넓이는 '+result);
    } else if (shape === 'circle' && !val3){
        logArr.push('circle');
        let result = measureCirclesArea(val1, val2);
        return console.log('반지름 '+val1+'부터 '+val2+'까지 '+val1+'씩 증가하는 원 '+val2+'의 넓이는 '+result);
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
    for (i = 0; i < logArr.length; i++){
        console.log(logArr[i]);
    }
}