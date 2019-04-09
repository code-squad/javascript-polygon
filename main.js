const polygon = require('./polygon');

(async () => {
    polygon.print( 'circle', await polygon.getCircle(2) );
    polygon.print( 'rect', await polygon.getRect(2, 4) );
    polygon.print( 'trapezoid', await polygon.getTrapezoid(2, 4, 5) );
    polygon.print( 'cylinder', await polygon.getCylinder(2, 5) );
    polygon.print( 'circle', await polygon.getArea('circle', 1) );
    polygon.print( 'circle', await polygon.getArea('circle', 1, 4) );
    polygon.print( 'circle', await polygon.getArea('trapezoid') );
    polygon.print( 'rect', await polygon.getArea('rect') );

    polygon.readLineClose();
    polygon.printExecutionSequence();
})();