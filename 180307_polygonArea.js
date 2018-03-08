function circleArea(radius){
    if(arguments.length !== 1){
        console.log("하나의 인자가 필요합니다");
        return;
    }
    return Math.pow(radius, 2) * Math.PI;
}

function rectangleArea(){
    switch(arguments.length){
        case 1: return Math.pow(arguments[0],2);
        case 2: return arguments[0] * arguments[1];
        default:
            console.log("하나 또는 두 개의 인자가 필요합니다");
            return;
    }
}

function trapezoidArea(bottom, top, height){
    if(arguments.length !== 3){
        console.log("3개의 인자가 필요합니다");
        return;
    }
    return ((bottom + top) * height)/2;
}

console.log(circleArea(10));
console.log(rectangleArea(10,15));
console.log(trapezoidArea(10,5,12));