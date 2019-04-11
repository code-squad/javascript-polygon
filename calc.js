const check = require('./check');

const circleArea = function(...param){
    const [r] = check.checkParam(1,param);
    return  Math.PI * r ** 2;
}

const rectancleArea = function(...param){
    const [width , height] = check.checkParam(2,param);
    return width * height;
}
const trapezoidArea = function(...param){
    const [base, top, height] = check.checkParam(3,param);
    return (base+top) * height / 2;
}
const cylinderArea = function(...param){
    const [r, height] = check.checkParam(2,param);
    return circleArea(r) * height;
}


const getRecursiveCircle = function(start,end){
    const current = circleArea(start)
    if(start === end) return current;
    else return current + getRecursiveCircle(start+1,end)
}

const getArea = function(name,...param){
    let answer; 
    if(name === 'circle' && param.length === 2) {
        answer = getRecursiveCircle(...param);
    }
    else {answer =  polygonAreaFunction[name](...param);}
    
    polygonAreaFunction.sequence.push({name,answer}); 

    return answer;

}

const printExecutionSequence = function(){
    polygonAreaFunction.sequence.forEach(el=>{
        console.log(`호출함수는[${el.name}] 결과는[${el.answer}]`)
    })
}

const polygonAreaFunction = {
    circle:circleArea,
    rect:rectancleArea,
    trapezoid:trapezoidArea,
    cylinder:cylinderArea,
    sequence:[]
}

module.exports = {
    getArea,
    printExecutionSequence,

}
