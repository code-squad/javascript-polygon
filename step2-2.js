const printStack = [];
function getArea() {
    let result = 0;
    switch (arguments[0]) {
        case "circle" :
            if(arguments.length == 2) {
                result = parseInt(arguments[1]*arguments[1]*Math.PI);
                printStack.push([arguments[0], result]);
                return result;
            } else if (arguments.length == 3) {
                let sum = 0;
                for(let i = arguments[1]; i <= arguments[2]; i++) {
                    sum += getArea('circle', i);
                }
                return parseInt(sum);
            }
        
        case "rect" :
            result = parseInt(arguments[1]*arguments[2]);
            printStack.push([arguments[0], result]);
            return result;
        case "trapezoid" :

            result = parseInt(((arguments[1]+arguments[2])*arguments[3])/2);
            printStack.push([arguments[0], result]);
            return result; 
        default:
            console.log("Wrong Parameter!!");
            return;
    }
}

function printExecutionSequence() {
    console.log(printStack);
}

console.log(getArea('circle', 3));
console.log(getArea('rect', 3, 5));
console.log(getArea('trapezoid', 3, 5, 5));
console.log(getArea('circle', 3, 5));

printExecutionSequence();