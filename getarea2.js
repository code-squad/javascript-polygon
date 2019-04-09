const stacks = [];
function circleArea(r) {
    checkArguments(r)
    let answer = Math.PI * r * r;
    stacks.push(`circle : ${answer}`)
    return answer;
}

function squareArea(w, h) {
    checkArguments(w, h)
    let answer = w * h;
    stacks.push(`square : ${answer}`)
    return answer;
}

function trapezoidArea(a, b, h) {
    checkArguments(a, b, h)
    let answer = (a + b) * h / 2;
    stacks.push(`trapezoid : ${answer}`)
    return answer;
}

function cylinderArea(r, h) {
    checkArguments(r, h)
    let answer = circleArea(r) * h;
    stacks.push(`cylinder : ${answer}`)
    return answer;
}

function checkArguments(...args) {
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] === 'undefined') {
            throw Error('인자갯수가 부족합니다.')
        } else if (typeof args[i] !== 'number') {
            throw Error('입력값이 숫자가 아닙니다')
        }
    }
}

function getArea(...args) {
    let answer = 0;
    switch (args[0]) {
        case 'circle':
            if (args.length === 2) {
                answer = circleArea(args[1])
            } else {
                answer = accumulateCircle(args[1], args[2])
            }
            break;
        case 'square':
            answer = squareArea(args[1], args[2])
            break;
        case 'trapezoid':
            answer = trapezoidArea(args[1], args[2], args[3])
            break;
        case 'cylinder':
            answer = cylinderArea(args[1], args[2])
            break;
        default:
            throw Error('첫번째 인자를 다음중 하나로 입력해주세요. "circle", "square", "trapezoid", "cylinder"')
    }
    return answer;
}

function accumulateCircle(a, b) {
    if (a === b) {
        return circleArea(a);
    } else if (a < b) {
        return circleArea(a) + accumulateCircle(a + 1, b)
    } else {
        return circleArea(b) + accumulateCircle(b + 1, a)
    }
}

function printExecutionSequence() {
    let message = '<계산수행순서> \n';
    return message + stacks.join('\n')
}

console.log(circleArea(2))
console.log(getArea('circle', 1))
console.log(getArea('circle', 3, 1))
console.log(getArea('square', 3, 1))
console.log(getArea('cylinder', 3, 1))
console.log(getArea('trapezoid', 3, 1, 2))
console.log(printExecutionSequence());