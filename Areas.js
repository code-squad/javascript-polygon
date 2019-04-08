function isNumber(number) {
    return Number.isFinite(number);
}
function isValid(element, count) {
    for (let i = 0; i < element.length; i++) {
        if (!isNumber(element[i])) throw Error("숫자 입력하슈");
        if (element.length !== count) throw Error(`${count}개 필요함`);
        return true;
    }
}


function calculateCircleArea(radius) {
    isValid(arguments, 1);
    const PI = Math.PI;
    return radius ** 2 * PI;
}

function calculateSquareArea(width, height = width) {
    isValid(arguments, 2);

    return width * height;
}

function calculateTrapezoidArea(bottom, top, height) {
    isValid(arguments, 3);
    return (bottom + top) * height / 2;
}

function calculateCylinderArea(radius, height) {
    isValid(arguments, 2);
    const PI = Math.PI;
    return (calculateCircleArea(radius) * 2) + 2 * radius * PI * height;
}
module.exports.circle = calculateCircleArea;
module.exports.square = calculateSquareArea;
module.exports.trapezoid = calculateTrapezoidArea;
module.exports.cylinder = calculateCylinderArea;