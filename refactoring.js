const ErrorText = {
    noArguments: '최소 한가지 값이 필요합니다',
    hasMinus: '길이는 0보다 커야 합니다',
    hasNotNumber: '숫자형타입만 계산이 가능합니다.',
    insufficientArguments: '입력한 argument 수가 충분하지 않습니다.'
}

const caculateData = {
    caculateCounts: 0,
    reportList: [],
};

const PrintText = {
    circle: '원의 넓이는',
    square: '정사각형의 넓이는',
    react: '직사각형의 넓이는', 
    trape: '사디리꼴의 넓이는',
};

const Type = {
    Circle: 'circle',
    Rect: 'rect',
    Trape: 'trape',
};

let getArea = (type,  ...args) => {
    switch(type){
        case Type.Circle: return calculateCircleSize(...args)
        case Type.Rect: return caculateRectSize(...args)
        case Type.Trape: return caculagteTrapeSize(...args)
    }
}
let printResult = (printText, caculatedSzie) => `${printText} ${caculatedSzie}`

let printCouts = () => {
    console.log(`계산이 ${caculateData.caculateCounts} 번 일어났습니다 :ㅇ`)
}
let caculateReport = (type) => {
    caculateData.caculateCounts++;
    caculateData.reportList.push(type);
    printCouts();
} 

let getReport = () => {
   console.log(caculateData.reportList);
}

let inspectValidData = data => {
    if(typeof data !== "number") throw new Error(ErrorText.hasNotNumber)
    if(data > 0) return data;
    else throw new Error(ErrorText.hasMinus)
     
}
let inspectValidAllData = (...datas) => {
    let validaDataList = [];
    for(key in datas){
        let validData = inspectValidData(datas[key]);
        validaDataList.push(validData);
    }
    return validaDataList;
}

let calculateCircleSize = (...args) => {
    let printText = PrintText.circle;
    let length = args.length;
    let getCircleSize = radius => {
        caculateReport(Type.Circle);
        return radius*radius*Math.PI
    } 
    let printSection = (first,last, printText) => {
        for(let i= first; i<=last; i++){
            console.log(printResult(printText, getCircleSize(i)));
        }
    }
    switch(length){
        case 0: throw new Error(ErrorText.noArguments)  
        case 1: return printResult(printText, getCircleSize(inspectValidData(args[0])));
        case 2: return printSection(inspectValidData(args[0]),inspectValidData(args[1]),printText);
        break;
    }    
}
let caculateRectSize = (...args) => {
    let printText = {
        rect: PrintText.rect,
        square: PrintText.square,
    } 
    let length = args.length;
    let getSquareSize = squareLength => {
        caculateReport(Type.Rect);
        return squareLength*squareLength;
    };
    let getReactSize = (width,height) => {
        caculateReport(Type.Rect);
        return width*height;
    };
    switch(length){
        case 0: throw new Error(ErrorText.noArguments)  
        case 1: return printResult(printText.square, getSquareSize(inspectValidData(args[0])));
        case 2: return printResult(printText.rect, getReactSize(inspectValidData(args[0]),inspectValidData(args[1])));
        break;
    } 
}
let caculagteTrapeSize = (...args) => {
    const printText = PrintText.trape;
    let length = args.length;
    let getTrapeSize = (upper, bottom, height) => {
        caculateReport(Type.Trape);
        return (upper+bottom)*height/2;
    }
    switch(length){
        case 0: throw new Error(ErrorText.noArguments);
        case 1,2: throw new Error(ErrorText.insufficientArguments);
        case 3: return printResult(
            printText, 
            getTrapeSize(...inspectValidAllData(...args).slice(0,3))
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

//   console.log(getArea('rect',1,4));
//   console.log(caculateRectSize(10));
 
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