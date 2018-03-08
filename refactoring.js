
const calculateErrorText = {
    noArguments: '최소 한가지 값이 필요합니다',
    hasMinus: '길이는 0보다 커야 합니다',
    hasNotNumber: '숫자형타입만 계산이 가능합니다.',
    insufficientArguments: '입력한 argument 수가 충분하지 않습니다.'
}

let getArea = (type,  ...args) => {
    switch(type){
        case 'circle': return calculateCircleSize(...args)
        case 'rect': return caculateRectSize(...args)
        case 'trape': return caculagteTrapeSize(...args)
    }
}
let printResult = (printText, caculatedSzie) => `${printText} ${caculatedSzie}`

let caculateCounts = 0;
let reportList = [];

let printCouts = () => {
    caculateCounts++;
    console.log(`계산이 ${caculateCounts} 번 일어났습니다 :ㅇ`)
}

let getReport = () => {
   console.log(reportList);
}


let inspectValidData = data => {
    if(typeof data == "number"){
        if(data > 0) return data;
        else throw new Error(calculateErrorText.hasMinus)
    }else throw new Error(calculateErrorText.hasNotNumber)
}

let calculateCircleSize = (...args) => {
    let printText = '원의 넓이는';
    let length = args.length;
    let getCircleSize = radius => {
        printCouts();
        reportList.push('circle')
        return radius*radius*Math.PI
    } 
    let printSection = (first,last, printText) => {
        for(let i= first; i<=last; i++){
            console.log(printResult(printText, getCircleSize(i)));
        }
    }
    switch(length){
        case 0: throw new Error(calculateErrorText.noArguments)  
        case 1: return printResult(printText, getCircleSize(inspectValidData(args[0])));
        case 2: return printSection(inspectValidData(args[0]),inspectValidData(args[1]),printText);
        break;
    }    
}
let caculateRectSize = (...args) => {
    const printText = {
        rect:'정사각형의 넓이는',
        square: '직사각형의 넓이는',
    } 
    let length = args.length;
    let getSquareSize = squareLength => {
        printCouts();
        reportList.push('rect');
        return squareLength*squareLength;
    };
    let getReactSize = (width,height) => {
        printCouts();
        reportList.push('rect');
        return width*height;
    };
    switch(length){
        case 0: throw new Error(calculateErrorText.noArguments)  
        case 1: return printResult(printText.rect, getSquareSize(inspectValidData(args[0])));
        case 2: return printResult(printText.square, getReactSize(inspectValidData(args[0]),inspectValidData(args[1])));
        break;
    } 
}
let caculagteTrapeSize = (...args) => {
    const printText = "사디리꼴의 넓이는";
    let length = args.length;
    let getTrapeSize = (upper, bottom, height) => {
        printCouts();
        reportList.push('trape');
        return (upper+bottom)*height/2;
    }
    switch(length){
        case 0: throw new Error(calculateErrorText.noArguments);
        case 1,2: throw new Error(calculateErrorText.insufficientArguments);
        case 3: return printResult(
            printText, 
            getTrapeSize(inspectValidData(args[0]),inspectValidData(args[1]),inspectValidData(args[2]))
        )
        break;
    }
}

// //getCircle() 
// > 계산이 1번 일어났습니다. 

// //getCircle() 
// > 계산이 2번 일어났습니다. 

// //getArea('circle',2) 
// > 계산이 3번 일어났습니다. 

// //getArea('rect',2,3) 
// > 계산이 4번 일어났습니다. 

// //getReport() //getReport가 불려지면, 함수 호출된 순서를 출력한다.
// > 계산수행순서 : circle, circle, circle, rect




//  console.log(getArea('circle',10));
//  console.log(getArea('circle',1,4));
//  console.log('caculaeCounts', caculateCounts);

  console.log(getArea('rect',1,4));
  console.log(caculateRectSize(10));
 
// console.log(calculateCircleSize(1,4));

// 

console.log(getArea('trape',4,5,4));
console.log(caculagteTrapeSize(1,4,5));
getReport();
// console.log(caculagteTrapeSize('1',4,5));
// console.log(caculagteTrapeSize(-1,4,5));

// console.log(inspectValidAllData(1,2,4));



// Object 할당 알아보기

// let inspectValidAllData = (...datas) => {
//     let validaDataListObj = {};
//     for(key in datas){
//         let validData = inspectValidData(datas[key]);
//         console.log('validaData', validData);
//         validaDataListObj = Object.assign(validaDataListObj,validData)
//     }
//     return validaDataListObj;
// }