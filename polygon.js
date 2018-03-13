function getWidthCircle(radius){
    let result = radius * radius * Math.PI;
    return result;
}

function getWidthSquare(base, height){
    let result = base * height;
    return result;
}

function getWidthTrapezoid(base, uppbase, height){
    let result = (base + uppbase) * height * 0.5
    if( arguments.length < 3){
        return "3개의 인자가 필요합니다";
    }
    return result;
}

console.log(getWidthCircle(10));
console.log(getWidthSquare(10, 15));
console.log(getWidthTrapezoid(10,5,12));
