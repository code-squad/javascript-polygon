const cal = require('./calculators');

const getCircle = cal.getCircleArea;
const getRect = cal.getSquareArea;
const getTrapezoid = cal.getTrapezoidArea;

const stacks = [];

const getFigure = function(figure) {
    if (figure == 'circle') {
        return getCircle;
    } else if (figure == 'rect') {
        return getRect;
    } else if (figure == 'trapezoid') {
        return getTrapezoid;
    }
}

const getArea = function(figure, ...param) {
    stacks.push({'figure' : figure, 'result' : getFigure(figure)(...param)})

    return getFigure(figure)(...param);
}

const printExecutionSequence = () => {
    for (let stack of stacks) {
        process.stdout.write(stack.figure + " : " + stack.result + " ");
    }
}