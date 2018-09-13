//다각형의 넓이 구하기 

//1. 원의 넓이 계산
function circleArea (radius) {
    if ([radius].length != arguments.length) {
        return console.log('error');
    }

    if (!verification(radius)) {
        let pi = 3.14;
        let result = pi * Number(radius) * Number(radius);
        return console.log(result);
    }    
}

//2. 사각형의 넓이를 계산하는 함수
function squareArea (width,height) {
    if ([width, height].length != arguments.length) {
        return console.log('error');
    }

    if (!verification(width,height)) {
        let result = Number(width) * Number(height);
        return console.log(result);
    }
}

//3.사다리꼴 넓이 계산 함수 
function trapezoid (upperLine,bottomLine,height) {
    if ([upperLine, bottomLine, height].length != arguments.length) {
        return console.log('error');
    }

    if (!verification(upperLine, bottomLine, height)) {
        let result = (Number(upperLine) + Number(bottomLine)) * Number(height) / 2;
        return console.log(result);
    }
}

//4.원기둥 넓이 계산 함수 
function cylinder (radius,width) {
    if ([radius, width].length != arguments.length) {
        return console.log('error');
    }

    if (!verification(radius,width)) {
        let pi = 3.14;
        let circle = pi * Number(radius) * Number(radius),
            result = circle * Number(width);
        return console.log(result);
    }
}

//5. 숫자 확인 함수
function verification (val) {
    if ( isNaN(val) === true ) {
        console.log('error');
        return false;
       }    
}




