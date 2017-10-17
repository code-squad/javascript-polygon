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
    for (var _len = arguments.length, theArgs = Array(_len), _key = 0; _key < _len; _key++) {
        theArgs[_key] = arguments[_key];
    }

    var len = theArgs.length;
    var checkErr = checkValue(len, theArgs);
    if (checkErr) return checkErr;
    if (len !== 1) {
        return "1개의 인자가 필요합니다";
    }
    if (theArgs[0] <= 0) return "반지름은 0보다 커야 합니다";
    var radius = theArgs[0];

    execution.push("circle");
    return Math.PI * radius * radius;
};
var calculateRect = function calculateRect() {
    for (var _len2 = arguments.length, theArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        theArgs[_key2] = arguments[_key2];
    }

    var len = theArgs.length;
    var checkErr = checkValue(len, theArgs);
    if (checkErr) return checkErr;
    if (len !== 2) {
        return "2개의 인자가 필요합니다";
    }
    if (theArgs[0] <= 0) return big("밑변");
    if (theArgs[1] <= 0) return big("높이");
    var width = theArgs[0],
        height = theArgs[1];


    execution.push("rect");
    return width * height;
};
var calculateTrapezoid = function calculateTrapezoid() {
    for (var _len3 = arguments.length, theArgs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        theArgs[_key3] = arguments[_key3];
    }

    var len = theArgs.length;
    var checkErr = checkValue(len, theArgs);
    if (checkErr) return checkErr;
    if (len !== 3) {
        return "3개의 인자가 필요합니다";
    }
    if (theArgs[0] <= 0) return big("밑변");
    if (theArgs[1] <= 0) return big("윗변");
    if (theArgs[2] <= 0) return big("높이");
    var base = theArgs[0],
        upper = theArgs[1],
        height = theArgs[2];


    execution.push("trapezoid");
    return (base + upper) / 2 * height;
};
var getArea = function getArea(name) {
    switch (name) {
        case "circle":
            var len = arguments.length <= 1 ? 0 : arguments.length - 1;
            if (len === 1) {
                console.log(calculateCircle(arguments.length <= 1 ? undefined : arguments[1]));
            } else if (len === 2) {
                for (var i = arguments.length <= 1 ? undefined : arguments[1], count = arguments.length <= 2 ? undefined : arguments[2]; i <= count; i++) {
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
var length = 0;
execution.push = function () {
    print(++length);
    return Array.prototype.push.apply(this, arguments);
};

getArea('circle', 2);
// getArea('rect', 10, 15);
// getArea('trapezoid', 10, 15, 12);
// getArea('circle', 1, 15);
getReport();