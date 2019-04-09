/*
area.js
Caculate various area of shapes
*/

function validArgs(args, length) {
    if (args.length != length) {
        return false
    }
    const arr = Array.from(args);
    return arr.every(n => (typeof n === "number" && n != 0));
}

function areaOfCircle(radius) {
    if(!validArgs(arguments, 1)) {
        return -1;
    }    
    return Math.PI * radius * radius;
}

function areaOfRectangle(w, h) {
    if(!validArgs(arguments, 2)) {
        return -1;
    }    
    return w * h;
}

function areaOfTrapezoid(bottom, top, h) {
    if(!validArgs(arguments, 3)) {
        return -1;
    }    
    return (bottom * top) * h * 0.5;
}

function volumeOfCylinder(r, h) {
    if(!validArgs(arguments, 2)) {
        return -1;
    }    
    return areaOfCircle(r) * h;
}

module.exports = {
    areaOfCircle,
    areaOfRectangle,
    areaOfTrapezoid,
    volumeOfCylinder
};