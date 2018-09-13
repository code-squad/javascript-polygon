// Step1 

function isSame(fn, args){
    return fn.length === args.length ? true : false;    
}

function isNum(...args){
    args.forEach(function(val){
        if(typeof val !== 'number') return false;
    });
    return true;
}

function printError(){
    console.log('인자(숫자, 개수)를 확인해주세요');
}

// 원 넓이 구하기
function circle(r1, r2){
    if(arguments.length === 2 && isNum(...arguments)){
        for(let i = r1; i <= r2; i++){
            console.log(circle(i));
        }
    } else if(arguments.length === 1 && isNum(...arguments)){
        return r1 * r1 * Math.PI;
    } else {
        printError();
    }
}

// 사각형 넓이 구하기
function rect(w, h){  
    if(isSame(rect, arguments) && isNum(...arguments)) return w * h;
    printError();
}

// 사다리꼴 넓이 구하기
function trapezoid(a, b, h){
    if(isSame(trapezoid, arguments) && isNum(...arguments)) return (a+b) * h / 2;
    printError();
}

// 원기둥 넓이 구하기
function cylinder(r, h){
    if(isSame(cylinder, arguments) && isNum(...arguments)) return circle(r) * h;
    printError();
}

//Step2.1 getArea 함수
function getArea(fig, ...args){
    let result;
        switch(fig){
            case 'circle':
                result = circle(...args);
                break;
            case 'rect':
                result = rect(...args);
                break;
            case 'trapezoid':
                result = trapezoid(...args);
                break;
            case 'cyl':
                result = cylinder(...args);
                break;
            default :
                console.log('도형을 입력을 해주세요.');
        }
    return result;          
}