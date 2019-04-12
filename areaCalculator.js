const cal = require("./cal");
const funcArr = [];
const areaArr = [];

const getArea = function(shape, ...rest) {  
    let result = 0;
    if (shape === "circle") {
        if (rest.length === 1) {
            result = cal.getCircleArea(rest[0]);
        } else {
            result = cal.getCircleSum(rest[0], rest[1]);
        }
    } else if (shape === "rect") {
        result = cal.getSquareArea(rest[0], rest[1]);    
    } else if (shape === "trapezoid") {
        result = cal.getTrapezoidArea(rest[0], rest[1], rest[2]);
    } else if (shape === "cylinder") {
        result = cal.getCircleArea(rest[0], rest[1]);
    } else {
        result = "잘못 입력하셨습니다";
    }

    if (result !== "잘못 입력하셨습니다") {
        funcArr.push(shape);
        areaArr.push(result);
    }
    return result;
}

function main() {
    getArea('circle', 2); 
    getArea('circle', 1, 3);
    getArea('rect', 2, 3);
    getArea('trapezoid', 5, 8, 10);
    getArea('cylinder', 5, 10);
    getArea('triple', 4, 3);

    let result1 = "계산수행순서 : ";
    for (shape of funcArr) {
        result1 = result1 + shape + ", ";
    }
    console.log(result1);
    console.log();

    let result2 = "";
    for (let i = 0; i < funcArr.length; i++) {
        console.log(funcArr[i] + " : " + areaArr[i]);
    }
}

main();
