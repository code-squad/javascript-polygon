const { pow, PI } = Math;
const AreaCalculator = require('./AreaCalculator');
const areaCalculator = new AreaCalculator();

console.log( areaCalculator.getArea('rect', 1, 5) );
console.log( areaCalculator.getArea('trapezoid', 2, 5, 7) );
console.log( areaCalculator.getArea('cylinder', 1, 5) );
console.log( areaCalculator.getArea('circle', 1, 2) );
console.log( areaCalculator.getArea('circle', 2) );
console.log( areaCalculator.getArea('circle', '0') );
console.log( areaCalculator.getArea('sphere', 5 ) );
areaCalculator.printExecutionSequence();
