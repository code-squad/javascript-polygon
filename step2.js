//다각형의 넓이 구하기 

//1. 원의 넓이 계산

function getCircleArea(para1,para2) {
    
    if (isNaN(para1, para2)) {
        sequenceArr.push('circle');
        return 'error';
    }
    else if ( para2 === undefined ) {
        const pi = 3.14;
        const radius = para1;
        let result = '원의 넓이는 '+pi * Number(radius) * Number(radius);
        sequenceArr.push('circle');
        return result;
    }
    else if (arguments.length === 2 ) {
        const pi = 3.14,
              min = para1,
              max = para2;
        let result = '';

        for (let r = min; r < max + 1; r++) {
            const rSquare = Math.pow(r, 2);
            result += '반지름 ' + r + '의 원넓이는 ' + (pi * rSquare) + ' / ';
        }
        sequenceArr.push('circle');
        return result;
    } else if ( arguments.length > 2 ) {
        let result = "인자 개수가 맞지 않습니다.";
        sequenceArr.push('circle');
        return result;
    } 
}

//2. 사각형의 넓이를 계산하는 함수
function getRectangleArea(width, height) {

    if ([width, height].length != arguments.length) {
        let result = "인자 개수가 맞지 않습니다.";
        sequenceArr.push('rect');
        return result;
    }
    else if (isNaN(width, height)) {
        return 'error';
    } else {
        let result = '사각형의 넓이는 '+Number(width) * Number(height);
        sequenceArr.push('rect');
        return result;
    }
}

//3.사다리꼴 넓이 계산 함수 
function getTrapezoidArea(upperLine, bottomLine, height) {
    if ([upperLine, bottomLine, height].length != arguments.length) {
        let result = "인자 개수가 맞지 않습니다.";
        sequenceArr.push('rect');
        return result;
    }

    if (isNaN(upperLine, bottomLine, height)) {
        return 'error';
    } else {
        let result = '사다리꼴의 넓이는 '+(Number(upperLine) + Number(bottomLine)) * Number(height) / 2;
        sequenceArr.push('trapezoid');
        return result;
    }
}

//4.원기둥 넓이 계산 함수 
function getCylinderArea(radius, width) {
    if ([radius, width].length != arguments.length) {
        let result = "인자 개수가 맞지 않습니다.";
        sequenceArr.push('cylincer');
        return result;
    }

    if (isNaN(radius, width)) {
        sequenceArr.push('cylincer');
        return 'error';
    } else {
        const pi = 3.14;
        let circle = pi * Number(radius) * Number(radius);
        let result = '원기둥의 넓이는 '+circle * Number(width);
        sequenceArr.push('cylincer');
        return result;
    }
}

//getArea 
function getArea(figure, para1, para2, para3) {
    let result;

    switch (figure) {
        case 'circle' : 
            result = getCircleArea(para1,para2);break;
        case 'rect': result = getRectangleArea(para1, para2);
        break;
        case 'trapezoid': result = getTrapezoidArea(para1,para2,para3);break;
        case 'cylinder' : result = getCylinderArea(para1,para2);break;
        default : console.log('알맞은 값을 입력해주세요');
    }
    return result;
}

// printExecutionSequence 
var sequenceArr = [];

function printExecutionSequence() {
    let sequence = sequenceArr;
    return sequence;
}