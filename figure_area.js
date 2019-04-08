function circleArea(r){
    checkArguments(r);

    return Math.PI * r * r;
}

function squareArea(w, h){
    checkArguments(w, h);

    return w * h;
}

function trapezoidArea(a, b, h){
    checkArguments(a, b, h)

    return (a + b) * h / 2;
}

function cylinderArea(r, h){

    checkArguments(r, h);

    return circleArea(r) * h;
}

function checkArguments(){
    for (let i = 0; i < arguments.length; i++){
        if(typeof arguments[i] == 'undefined'){
            throw new Error("인자 개수가 부족합니다.");
        } else if (typeof arguments[i] !== 'number'){
            throw new Error("숫자가 아닙니다.");
        } 
    }    
}

console.log(circleArea(3));