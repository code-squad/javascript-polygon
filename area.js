const PIE = Math.PI;
let areaSum = 0;

function circle(r = -1){
    checkParameter(r);
    return Math.pow(r, 2) * PIE;
}

function circleSum(r = -1){
    checkParameter(r);

    if(r > 0){
        areaSum += Math.pow(r, 2) * PIE;
        circleSum(r-1);
    }

    return areaSum;
}

function rect(a = -1, b = -1){
    checkParameter(a, b);
    return a * b;
}

function trapezoid(a = -1, b = -1, h = -1){
    checkParameter(a, b, h);
    return (a + b) * h / 2;
}

function checkParamCount(param){
    for (let i=0; i<param.length; i++){
        if(param[i] === -1){
            throw Error("모든 인자를 입력하세요.");
        }
    }
}

function checkParamType(param){
    for (let i=0; i<param.length; i++) {
        if(typeof param[i] !== "number") {
            throw Error("숫자를 입력하세요.");
        }
    }
}

function checkParameter(...param){
    checkParamCount(param);
    checkParamType(param);
}

module.exports.getArea = function (...param){
    if (param[0] === 'circle'){
        if(param.length >= 3){
            return circleSum(param[2]);
        }else{
            return circle(param[1]);
        }
    } else if(param[0] === 'rect'){
        return rect(param[1], param[2]);
    } else if(param[0] === 'trapezoid'){
        return trapezoid(param[1], param[2], param[3]);
    }else{
        throw Error("함수를 다시입력하세요.");
    }
}