if(!Array.prototype.includes){
    Object.defineProperty(Array.prototype, 'includes', {
        value : function(searchElement, fromIndex){
            if(this === null){
                throw new TypeError('"this" is null or not defined'); //배열이 null일 때 타입에러
            }

            var o = Object(this); //의미 모름

            var len = o.length >>> 0; //의미 모름

            if(len === 0){
                return false;
            }

            var n = fromIndex | 0; //default

            var k = Math.max(n>=0 ? n : len - Math.abs(n), 0); //fromIndex < 0 일때 뒤에서 부터 셈, 배열의 길이를 넘어서면 0부터

            function sameValueZero(x, y){
                return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y)); //NaN일 경우도 세줌
            }

            while(k < len){
                if(sameValueZero(o[k], searchElement)){
                    return true;
                }
                k++;
            }

            return false;
        }
    });
}

function checkError(arr, ...validLength){
    if(!validLength.includes(arr.length)) throw "올바른 인자 개수를 입력하십시오";
    if(!arr.every((element) => typeof element === "number")) throw "숫자형 타입만 계산이 가능합니다";
    if(!arr.every((element) => element > 0)) throw "인자는 0보다 커야합니다";
}

function getACircleArea(radius){
    return Math.pow(radius, 2) * Math.PI;
}

function getManyCircleArea(start, end){
    let result = [];
    for(let i = start; i <= end; i++){
        result.push(i);
    }
    return reduce(result, (previous, current) => [...previous, getACircleArea(current)], []);
}

function reduce(arr, func, initialValue){
    if(initialValue) arr.unshift(initialValue);
    let result = arr[0];
    for(let i = 1; i < arr.length; i++){
        result = func(result, arr[i]);
    }
    return result;
}

function getCircleArea(radius1, radius2){
    let arr = Array.from(arguments);
    checkError(arr, 1, 2);
    if(arguments.length === 1) return getACircleArea(...arguments);
    if(arguments.length === 2) return getManyCircleArea(...arguments);
}

function getRectArea(bottom, height){
    let arr = Array.from(arguments);    
    checkError(arr, 2);
    let result = bottom * height;
    return result;
}

function getTrapezoidArea(bottom, top, height){
    let arr = Array.from(arguments);    
    checkError(arr, 3);
    result = ((bottom + top) * height)/2;
    return result;
}

let getArea = (function(){
    let log = [];
    return function(shape, ...args){
        let result;
        switch(shape){
            case 'circle':
                result = getCircleArea(...args);
                log.push('circle');
                break;
            case 'rect':
                result = getRectArea(...args);
                log.push('rect');
                break;
            case 'trapezoid':
                result = getTrapezoidArea(...args);
                log.push('trapezoid');
                break;
            case 'log':
                return log.join();
            default :
                throw "올바른 인자를 입력하세요";
        }
        console.log("함수 호출이 " + log.length + "번 일어났습니다.");
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