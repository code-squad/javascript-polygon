//변수 const나 let으로 변경, 변수이름 개선
const ExecutionSequenceArray = [];

//arrow함수 이용
function printExecutionSequence() {
    ExecutionSequenceArray.forEach((v, i) => {
        console.log((i + 1) + '번째 : ' + v)
    })
}

//1. isNum함수 개선 isNum함수를 위한 isThatNum 함수만들기
function isNum(number1, number2, number3) {
    for (let i = 1; i <= arguments.length; i++) {
        if (isTypeNumber(arguments[i - 1]) === false) {
            return false
        }
    }
    return true
}

function isTypeNumber(number) {
    return toString.call(number) === '[object Number]'
}


//2. 인자를 구분할 때 !== 를 최대한 안쓰고 단순화시키는 걸로 개선
//3. 계산하는 함수들의 이름과 인자들의 명칭들 모두 변경
function CalcCircleWidth(radius1, radius2) {
    if (radius1 > radius2) {
        console.log(radius1 + '부터' + radius2 + '까지라구요? 다시 한번 생각해주세요')
        return;
    }
    if (isNum(...arguments) && arguments.length === 1) {
        const circleWidth = radius1 * radius1 * Math.PI
        console.log('반지름이 ' + radius1 + '인 원의넓이는' + circleWidth + '입니다.');
        ExecutionSequenceArray.push('circle');
        return;
    } else if (isNum(...arguments) && arguments.length === 2) {
        for (let i = radius1; i <= radius2; i++) {
            console.log('반지름이' + i + '인 원의 넓이 : ' + (i * i * Math.PI));
            ExecutionSequenceArray.push('circle')
        }
        return;
    }
    console.log('인자의 갯수가 맞지 않거나 숫자가 아닙니다.');
}


function CalcRectWidth(RectLowerSide, RectHeight) {
    if(isNum(...arguments) && arguments.length === 2) {
        const RectWidth = RectLowerSide * RectHeight
        console.log('밑변이' + RectLowerSide + '높이가' + RectHeight + '인 사각형의 넓이는' + RectWidth + '입니다.');
        ExecutionSequenceArray.push('Rect')
        return;
    }
    console.log('인자의 갯수가 맞지 않거나 숫자가 아닙니다.')
}

function sizeTrapezoid(topSide, lowerSide, height) {
    if (arguments.length != 3) {
        return console.log('인자의 개수가 맞지 않습니다.');
    } else if (isNum(topSide) || isNum(lowerSide) || isNum(height)) {
        return console.log('숫자만 계산할 수 있습니다.');
    }
    const trapezoidArea = (topSide + lowerSide) * height / 2
    console.log('윗변과 아랫변과 높이가 ' + topSide + ', ' + lowerSide + ', ' + height + '인 사다리꼴의 넓이는' + trapezoidArea + '입니다.');
    arr.push('trapezoid');
}

function sizeSylinder(radius, height) {
    if (arguments.length != 2) {
        return console.log('인자의 갯수가 맞지 않습니다.');
    } else if (isNum(radius) || isNum(height)) {
        return console.log('숫자만 계산할 수 있습니다.');
    }
    const sylinderArea = 2 * (Math.PI * radius * radius) + (2 * (radius * Math.PI) * height)
    console.log('반지름과 높이가' + radius + ', ' + height + '인 원기둥의 겉넓이는 ' + sylinderArea + '입니다.');
    arr.push('sylinder')
}

function getArea(polygon, num1, num2, num3) {
    if (polygon === 'circle' && arguments.length === 3) {
        sizeCircle(num1, num2)
    } else if (polygon === 'rect') {
        sizeSquare(num1, num2)
    } else if (polygon === 'trapezoid') {
        sizeTrapezoid(num1, num2, num3)
    } else if (polygon === 'Sylinder') {
        sizeSylinder(num1, num2)
    } else if (polygon === 'circle') {
        sizeCircle(num1)
    }
}
