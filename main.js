const polygon = require('./polygon');

(async () => {
  try{
    await polygon.getCircle(3)
    await polygon.getSquare(5, 2)
    await polygon.getTrapezoid()
    await polygon.getCylinder(1, 1)
    await polygon.printExecutionSequence()
    await polygon.getArea('circle', 2, 5)
    await polygon.getArea('circle', 5)
    await polygon.getArea('square', 2, 5)
    await polygon.getArea('trapezoid', 2, 5, 4)
    await polygon.getArea('cylinder', 2, 5)
    await polygon.printExecutionSequence()    

  } catch(e) {
    console.log(e)
    throw e
  }
  
  
  polygon.shutdownRl()
})()