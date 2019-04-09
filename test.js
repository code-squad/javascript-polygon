const area = require('./area');

//test area of circle
console.log(area.areaOfCircle(0) === -1);
console.log(area.areaOfCircle('10') === -1);
console.log(area.areaOfCircle(1,2) === -1); 

console.log(area.areaOfCircle(2));//12.56s
console.log(area.areaOfRectangle(5,4) === 20);
console.log(area.areaOfTrapezoid(5, 7, 2) === 12);
console.log(area.volumeOfCylinder(2, 2)); // 25.13
