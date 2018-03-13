function checkEvery(targetArr, funcName) {
    for(let i = 0; i < targetArr.length; i++) {
        if(!funcName(targetArr[i])) {
            return false;
        }
    }
    return true;
}

function checkInputValue(validNum, inputVal) {
    let inputValArray = Array.from(inputVal);
    if(!checkEvery(inputValArray, elem => typeof elem === "number")) {
        throw "숫자형 타입만 계산이 가능합니다.";
    }
    if(!inputValArray.length) {
        throw "최소 한가지 값이 필요합니다.";
    }
    if(!checkEvery(inputValArray, elem => elem > 0)) {
        throw "입력값은 0보다 커야 합니다.";
    }
    if(validNum !== inputValArray.length) {
        throw `${validNum}개의 인자가 필요합니다.`;
    }
}

function calculateCircle(radius) {
    checkInputValue(1, arguments);
    let result = radius * radius * Math.PI;
    console.log(result);
    return true;
}

function calculateSquare(width, height) {
    checkInputValue(2, arguments);
    let result = width * height;
    console.log(result);
    return true;
}

function calculateTrapezoid(upper, lower, height) {
    checkInputValue(3, arguments);
    result = (upper + lower) * height / 2;
    console.log(result);
    return true;
}

calculateCircle(10);
calculateSquare(10,15);
calculateTrapezoid(10,5,12);