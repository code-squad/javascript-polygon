/*
area.js
Caculate various area of shapes
*/

function validArgs(...args) {
    [length, rests] = args; 
    const arr = Array.from(rests);
    if (arr.length != length) {
        return false
    }    
    return arr.every(n => (typeof n === "number" && n != 0));
}

function areaOfCircle(radius) {
    if(!validArgs(1, arguments)) {
        return -1;
    }    
    return Math.PI * radius * radius;
}

function areaOfRectangle(w, h) {
    if(!validArgs(2, arguments)) {
        return -1;
    }    
    return w * h;
}

function areaOfTrapezoid(bottom, top, h) {
    if(!validArgs(3, arguments)) {
        return -1;
    }    
    return (bottom * top) * h * 0.5;
}

function volumeOfCylinder(r, h) {
    if(!validArgs(2, arguments)) {
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