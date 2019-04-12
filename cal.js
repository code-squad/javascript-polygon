const getCircleArea = radius => {
    checkError(radius);
    return Math.PI * radius * radius;
}

const getSquareArea = (width, height) => {
    checkError(width, height);
    return width * height;
}

const getTrapezoidArea = (top, bottom, height) => {
    checkError(top, bottom, height);
    return ((top + bottom) * height) / 2
}

const getCylinderArea = (radius, height) => {
    checkError(radius, height);
    return getCircleArea(radius) * height;
}

const getCircleSum = (num1, num2) => {
    let start, end;
    if (num1 >= num2) {
        start = num2;
        end = num1;
    } else {
        start = num1;
        end = num2;
    }

    if (start === end) {
        return Math.PI * end * end;
    } else {
        return Math.PI * end * end + getCircleSum(start, end - 1);
    }
}

const checkError = function(...args) {
    for (let val of args) {
        if (typeof val === "undefined") {
            throw new Error("인자의 갯수가 부족합니다.");
        }
        if (typeof val !== "number") {
            throw new Error("인자값이 숫자가 아닙니다.");
        }
    }
}

module.exports = {getCircleArea, getSquareArea, 
    getTrapezoidArea, getCylinderArea, getCircleSum};
    