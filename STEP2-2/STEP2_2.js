let utils = require("./STEP2_2_utils")
let result = 0;
let logList = ["<계산 수행 순서> \n"];


let getArea = (func_name, ...args) => {
    switch (func_name){
        case 'circle':
            result = utils.polygon.circle(...args);
            break;
        case 'rect': 
            result = utils.polygon.rect(...args);
            break;
        case 'trapezoid':
            result = utils.polygon.trapezoid(...args);
            break;
        case 'cylinder':
            result = utils.polygon.cylinder(...args);
            break;
    }
    addLog(func_name, result);
};

let addLog = (func_name, result) => {
    logList.push(`${func_name} : ${result}`)
}

let printExecutionSequence = (logList) => {
    logList.forEach(element => {
        console.log(element);
    });
}

getArea('circle', 3)
getArea('circle', 1, 3);
getArea('rect', 10, 15);
getArea('trapezoid', 10, 15, 12);
getArea('cylinder', 3, 7);
printExecutionSequence(logList);