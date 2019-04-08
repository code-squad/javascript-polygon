const getCircleArea = function(r) {
    errorChecker(arguments, r);
    return Math.PI * r * r;
}

const getSquareArea = function(width, height) {
    errorChecker(arguments, width, height);
    return width * height;
}

const getTrapezoidArea = function(top, bottom, height) {
    errorChecker(arguments, top, bottom, height);
    return ((top + bottom) * height) / 2
}

const getCylinderArea = function(r, height) {
    errorChecker(arguments, r, height);
    return getCircleArea(r) * height;
}

const checkIsNumError = function(params) {
    for (let val of params) {
        if (typeof val !== "number") {
            throw new Error("인자값이 숫자가 아닙니다");
        }
    }
}

const checkParamNum = function(...args) {
    for (let val of args) {
        if (typeof val === "undefined") {
            throw new Error("인자의 갯수가 부족합니다.");
        }
    }
}

// 에러 체커는 하나의 함수로 추가
const errorChecker = function(params, ...args) {
    checkIsNumError(params);
    checkParamNum(...args);
};
