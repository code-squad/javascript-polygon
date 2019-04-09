const PIE = Math.PI;

module.exports.circle = function(r = -1){
    checkParameter(r);
    return Math.pow(r, 2) * PIE;
}

module.exports.square = function(a = -1, b = -1){
    checkParameter(a, b);
    return a * b;
}

module.exports.trapezoid = function(a = -1, b = -1, h = -1){
    checkParameter(a, b, h);
    return (a + b) * h / 2;
}

module.exports.cylindrical = function(r = -1, h = -1){
    checkParameter(r, h);
    return (this.circle(r) * 2) + (r * 2 * PIE * h);
}

function checkParamCount(rest){
    for (let i=0; i<rest.length; i++){
        if(rest[i] === -1){
            throw Error("모든 인자를 입력하세요.");
        }
    }
}

function checkParamType(rest){
    for (let i=0; i<rest.length; i++) {
        if(typeof rest[i] !== "number") {
            throw Error("숫자를 입력하세요.");
        }
    }
}

function checkParameter(...rest){
    checkParamCount(rest);
    checkParamType(rest);
}