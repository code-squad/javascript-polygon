function getWidthCircle(radius){
    let result1 = radius * radius * Math.PI;
    return result1;
}

function getWidthSquare(base, height){
    let result2 = base * height;
    return result2;
}

function getWidthTrapezoid(base1, uppbase1, height1){
    let result3 = (base1 + uppbase1) * height1 * 0.5
    if( base1 === undefined || uppbase1 === undefined || height1 === undefined){
        return "3개의 인자가 필요합니다";
    }
    return result3;
}

console.log(getWidthCircle(10));
console.log(getWidthSquare(10, 15));
console.log(getWidthTrapezoid(10, 5, 12));
