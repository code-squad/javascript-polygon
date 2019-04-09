const check = require('./check');

circleArea = function(...param){
    const [r] = check.checkParam(1,param);
    return  Math.PI * r ** 2;
    
}

rectancleArea = function(...param){
    const [width , height] = check.checkParam(2,param);
    return width * height;
}
trapezoidArea = function(...param){
    const [base, top, height] = check.checkParam(3,param);
    return (base+top) * height / 2;
}
cylinderArea = function(...param){
    const [r, height] = check.checkParam(2,param);
    return circleArea(r) * height;
}


getRecursiveCircle = function(start,end){
    const current = circleArea(start)
    if(start === end) return current;
    else return current + getRecursiveCircle(start+1,end)
}

getArea = function(name,...param){
    switch(name){
        case 'circle':
            if(param.length === 2) return getRecursiveCircle(...param);
            return circleArea(...param);

        case 'rect':
            return rectancleArea(...param);
            
        case 'trapezoid':
            return trapezoidArea(...param);
        
        case 'cylinder':
            return cylinderArea(...param);
        
    }
}

module.exports = {
    getArea
}
