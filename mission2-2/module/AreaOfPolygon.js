const PI = Math.PI;
const checkErrors = require('./checkErrors');

const getAreaOfCircle = function (firstRadius, lastRadius, ...args) {
    checkErrors.checkNumber(arguments)            // 뒤에서 인자값이 1개인지 2개인지 확인하기 때문에
    checkErrors.checkNumOfArgs(args, firstRadius) // 여기서는 인자값이 하나 들어있는지만 확인하면 된다.

    if (arguments.length === 1) {

        return PI * firstRadius ** 2

    } else if (arguments.length === 2) {

        if (firstRadius === lastRadius) {
            return this.getAreaOfCircle(firstRadius) // 직접 출력해보기. 디버거 이용
        }
        return this.getAreaOfCircle(firstRadius, lastRadius - 1) + this.getAreaOfCircle(lastRadius)
    }
}

const getAreaOfSquare = function (weight, height, ...args) {
    checkErrors.checkNumber(arguments)
    checkErrors.checkNumOfArgs(args, weight, height)
    return weight * height
}

const getAreaOfTrapezoid = function (upperBase, base, height, ...args) {
    checkErrors.checkNumber(arguments)
    checkErrors.checkNumOfArgs(args, upperBase, base, height)
    return (upperBase + base) * height / 2
}

const getAreaOfCylinder = function (radius, height, ...args) {
    checkErrors.checkNumber(arguments)
    checkErrors.checkNumOfArgs(args, radius, height)
    return (2 * PI * radius * height) + (2 * PI * radius ** 2);
}

module.exports = {
    getAreaOfCircle,
    getAreaOfSquare,
    getAreaOfTrapezoid,
    getAreaOfCylinder
}