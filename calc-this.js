const check = require('./check');

function circleArea(param) {
    const [r] = check.checkParam(1, param);
    return Math.PI * r * r 
}

function rectangleArea(param) {
    const [w, h] = check.checkParam(2,param); 
    return w * h;
}

function trapezoidArea(param) {
    const [t, b, h] = check.checkParam(3,param);
    return (t+b)/2 * h;
}

function cylinderArea(param) {
    const [r, h] = check.checkParam(2, param);
    return this.circle([r]) * h
}

function getRecursiveCircle(start, end){
    if(start === end ) {return Math.PI * end * end;}
    return (Math.PI * start * start) + getRecursiveCircle(start+1, end);
}

function getArea(figure, ...param){
    let answer;
    if(figure !== "circle" ) {
        answer = this[figure](param);
    }
    else if(figure === "circle") {
        answer = param.length === 1 ? this[figure](param) : this["getRecursiveCircle"](...check.checkParam(2,param))
    }
    this.sequence.push([figure, answer]) 
    return answer
}

function printExecutionSequence(){
    for (let el of this.sequence) {
        console.log(`호출 함수: ${el[0]} 결과: ${el[1]}`)
    }
}

module.exports = {
        circle:circleArea,
        rect:rectangleArea,
        trapezoid:trapezoidArea,
        cylinder:cylinderArea,
        getRecursiveCircle,
        getArea,
        printExecutionSequence,
        sequence : []
    }

