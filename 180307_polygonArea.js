function circleArea(radius){
    if(arguments.length !== 1){
        console.log("한 개의 인자가 필요합니다");
    } else if(typeof radius !== "number"){
        console.log("숫자형타입만 계산이 가능합니다");
    } else if(radius <= 0){
        console.log("반지름은 0보다 커야합니다");
    } else {
        console.log(Math.pow(radius, 2) * Math.PI);
    }
}

function rectangleArea(bottom, height){
    if(arguments.length !== 2){
        console.log("두 개의 인자가 필요합니다");
    } else if(typeof bottom !== "number" || typeof height !== "number"){
        console.log("숫자형타입만 계산이 가능합니다");
    } else if(bottom <= 0 || height <= 0){
        console.log("인자는 0보다 커야합니다");
    } else {
        console.log(bottom * height);
    }
}

function trapezoidArea(bottom, top, height){
    if(arguments.length !== 3){
        console.log("세 개의 인자가 필요합니다");
    } else if(typeof bottom !== "number" || typeof top !== "number" || typeof height !== "number"){
        console.log("숫자형타입만 계산이 가능합니다");
    } else if(bottom <= 0 || top <= 0 || height <= 0){
        console.log("인자는 0보다 커야합니다");
    } else {
        console.log(((bottom + top) * height)/2);
    }
}

circleArea(10);
rectangleArea(15,10);
trapezoidArea(10,5,12);