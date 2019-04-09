const PIE = Math.PI;

module.exports.circle = function(r){
    checkParamCount(r);
    checkParamType(r);
    return Math.pow(r, 2) * PIE;
}

module.exports.square = function(a, b){
    checkParamCount(a, b);
    checkParamType(a, b);
    return a * b;
}

module.exports.trapezoid = function(a, b, h){
    checkParamCount(a, b, h);
    checkParamType(a, b, h);
    return (a + b) * h / 2;
}

module.exports.cylindrical = function(r, h){
    checkParamCount(r, h);
    checkParamType(r, h);
    return (this.circle(r) * 2) + (r * 2 * PIE * h);
}

function checkParamType(){
    for (let i=0; i<arguments.length; i++) {
        if(typeof arguments[i] !== "number") {
            throw Error("숫자를 입력하세요.");
        }
    }
}

function checkParamCount(){
    for (let i=0; i<arguments.length; i++){
        if(typeof arguments[i] === "undefined"){
            throw Error("모든 인자를 입력하세요.");
        }
    }
}