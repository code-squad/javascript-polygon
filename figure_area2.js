const stack = [];

function circleArea(r){
    checkArguments(r);
    let answer = Math.PI * r * r;
    stack.push(`circle, ${answer}`);
    
    return answer;
}

function squareArea(w, h){
    checkArguments(w, h);
    let answer = w * h;
    stack.push(`square, ${answer}`);
    
    return answer;
}

function trapezoidArea(a, b, h){
    checkArguments(a, b, h)
    let answer = (a + b) * h / 2;
    stack.push(`trapezoid, ${answer}`);
    
    return answer;
}

function cylinderArea(r, h){
    checkArguments(r, h);
    let answer = circleArea(r) * h;
    stack.push(`cylinder, ${answer}`);

    return answer;
}

function checkArguments(...args){
    for (let i = 0; i < args.length; i++){
        if(typeof args[i] === 'undefined'){
            throw new Error("인자 개수가 부족합니다.");
        } else if (typeof args[i] !== 'number'){
            throw new Error("숫자가 아닙니다.");
        } 
    }    
}

function getArea(...args) {
    switch (args[0]){
        case 'circle':
            if(args.length === 2){
                return circleArea(args[1]);
            } else {
                return accumulateCircle(args[1], args[2]);
            }
        case 'square':
            return  squareArea(args[1], args[2]);
        case 'trapezoid':
            return trapezoidArea(args[1], args[2], args[3]);
        case 'cylinder':
            return cylinderArea(args[1], args[2]);
        default : throw Error("첫번째 인자에 circle, square, trapezoid, cylinder을 넣어주세요.");
    }
}

function accumulateCircle(r, n){
    if (r === n){
        return circleArea(r);
    } else if (r > n){
        return circleArea(n) + accumulateCircle(n+1, r);
    } else {
        return circleArea(r) + accumulateCircle(r+1, n);
    }
}

function printExecutionSequence() {
    let mesg = '';
    for(let i = 0; i < stack.length; i++){
        mesg += stack[i];
        mesg += '\n';
    }
    return mesg;
}

getArea('circle', 3);
getArea('square', 2, 5);
getArea('trapezoid', 3, 2, 3);

console.log(printExecutionSequence());