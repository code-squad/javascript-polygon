/*
[ ]필요한 인자를 입력받아 사각형의 넓이를 계산하는 함수를 만든다.
[ ]필요한 인자를 입력받아 사다리꼴의 넓이를 계산하는 함수를 만든다.
[ ]필요한 인자를 입력받아 원기둥의 넒이를 계산하는 함수를 만든다.
*/

/*
area.js
Caculate various area of shapes
*/

function validArgs(args, length) {
    if (args.length != length) {
        return false
    }
    const arr = Array.from(args);
    return arr.every(n => (typeof n === "number" && n != 0));
}

function areaOfCircle(radius) {
    if(!validArgs(arguments, 1)) {
        return -1;
    }    
    return Math.PI * radius;
}

module.exports = {
    areaOfCircle,
};