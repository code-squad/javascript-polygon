const numberTypeChecker = function (a) { [...a].forEach((el) => { if (!Number.isFinite(el)) throw new Error('숫자가 아닙니다.') }) }
const lengthChecker = (funcLength, arg) => { if (funcLength !== arg.length) throw new Error('인자의 수가 다릅니다') }
const {PI, pow} = Math;

module.exports = {
    numberTypeChecker,
    lengthChecker,
    PI,
    pow
}