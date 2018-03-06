let hasUndefinded = (arguments)=> {
    for (let key in arguments){
        if(arguments[key] === undefined) return true;
    }
    return false;
}
let isAllUndefined = arguments => {return arguments.length === 0}
let isNumber = item => {return typeof item === "number"}
let isoverZero = item => {return item>0}

const hasAlltype = {
  numbers: 'numbers',
  overZero: 'overZero',
};

let hasAllCheck = (arguments, type)=> {
    switch(type){
        case hasAlltype[numbers]: return hasAllNumbers(arguments)
        case hasAlltype[overZero]: return hasAllOverZero(arguments)
        default: break;
    }
}
let hasAllNumbers = arguments => {
    let count = 0;
    for (let key in arguments){
        if(typeof arguments[key] === "number") count++;
    }
    return count === arguments.length;
}
let hasAllOverZero = arguments => {
    let count = 0;
    for (let key in arguments){
        if(arguments[key] > 0) count++;
    }
    return count === arguments.length;
}

const calculateErrorText = {
    noArguments: '최소 한가지 값이 필요합니다',
    hasMinus: '반지름은 0보다 커야 합니다',
    hasNotNumber: '숫자형타입만 계산이 가능합니다.'
}

function calculateCircleSize(radius1,radius2) {   
    if( !arguments[0]&&!arguments[1]) return calculateErrorText.noArguments;    
    else {
        if((arguments[0] !== undefined) &&(arguments[1] === undefined)){
            if(typeof arguments[0] === "number"){
                if(arguments[0] > 0) return `원의 넓이 : ${arguments[0]*arguments[0]*Math.PI}`
                else return calculateErrorText.hasMinus
            }
            else return calculateErrorText.hasNotNumber;
        }
        else{
            if(hasAllNumbers(arguments)){
                if(hasAllOverZero(arguments)){
                    for(let i = Math.min(radius1,radius2); i<=Math.max(radius1,radius2); i++){
                        console.log(`반지름이 ${i}인 원의 넓이는 ${i*i*Math.PI}`);
                    }
                }else return calculateErrorText.hasMinus        
            }
            else return calculateErrorText.hasNotNumber;
        }
    }
}

function calculateRectSize(width,height) {
    if(typeof width !== 'number' && typeof height !== 'number'){
        console.log('숫자형타입만 계산이 가능합니다');
    } else if(arguments.length===0){
        console.log('최소 한가지 값이 필요합니다')
    } else if(width<= 0 || height<= 0){
        console.log('길이값과 높이값은 0보다 커야합니다');
    }
    else {
        var size = width * height;
        console.log("사각형의 넓이: " + size);
        return size;
    }
}


function calculateTrapeSize(upper,bottom,height) {
    if(hasUndefinded(arguments)){
        console.log('3개의 인자가 필요합니다');
    }
    else{
        var size = (upper+bottom)*height/2;
        console.log("사다리꼴의 넓이: "+size);
        return size;
    }
}



function getArea(shape, para1, para2, para3) {
    console.log('arguments',arguments)
    switch(shape){
        case 'circle': return calculateCircleSize(para1, para2);
            break;
        case 'rect': return calculateRectSize(para1, para2);
            break;
        case 'trape': return calculateTrapeSize(para1, para2, para3);
            break;
    }
}

// 요구사항 1 
//console.log('getArea(\'circle\')', getArea('circle'));
//console.log('getArea(\'circle\', 10)', getArea('circle',10));
//console.log('getArea(\'circle\', 10)', getArea('circle','10'));
// console.log('getArea(\'circle\', 10)', getArea('circle',-1));
// console.log('getArea(\'circle\', 10)', getArea('circle', 10, 15));
// console.log('getArea(\'circle\', 10, \'15\')', getArea('circle', 10, '15'));
// console.log('getArea(\'circle\', 10, -1)', getArea('circle', 10, -1));
// 요구사항 2
//console.log(getArea('rect', 10,15));
// 요구사항 3
// console.log(getArea('trape', 10,5));

// console.log(getArea('trape', 10,5, 12));

//요구사항 2
//2.1. 다음처럼 동작하는 원의 넓이를 계산하는 함수
// calculateCircle(10) 인경우 정상적인 결과를 출력.
// calculateCircle("10") 인경우 
//> "숫자형타입만 계산이 가능합니다."
// calculateCircle() 인경우 
//> "최소 한가지 값이 필요합니다"
// calculateCircle(-1) 인경우 
//> "반지름은 0보다 커야 합니다"
//다른다각형 함수도 수정.
//다른 다각형의 넓이를 구하는 함수도 이와 같이 파라미터값을 체크하는 로직을 추가해서 리팩토링을 해보자.

// console.log(calculateCircleSize());
// console.log(calculateCircleSize(10));
// console.log(calculateCircleSize('10'));
// console.log(calculateCircleSize(-1));
// console.log(calculateCircleSize(10, 13));
// console.log(calculateCircleSize(10, '13'));
// console.log(calculateCircleSize(10, -1));
