const isNumber = function(a) {[...a].forEach((el) => {if(!Number.isFinite(el)) throw '숫자가 아닙니다.'})}
const lengthChecker = (funcLength,arg) => {if(funcLength !== arg.length) throw '인자의 수가 다릅니다'}
const pi = Math.PI;

function getCircleArea(r) {
    lengthChecker(1, arguments);
    isNumber(arguments);
    return Math.pow(r, 2) * pi;
}
// console.log(getCircleArea(2));
// 원의 넓이 구하기



function getSquareArea(a, b) {
    lengthChecker(2, arguments);
    isNumber(arguments);
    return a * b
}
// console.log(getSquareArea(10,150));
// 사각형의 넓이 구하기



function getTrapezoidArea(top, bottom, height) {
    lengthChecker(3, arguments);
    isNumber(arguments);
    return ((top + bottom) / 2) * height
}
// console.log(getTrapezoidArea(1,1,1))
// 사다리꼴 넓이 구하기



function getCylinder(r, h){
    lengthChecker(2, arguments);
    isNumber(arguments);
    return 2 * Math.pow(r, 2) * pi + (2 * pi * r * h)
}
// console.log(getCylinder(1, 1));
//원기둥 넓이 구하기


