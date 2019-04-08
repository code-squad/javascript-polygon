const Area = require('./Areas.js')


const {log} = console

log(Area.circle(4));
log(Area.square(2,3));
log(Area.trapezoid(3,4,5));
log(Area.cylinder(3,3));
log(Area.cylinder(3,4,5,6));
log(Area.circle("안녕?"));
