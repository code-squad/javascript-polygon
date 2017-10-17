"use strict";

function requireArguments(num) {
    return num + "개의 인자가 필요합니다";
};

function checkPositive(text) {
    return text + "은(는) 0보다 커야 합니다";
};

function checkValue(type, len, theArgs) {
    if (len === 0) {
        return "최소 한가지 값이 필요합니다";
    }
    for (var i = 0; i < len; i++) {
        if (!Number.isInteger(theArgs[i])) {
            return "숫자형타입만 계산이 가능합니다.";
        }
    }
    switch (type) {
        case "circle":
            if (len !== 1) return requireArguments(1);
            if (theArgs[0] <= 0) return checkPositive("반지름");
            break;
        case "rect":
            if (len !== 2) return requireArguments(2);
            if (theArgs[0] <= 0) return checkPositive("밑변");
            if (theArgs[1] <= 0) return checkPositive("높이");
            break;
        case "trapezoid":
            if (len !== 3) return requireArguments(3);
            if (theArgs[0] <= 0) return checkPositive("밑변");
            if (theArgs[1] <= 0) return checkPositive("윗변");
            if (theArgs[2] <= 0) return checkPositive("높이");
            break;
        default:
            break;
    }
    return false;
};

function calculateCircle(radius) {
    var theArgs = Array.prototype.slice.call(arguments);

    var checkErr = checkValue("circle", theArgs.length, theArgs);
    if (checkErr) return console.log(checkErr);


    var circle = Math.PI * radius * radius;

    execution.push("circle");
    return console.log(circle);
};

function calculateRect(width, height) {
    var theArgs = Array.prototype.slice.call(arguments);

    var checkErr = checkValue("rect", theArgs.length, theArgs);
    if (checkErr) return console.log(checkErr);


    var rect = width * height;

    execution.push("rect");
    return console.log(rect);
};

function calculateTrapezoid(base, upper, height) {
    var theArgs = Array.prototype.slice.call(arguments);

    var checkErr = checkValue("trapezoid", theArgs.length, theArgs);
    if (checkErr) return console.log(checkErr);


    var trapezoid = (base + upper) / 2 * height;

    execution.push("trapezoid");
    return console.log(trapezoid);
};

function getArea(type) {
    var args = Array.prototype.slice.call(arguments, 1);
    var length = args.length;
    var checkErr = checkValue(type, length, args);
    if (checkErr && !(type === "circle" && length === 2)) return console.log(checkErr);
    switch (type) {
        case "circle":
            var radius = args[0];
            if (length === 1) {
                calculateCircle(radius);
            } else if (length === 2) {
                var count = args[1];
                for (var i = radius; i <= count; i++) {
                    calculateCircle(i);
                }
            }
            break;
        case "rect":
            var width = args[0];
            var height = args[1];
            calculateRect(width, height);
            break;
        case "trapezoid":
            var base = args[0];
            var upper = args[1];
            var height = args[2];
            calculateTrapezoid(base, upper, height);
            break;
        default:
            console.log("Sorry, we are out of " + type + ".");
    }
};

function getReport() {
    console.log("계산수행순서 : " + execution);
};

function printCalculation(num) {
    console.log("계산이 " + num + "번 일어났습니다.");
};

var execution = [];
var lengthExecution = 0;
execution.push = function () {
    printCalculation(++lengthExecution);
    return Array.prototype.push.apply(this, arguments);
};

getArea('circle', 2);
getArea('rect', 10, 15);
getArea('trapezoid', 10, 15, 12);
getArea('circle', 1, 15);
getReport();