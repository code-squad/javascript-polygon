let getCircleArea = function(r) {
    checkIsNumError(arguments);
    checkParamNum(r);
    return Math.PI * r * r;
}

let getSquareArea = function(width, height) {
    checkIsNumError(arguments);
    checkParamNum(width, height);
    return width * height;
}

let getTrapezoidArea = function(top, bottom, height) {
    checkIsNumError(arguments);
    checkParamNum(top, bottom, height);
    return ((top + bottom) * height) / 2
}

let getCylinderArea = function(r, height) {
    checkIsNumError(arguments);
    checkParamNum(r, height);
    return getCircleArea(r) * height;
}

let checkIsNumError = function(args) {
    for (let val of args) {
        if (typeof val !== "number") {
            throw new Error("인자값이 숫자가 아닙니다");
        }
    }
}

let checkParamNum = function(...args) {
    for (let val of args) {
        if (typeof val === "undefined") {
            throw new Error("인자의 갯수가 부족합니다.");
        }
    }
}

// console.log(getCircleArea(5));

// console.log(getSquareArea("ss", 2));
// console.log(getSquareArea("안녕난문자"));
// console.log(getSquareArea(1));

// console.log(getTrapezoidArea(4, "asdf", 5));
// console.log(getTrapezoidArea(true));
// console.log(getTrapezoidArea(null));

//console.log(getCylinderArea(5, 10));
//console.log(getCylinderArea(undefined));
//console.log(getCylinderArea(2));
