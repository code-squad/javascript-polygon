const printStack = [];
function getArea() {
    let result = 0;
    switch (arguments[0]) {
        
        case "circle" :
            circle(arguments);
            break;
        case "rect" :
            rectangle(arguments);
            break;
        case "trapezoid" :
            trapezoid(arguments);
            break;
        default:
            console.log("Wrong Parameter!!");
            return;
    }
}

function printExecutionSequence() {
    console.log(printStack);
}


function circle() {
    if(arguments[0].length == 2) {
        result = parseInt(arguments[0][1]*arguments[0][1]*Math.PI);
        printStack.push([arguments[0][0], result]);
        return result;
    } else if (arguments[0].length == 3) {
        let sum = 0;
        for(let i = arguments[0][1]; i <= arguments[0][2]; i++) {
            sum += getArea('circle', i);
        }
        return parseInt(sum);
    }
}

function rectangle() {
    result = parseInt(arguments[0][1]*arguments[0][2]);
    printStack.push([arguments[0][0], result]);
    return result;
}

function trapezoid() {
    result = parseInt(((arguments[0][1]+arguments[0][2])*arguments[0][3])/2);
    printStack.push([arguments[0][0], result]);
    return result; 
}


getArea('circle', 3);
getArea('rect', 3, 5);
getArea('trapezoid', 3, 5, 5);
getArea('circle', 3, 5);

printExecutionSequence();
