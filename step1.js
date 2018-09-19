//다각형의 넓이 구하기 

//1. 원의 넓이 계산
function getCircleArea (radius) {
    let requiredInput = [radius];
    if (requiredInput.length != arguments.length) {
        let result = "인자 개수가 맞지 않습니다."; 
        return result;
    }

    if (isNaN(radius)) {
        return 'error';
    } else {
        const pi = 3.14;
        let result = pi * Number(radius) * Number(radius);
        return result;
    }
}

//2. 사각형의 넓이를 계산하는 함수
function getRectangleArea (width,height) {
    if ([width, height].length != arguments.length) {
        let result = "인자 개수가 맞지 않습니다.";
        return result;
    }

    if (isNaN(radius)) {
        return 'error';
    } else {
        let result = Number(width) * Number(height);
        return result;
    }
}

//3.사다리꼴 넓이 계산 함수 
function getTrapezoidArea (upperLine,bottomLine,height) {
    if ([upperLine, bottomLine, height].length != arguments.length) {
        let result = "인자 개수가 맞지 않습니다.";
        return result;
    }

    if (isNaN(radius)) {
        return 'error';
    } else {
        let result = (Number(upperLine) + Number(bottomLine)) * Number(height) / 2;
        return result;
    }
}

//4.원기둥 넓이 계산 함수 
function getCylinderArea (radius,width) {
    if ([radius, width].length != arguments.length) {
        let result = "인자 개수가 맞지 않습니다.";
        return result;
    }

     if (isNaN(radius)) {
         return 'error';
     } else {
        const pi = 3.14;
        let circle = pi * Number(radius) * Number(radius);
        let result = circle * Number(width);
        return result;
    }
}
