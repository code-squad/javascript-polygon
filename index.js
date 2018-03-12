function checkNumberOfInput(validNum, inputVal) {
    return (validNum === inputVal.length) ?  1 : 0;
}
function calculateCircle(radius) {
    let result;
    if(!checkNumberOfInput(1, arguments)) {
        result = "1개의 인자가 필요합니다.";
    }
    else {
        result = radius * radius * Math.PI;
    }
    return console.log(result);
}
function calculateSquare(width, height) {
    let result;
    if(!checkNumberOfInput(2, arguments)) {
        result = "2개의 인자가 필요합니다.";
    }
    else {
        result = width * height;
    }
    return console.log(result);
}
function calculateTrapezoid(upper, lower, height) {
    let result;
    if(!checkNumberOfInput(3, arguments)) {
        result = "3개의 인자가 필요합니다.";
    }
    else {
        result = (upper + lower) * height;
    }
    return console.log(result);
}

calculateCircle(10);
calculateSquare(10,15);
calculateTrapezoid(10,5,12);