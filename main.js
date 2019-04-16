const area = require("./area");

console.log(area.getArea('circle', 10));
console.log(area.getArea('circle', 1, 4));
console.log(area.getArea('rect', 10, 15));
console.log(area.getArea('trapezoid', 10, 15, 12));
console.log(area.printExecutionSequence());