function isNumber(number) {
    return (typeof number === "number") && Number.isFinite(number);
}
function isValidArgument(element, count) {
    for (let i = 0; i < element.length; i++) {
        if (!isNumber(element[i])) throw Error("숫자 입력하슈");
        if (element.length !== count) throw Error(`${count}개 필요함`);
        return true;
    }
}

function calculateCircleArea(radius, recursive) {
    logCalledFunction("circle");
    if (arguments.length === 2) {
        isValidArgument(arguments, 2);
        return calculateCircleAreaRecursive(radius, recursive);
    } else {
        isValidArgument(arguments, 1);
        const PI = Math.PI;
        return radius ** 2 * PI;
    }
}

function calculateCircleAreaRecursive(start, end) {
    if (start === end) {
        return calculateCircleArea(start);
    }

    return calculateCircleArea(start) + calculateCircleAreaRecursive(start + 1, end);
}

function calculateSquareArea(width, height = width) {
    logCalledFunction("rect");
    isValidArgument(arguments, 2);

    return width * height;
}

function calculateTrapezoidArea(bottom, top, height) {
    logCalledFunction("trapezoid");
    isValidArgument(arguments, 3);
    return (bottom + top) * height / 2;
}

function calculateCylinderArea(radius, height) {
    logCalledFunction("cylinder");
    isValidArgument(arguments, 2);
    const PI = Math.PI;
    return (calculateCircleArea(radius) * 2) + 2 * radius * PI * height;
}

const getArea = function (name, ...args) {
    const funcs = {
        "circle": calculateCircleArea,
        "rect": calculateSquareArea,
        "trapezoid": calculateTrapezoidArea,
        "cylinder": calculateCylinderArea
    };
    return funcs[name](...args);
}

var calledFunctionLog = [];

function printExecutionSequence() {
    calledFunctionLog.forEach(function (command) {
        console.log(command);
    });
}

function logCalledFunction(name) {
    calledFunctionLog.push(name);
}


//tests
console.log(getArea('circle', 4));
console.log(getArea('circle', 5));
console.log(getArea('rect', 4, 5));
console.log(getArea('circle', 1, 3));
printExecutionSequence();
console.log(getArea('cylinder',4,5));
console.log(getArea("trapezoid", 3,4,5));
printExecutionSequence();

module.exports.circle = calculateCircleArea;
module.exports.square = calculateSquareArea;
module.exports.trapezoid = calculateTrapezoidArea;
module.exports.cylinder = calculateCylinderArea;
module.exports.getArea = getArea;