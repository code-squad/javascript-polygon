function circleArea(){
    switch(arguments.length){
        case 1:
            if(typeof arguments[0] !== "number"){
                throw "숫자형 타입만 계산이 가능합니다";
            }else if(arguments[0] <= 0){
                throw "인자는 0보다 커야합니다";
            }else{
                let result = arguments[0] * arguments[0] * Math.PI;
                return result;
            }
            break;
        case 2:
            if(typeof arguments[0] !== "number" || typeof arguments[1] !== "number"){
                throw "숫자형 타입만 계산이 가능합니다";
            }else if(arguments[0] <= 0 || arguments[1] <= 0){
                throw "인자는 0보다 커야합니다";
            }else{
                let result = [];
                for(let i = arguments[0]; i <= arguments[1]; i++){
                    result.push(i * i * Math.PI);
                }
                return result;
            }
            break;
        default :
            throw "한 개 또는 두 개의 인자가 필요합니다";
    }
}

function rectArea(bottom, height){
    if(arguments.length !== 2){
        throw "두 개의 인자가 필요합니다";
    } else if(typeof bottom !== "number" || typeof height !== "number"){
        throw "숫자형 타입만 계산이 가능합니다";
    } else if(bottom <= 0 || height <= 0){
        throw "인자는 0보다 커야합니다";
    } else {
        let result = bottom * height;
        return result;
    }
}

function trapezoidArea(bottom, top, height){
    if(arguments.length !== 3){
        throw "세 개의 인자가 필요합니다";
    } else if(typeof bottom !== "number" || typeof top !== "number" || typeof height !== "number"){
        throw "숫자형 타입만 계산이 가능합니다";
    } else if(bottom <= 0 || top <= 0 || height <= 0){
        throw "인자는 0보다 커야합니다";
    } else {
        result = ((bottom + top) * height)/2;
        return result;
    }
}

let getArea = (function(){
    let log = [];
    return function(shape, ...args){
        let result;
        switch(shape){
            case 'circle':
                result = circleArea(...args);
                log.push('circle');
                break;
            case 'rect':
                result = rectArea(...args);
                log.push('rect');
                break;
            case 'trapezoid':
                result = trapezoidArea(...args);
                log.push('trapezoid');
                break;
            case 'log':
                return log.join();
            default :
                throw "올바른 인자를 입력하세요";
        }
        console.log("계산이 " + log.length + "번 일어났습니다.");
        return result;
    }
})();

let getReport = function(){
    console.log("계산수행순서 : " + getArea('log'));
}

console.log(getArea('circle', 10, 12));
console.log(getArea('rect', 10, 15));
console.log(getArea('trapezoid', 10, 15, 12));
getReport();