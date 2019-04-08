function circleArea(r) {
    checkArguments(r)
    return Math.PI * r * r;
}

function squareArea(w, h) {
    checkArguments(w, h)
    return w * h;
}

function trapezoidArea(a, b, h) {
    checkArguments(a, b, h)
    return (a + b) * h / 2;
}

function cylinderArea(r, h) {
    checkArguments(r, h)
    return circleArea(r) * h;
}

function checkArguments() {
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'undefined') {
            throw Error('인자갯수가 부족합니다.')
        } else if (typeof arguments[i] !== 'number') {
            throw Error('숫자가 아닙니다')
        }
    }
}

console.log(circleArea('qwe'))
console.log(squareArea(4, 5))
console.log(trapezoidArea(1, 2, 3))
console.log(cylinderArea(2, 5))