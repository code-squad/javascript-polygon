let hasUndefinded = arguments => {
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
let caculateCount = 0;
let reportList = [];

let getCircle  = () => console.log(`계산이 ${caculateCount}번 일어났습니다. `);
let getRect  = () => console.log(`계산이 ${caculateCount}번 일어났습니다. `);
let getTrape  = () => console.log(`계산이 ${caculateCount}번 일어났습니다. `);

let getReport = () => console.log(reportList);

const calculateErrorText = {
    noArguments: '최소 한가지 값이 필요합니다',
    hasMinus: '길이는 0보다 커야 합니다',
    hasNotNumber: '숫자형타입만 계산이 가능합니다.',
    insufficientArguments: '입력한 argument 수가 충분하지 않습니다.'
}
function calculateCircleSize(radius1,radius2) {   
    if( !arguments[0]&&!arguments[1]) return calculateErrorText.noArguments;    
    else {
        if((arguments[0] !== undefined) &&(arguments[1] === undefined)){
            if(typeof arguments[0] === "number"){
                if(arguments[0] > 0){
                    caculateCount++;
                    reportList.push('circle')
                    return `원의 넓이 : ${arguments[0]*arguments[0]*Math.PI}`
                }
                else return calculateErrorText.hasMinus
            }
            else return calculateErrorText.hasNotNumber;
        }
        else{
            if(hasAllNumbers(arguments)){
                if(hasAllOverZero(arguments)){
                    reportList.push('circle')
                    for(let i = Math.min(radius1,radius2); i<=Math.max(radius1,radius2); i++){
                        caculateCount++;
                        console.log(`반지름이 ${i}인 원의 넓이는 ${i*i*Math.PI}`);
                    }
                }else return calculateErrorText.hasMinus        
            }
            else return calculateErrorText.hasNotNumber;
        }
    }
}

function calculateRectSize(width, height) {
    if( !arguments[0]&&!arguments[1]) return calculateErrorText.noArguments;
    else {
        //하나의 값만 있는 경우 
        if((arguments[0]!==undefined&&arguments[1]===undefined) || (arguments[0]===undefined&&arguments[1]!==undefined )){
            if(typeof arguments[0] === "number" || typeof arguments[1] === "number"){
                if(arguments[0] > 0 || arguments[1] > 0){
                    caculateCount++;                    
                    reportList.push('rect')
                    length = arguments[0] || arguments[1]
                    return `정사각형의 넓이는 ${length*length}`;
                }
                else return calculateErrorText.hasMinus;
            }
            else return calculateErrorText.hasNotNumber;
        }
        // 2개의 값이 있는 경우 
        if(hasAllNumbers(arguments)){
            if(hasAllOverZero(arguments)){
                caculateCount++;
                reportList.push('rect')
                return `직사각형의 넓이는 ${(arguments[0]*arguments[1])}`;
            }else return calculateErrorText.hasMinus        
        }
        else return calculateErrorText.hasNotNumber;
    } 
}


function calculateTrapeSize(upper,bottom,height) {
    // 3개 중 undefined가 있는 경우 
    if(hasUndefinded(arguments) || arguments.length !== 3)return calculateErrorText.insufficientArguments;
    // 3개 모두 값이 있는 경우 
    else{
        if(hasAllNumbers(arguments)){
            if(hasAllOverZero(arguments)){
                caculateCount++;
                reportList.push('trape')                    
                var size = (upper+bottom)*height/2;
                console.log("사다리꼴의 넓이: "+size);
                return size;
            }
            else return calculateErrorText.hasMinus;
        }
        else return calculateErrorText.hasNotNumber;
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

//getArea와 값이 다른 issue해결 ->1. (switch case)에서 리턴 값 arguments.length값 말고 해당 값 인덱스들로 접근

// 요구사항 1 
//console.log('getArea(\'circle\')', getArea('circle'));
//console.log('getArea(\'circle\', 10)', getArea('circle',10));
//console.log('getArea(\'circle\', 10)', getArea('circle','10'));
// console.log('getArea(\'circle\', 10)', getArea('circle',-1));
// console.log('getArea(\'circle\', 10)', getArea('circle', 10, 15));
// console.log('getArea(\'circle\', 10, \'15\')', getArea('circle', 10, '15'));
//  console.log('getArea(\'circle\', 10, -1)', getArea('circle', 10, -1));
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

// 2. 다른다각형 함수도 수정.
// 다른 다각형의 넓이를 구하는 함수도 이와 같이 파라미터값을 체크하는 로직을 추가해서 리팩토링을 해보자.

// 2.2 직사각형 test
// console.log('getArea(\'rect\')', getArea('rect'));
// console.log('getArea(\'rect\', 10)', getArea('rect',10));
// console.log('getArea(\'rect\', \'10\')', getArea('rect','10'));
//  console.log('getArea(\'rect\', 10)', getArea('rect',-1));
// console.log('getArea(\'rect\', 10, 15)', getArea('rect', 10, 15));
// console.log('getArea(\'rect\', 10, \'15\')', getArea('rect', 10, '15'));
// console.log('getArea(\'rect\', 10, -1)', getArea('rect', 10, -1));


// console.log(calculateRectSize());
// console.log(calculateRectSize(10));
// console.log(calculateRectSize('10'));
//  console.log(calculateRectSize(-1));
// console.log(calculateRectSize(10, 13));
// console.log(calculateRectSize(10, '13'));
// console.log(calculateRectSize(10, -1));


//3.사다리꼴 테스트 
// console.log('getArea(\'trape\')', getArea('trape'));
// console.log('getArea(\'trape\', 10)', getArea('trape',10));
// console.log('getArea(\'trape\', \'10\')', getArea('trape','10'));
//  console.log('getArea(\'trape\', 10)', getArea('trape',-1));
// console.log('getArea(\'trape\', 10, 15)', getArea('trape', 10, 15));
// console.log('getArea(\'trape\', 10, \'15\')', getArea('trape', 10, '15'));
// console.log('getArea(\'trape\', 10, -1)', getArea('trape', 10, -1));
// console.log('getArea(\'trape\', 10, 3,5)', getArea('trape', 10, '3',5));
// console.log('getArea(\'trape\', 10, 3,5)', getArea('trape', 10, -1,5));


//  console.log(calculateTrapeSize());
// console.log(calculateTrapeSize(10));
// console.log(calculateTrapeSize('10'));
// console.log(calculateTrapeSize(-1));
// console.log(calculateTrapeSize(10, 13, 5));
// console.log(calculateTrapeSize(10, -1,5));
// console.log(calculateTrapeSize(10, -1));

//배열을 이용한 로깅 

console.log(calculateCircleSize(10));
console.log(getArea('circle',2)); 
console.log(calculateRectSize(10, 13));
console.log(calculateTrapeSize(10, 13, 5));
getCircle();
getReport(); 
// > 계산이 1번 일어났습니다. 

//getCircle() 1
// > 계산이 2번 일어났습니다. 

//getArea('circle',2) 
// > 계산이 3번 일어났습니다. 

//getArea('rect',2,3) 
// > 계산이 4번 일어났습니다. 

//getReport() //getReport가 불려지면, 함수 호출된 순서를 출력한다.
// > 계산수행순서 : circle, circle, circle, rect
// 계산이 될 때만 기록한다고 가정하고 진행했습니다.