<<<<<<< HEAD
const AreaOfPolygon = require('./module/AreaOfPolygon');

const callStack = [];

function getTypeOfPolygon(typeOfPolygon, ...args) {

    if (typeOfPolygon === 'circle') {
        return AreaOfPolygon.getAreaOfCircle(...args)

    } else if (typeOfPolygon === 'rect') {
        return AreaOfPolygon.getAreaOfSquare(...args)

    } else if (typeOfPolygon === 'trapezoid') {
        return AreaOfPolygon.getAreaOfTrapezoid(...args)
    }

}



function getArea(typeOfPolygon, ...args) {
    callStack.push({ 'typeOfPolygon': typeOfPolygon, 'result': getTypeOfPolygon(typeOfPolygon, ...args) })
    return getTypeOfPolygon(typeOfPolygon, ...args)
}

function printExecutionSequence() {
    console.log(callStack)
}

if (require.main === module) {
    getArea('trapezoid', 2, 3, 5);
    getArea('circle', 2)
    getArea('circle', 2, 3)
    getArea('circle', 2, 3, 4)
    printExecutionSequence();
} else {
    console.log('Required as a module')
=======

const AreaOfPolygon = require('./module/AreaOfPolygon');

const callStack = [];

function getTypeOfPolygon(typeOfPolygon, ...args) {

    if (typeOfPolygon === 'circle') {
        return AreaOfPolygon.getAreaOfCircle(...args)

    } else if (typeOfPolygon === 'rect') {
        return AreaOfPolygon.getAreaOfSquare(...args)

    } else if (typeOfPolygon === 'trapezoid') {
        return AreaOfPolygon.getAreaOfTrapezoid(...args)
    }

}


function getArea(typeOfPolygon, ...args) {
    callStack.push({ 'typeOfPolygon': typeOfPolygon, 'result': getTypeOfPolygon(typeOfPolygon, ...args) })
    return getTypeOfPolygon(typeOfPolygon, ...args)
}

function printExecutionSequence() {
    console.log(callStack)
>>>>>>> Update step2-2 mission
}

<<<<<<< HEAD

=======
if (require.main === module) {
    getArea('trapezoid', 2, 3, 5);
    getArea('circle', 2)
    getArea('circle', 2, 3)
    getArea('circle', 2, 3, 4)
    printExecutionSequence();
} else {
    console.log('Required as a module')
}
>>>>>>> Update step2-2 mission
