const area = require('./area');

//test valid args
(function (){    
    console.log(area.validArgs(arguments,3) === true)
})(1,2,3);

(function (){    
    console.log(area.validArgs(arguments,3) === false)
})(1,"10",3);

(function (){    
    console.log(area.validArgs(arguments,2) === false)
})(1, 2 ,3);

//test area of circle
console.log(area.areaOfCircle(2));
console.log(area.areaOfCircle(0));
console.log(area.areaOfCircle('10'));
console.log(area.areaOfCircle(1,2,));