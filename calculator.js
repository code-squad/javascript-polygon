let getCircleArea = function(r) {
    checkError(r);
    checkPramNum(1, arguments.length);
    return Math.PI * r * r;
}

let getSquareArea = function(width, height) {
    checkError(height);
    checkPramNum(2, arguments.length);
    return width * height;
}

let getTrapezoidArea = function(top, bottom, height) {
    checkError(height);
    checkPramNum(3, arguments.length);
    return ((top + bottom) * height) / 2
}

let getCylinderArea = function(r, height) {
    checkError(height);
    checkPramNum(2, arguments.length);
    return getCircleArea(r) * height;
}

let checkError = function(...obj) {
    for (let val of obj) {
        if (typeof val !== "number") {
            throw new Error("인자값이 숫자가 아닙니다");
        }
    }
}

let checkPramNum = function(N, length) {
    if (length < N) {
        throw new Error("인자의 갯수가 부족합니다.");
    }
}

//console.log(getCircleArea(5));
//console.log(getCircleArea("asdf"));
//console.log(getCircleArea());

//console.log(getSquareArea(2, 4));
//console.log(getSquareArea("안녕난문자"));
//console.log(getSquareArea(1));

//console.log(getTrapezoidArea(4, 6, 5));
//console.log(getTrapezoidArea(true));
//console.log(getTrapezoidArea(2, 4));

//console.log(getCylinderArea(5, 10));
//console.log(getCylinderArea(undefined));
//console.log(getCylinderArea(2));