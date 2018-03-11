function circleArea(){
    switch(arguments.length){
        case 1:
            if(typeof arguments[0] !== "number"){
                console.log("숫자형 타입만 계산이 가능합니다");
            }else if(arguments[0] <= 0){
                console.log("인자는 0보다 커야합니다");
            }else{
                console.log(Math.pow(arguments[0], 2) * Math.PI);
            }
            break;
        case 2:
            if(typeof arguments[0] !== "number" || typeof arguments[1] !== "number"){
                console.log("숫자형 타입만 계산이 가능합니다");
            }else if(arguments[0] <= 0 || arguments[1] <= 0){
                console.log("인자는 0보다 커야합니다");
            }else{
                for(let i = arguments[0]; i <= arguments[1]; i++){
                    console.log(i * i * Math.PI);
                }
            }
            break;
        default :
            console.log("한 개 또는 두 개의 인자가 필요합니다");
    }
}

function rectArea(bottom, height){
    if(arguments.length !== 2){
        console.log("두 개의 인자가 필요합니다");
    } else if(typeof bottom !== "number" || typeof height !== "number"){
        console.log("숫자형 타입만 계산이 가능합니다");
    } else if(bottom <= 0 || height <= 0){
        console.log("인자는 0보다 커야합니다");
    } else {
        console.log(bottom * height);
    }
}

function trapezoidArea(bottom, top, height){
    if(arguments.length !== 3){
        console.log("세 개의 인자가 필요합니다");
    } else if(typeof bottom !== "number" || typeof top !== "number" || typeof height !== "number"){
        console.log("숫자형 타입만 계산이 가능합니다");
    } else if(bottom <= 0 || top <= 0 || height <= 0){
        console.log("인자는 0보다 커야합니다");
    } else {
        console.log(((bottom + top) * height)/2);
    }
}

let getArea = (function(){
    let log = [];
    return function(shape, ...args){
        switch(shape){
            case 'circle':
                circleArea(...args);
                log.push('circle');
                break;
            case 'rect':
                rectArea(...args);
                log.push('rect');
                break;
            case 'trapezoid':
                trapezoidArea(...args);
                log.push('trapezoid');
                break;
            case 'log':
                return log.join();
            default :
                console.log("올바른 인자를 입력하세요");
                return ;
        }
        console.log("계산이 " + log.length + "번 일어났습니다.");
    }
})();

let getReport = function(){
    console.log("계산수행순서 : " + getArea('log'));
}

getArea('circle', 10, 12);
getArea('rect', 10, 15);
getArea('trapezoid', 10, 15, 12);
getReport();