let getCircleArea = function(r) {
    checkIsNum(arguments);
    checkPramNum(r);
    return Math.PI * r * r;
}

let getSquareArea = function(width, height) {
    checkIsNum(arguments);
    checkPramNum(width, height);
    return width * height;
}

let getTrapezoidArea = function(top, bottom, height) {
    checkIsNum(arguments);
    checkPramNum(top, bottom, height);
    return ((top + bottom) * height) / 2
}

let getCylinderArea = function(r, height) {
    checkIsNum(arguments);
    checkPramNum(r, height);
    return getCircleArea(r) * height;
}

let checkIsNum = function(args) {
    for (let val of args) {
        if (typeof val !== "number") {
            throw new Error("인자값이 숫자가 아닙니다");
        }
    }
}

let checkPramNum = function(...args) {
    for (let val of args) {
        if (typeof val === "undefined") {
            throw new Error("인자의 갯수가 부족합니다.");
        }
    }
}

console.log(getCircleArea(5));
//console.log(getCircleArea("asdf"));
//console.log(getCircleArea());

console.log(getSquareArea(2, 4));
//console.log(getSquareArea("안녕난문자"));
//console.log(getSquareArea(1));

console.log(getTrapezoidArea(4, 6, 5));
//console.log(getTrapezoidArea(true));
//console.log(getTrapezoidArea(2, 4));

console.log(getCylinderArea(5, 10));
//console.log(getCylinderArea(undefined));
//console.log(getCylinderArea(2));