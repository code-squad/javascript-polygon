const calc = require('./calc');

const {log} = console;

// // console.log(circleArea('4'))
// // console.log(rectancleArea(4,'5'));
// // rectancleArea('ㄱ','5','5');
// // console.log(rectancleArea('5'));
// // console.log(cylinderArea('4',6))

// log(calc.getCircleArea(4,6));

log(calc.getArea('circle',10));
log(calc.getArea('circle',1,3));
log(calc.getArea('rect',10,14));
log(calc.getArea('trapezoid',10,14,5));
