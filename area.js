"use strict";

var big = function big(text) {
    return text + "은(는) 0보다 커야 합니다";
};
var checkValue = function checkValue(len, theArgs) {
    if (len === 0) {
        return "최소 한가지 값이 필요합니다";
    }
    for (var i = 0; i < len; i++) {
        if (!Number.isInteger(theArgs[i])) {
            return "숫자형타입만 계산이 가능합니다.";
        }
    }
    return false;
};
var calculateCircle = function calculateCircle() {
    for (var len = arguments.length, theArgs = [], key = 0; key < len; key++) {
        theArgs[key] = arguments[key];
    }

    var length = theArgs.length;
    var requireArguments = "1개의 인자가 필요합니다";
    var checkErr = checkValue(length, theArgs);
    if (checkErr) return checkErr;
    if (length !== 1) return requireArguments;
    if (theArgs[0] <= 0) return big("반지름");
    var radius = theArgs[0];
    var circle = Math.PI * radius * radius;

    execution.push("circle");
    return circle;
};
var calculateRect = function calculateRect() {
    for (var len = arguments.length, theArgs = [], key = 0; key < len; key++) {
        theArgs[key] = arguments[key];
    }

    var length = theArgs.length;
    var requireArguments = "2개의 인자가 필요합니다";
    var checkErr = checkValue(length, theArgs);
    if (checkErr) return checkErr;
    if (length !== 2) return requireArguments;
    if (theArgs[0] <= 0) return big("밑변");
    if (theArgs[1] <= 0) return big("높이");
    var width = theArgs[0],
        height = theArgs[1];
    var rect = width * height;


    execution.push("rect");
    return rect;
};
var calculateTrapezoid = function calculateTrapezoid() {
    for (var len = arguments.length, theArgs = [], key = 0; key < len; key++) {
        theArgs[key] = arguments[key];
    }

    var length = theArgs.length;
    var requireArguments = "3개의 인자가 필요합니다";
    var checkErr = checkValue(length, theArgs);
    if (checkErr) return checkErr;
    if (length !== 3) return requireArguments;
    if (theArgs[0] <= 0) return big("밑변");
    if (theArgs[1] <= 0) return big("윗변");
    if (theArgs[2] <= 0) return big("높이");
    var base = theArgs[0],
        upper = theArgs[1],
        height = theArgs[2];
    var trapezoid = (base + upper) / 2 * height;


    execution.push("trapezoid");
    return trapezoid;
};
var getArea = function getArea(name) {
    switch (name) {
        case "circle":
            var length = arguments.length <= 1 ? 0 : arguments.length - 1;
            var radius = arguments.length <= 1 ? undefined : arguments[1];
            if (length === 1) {
                console.log(calculateCircle(radius));
            } else if (length === 2) {
                var count = arguments.length <= 2 ? undefined : arguments[2];
                for (var i = radius; i <= count; i++) {
                    console.log(calculateCircle(i));
                }
            }
            break;
        case "rect":
            console.log(calculateRect(arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]));
            break;
        case "trapezoid":
            console.log(calculateTrapezoid(arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2], arguments.length <= 3 ? undefined : arguments[3]));
            break;
        default:
            console.log("Sorry, we are out of " + name + ".");
    }
};
var getReport = function getReport() {
    console.log("계산수행순서 : " + execution);
};
var print = function print(num) {
    console.log("계산이 " + num + "번 일어났습니다.");
};

var execution = [];
var lengthExecution = 0;
execution.push = function () {
    print(++lengthExecution);
    return Array.prototype.push.apply(this, arguments);
};

getArea('circle', 2);
getArea('rect', 10, 15);
getArea('trapezoid', 10, 15, 12);
getArea('circle', 1, 15);
getReport();