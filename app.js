const Area = require('./area.js')

const calcArea = new Area()

const {log} = console

log(calcArea.getCircleArea(2)) 
log(calcArea.getRectArea(2, 4)) 
log(calcArea.getTrapeArea(1, 2, 4))
log(calcArea.getCylineArea(2, 4))