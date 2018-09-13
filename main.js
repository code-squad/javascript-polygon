/*
Requirements
    반지름을 입력받아 원의 넓이를 계산하는 함수를 만든다.
    필요한 인자를 입력받아 사각형의 넓이를 계산하는 함수를 만든다.
    필요한 인자를 입력받아 사다리꼴의 넓이를 계산하는 함수를 만든다.
    필요한 인자를 입력받아 원기둥의 넒이를 계산하는 함수를 만든다.
    숫자가 아니면 에러를 반환하도록 구현한다.
    인자의갯수가 부족하면 에러를 반환한다.
*/
const computeArea = {
    circle(radius) {
        return Math.PI * Math.pow(radius, 2);
    },
    square(width, height) {
        return width * height;
    },
    trapezoid(top, bottom, height) {
        return 1/2 * (top + bottom) * height;
    },
    cylinder(radius, height) {
        const circleSize = Math.PI * Math.pow(radius, 2);
        const circumference = 2 * Math.PI * radius
        return (circumference * height) + (2 * circleSize);
    }
};

const printArea = {
    //Return value through console.log
    circle(circleRadius, circleArea) {
        console.log(`입력하신 반지름 ${circleRadius}의 원 넓이는 ${circleArea}입니다.`);
    },
    square(squareWidth, squareHeight, squareArea) {
        console.log(`입력하신 너비 ${squareWidth}, 높이 ${squareHeight}의 사각형 넓이는 ${squareArea}입니다.`);
    },
    trapezoid(trapeTop, trapeBottom, trapeHeight, trapeArea) {    
        console.log(`입력하신 윗변 ${trapeTop}, 아랫변 ${trapeBottom}, 높이 ${trapeHeight}의 사다리꼴 넓이는 ${trapeArea}입니다.`);
    },
    cylinder(cylinRadius, cylinHeight, cylinArea) {
        console.log(`입력하신 너비 ${cylinRadius}, 높이 ${cylinHeight}의 원기둥 넓이는 ${cylinArea}입니다.`);
    }
};

function checkInputErr(arr, rightNumOfArgs) {
    let errorFound = false;
    
    function elemNegativeOrZero(arr) {
        return arr.some((el) => el <= 0);
    }
    function nonNumberElem(arr) {
        return arr.some((el) => (typeof el != "number")? true : false);
    }
    function hasLessElems(arr, rightNumOfArgs) {
        if(typeof arr[0] === "undefined") {
            console.log('아무 정보도 입력하지 않았습니다');
            errorFound = true;
        }
        if(arr.length < rightNumOfArgs) {
            console.log('정보를 더 입력하셔야 합니다.');
            errorFound = true;
        } else if(arr.length > rightNumOfArgs) {
            console.log('너무 많은 정보를 입력하셨습니다');
            errorFound = true;
        }
    }
    function hasWrongInt(arr) {
        if (elemNegativeOrZero(arr)) {
            console.log('0보다 작거나 같은 값이 있습니다!');
            errorFound = true;
        }
    }
    function hasAnyNaN(arr) {
        if (nonNumberElem(arr)) {
            console.log('숫자가 아닌 입력값이 있습니다!');
            errorFound = true;
        }
    }

    hasLessElems(arr, rightNumOfArgs);
    hasWrongInt(arr);
    hasAnyNaN(arr);

    return errorFound;
}

const area = {
    circle(circleRadius) {
        const circleArea = computeArea.circle(circleRadius);
        const inputArr = Array.from(arguments);
        if(checkInputErr(inputArr, 1)) {return false;}
    
        printArea.circle(circleRadius, circleArea);
    },
    square(squareWidth, squareHeight) {
        const squareArea = computeArea.square(squareWidth, squareHeight);
        const inputArr = Array.from(arguments);
        if(checkInputErr(inputArr, 2)) {return false;}
    
        printArea.square(squareWidth, squareHeight, squareArea);
    },
    trape(trapeTop, trapeBottom, trapeHeight) {
        const trapeArea = computeArea.trapezoid(trapeTop, trapeBottom, trapeHeight);
        const inputArr = Array.from(arguments);
        if(checkInputErr(inputArr, 3)) {return false;}
    
        printArea.trapezoid(trapeTop, trapeBottom, trapeHeight, trapeArea);
    },
    cylin(cylinRadius, cylinHeight) {
        const cylinArea = computeArea.cylinder(cylinRadius, cylinHeight);
        const inputArr = Array.from(arguments);
        if(checkInputErr(inputArr, 2)) {return false;}
    
        printArea.cylinder(cylinRadius, cylinHeight, cylinArea);
    }
};

function greeting() {
    console.log(
        `다각형 넓이 계산기입니다. 아래 예시를 보고 명령어를 입력해 주세요
        - 원: area.circle(반지름 숫자) [예: area.circle(2)]
        - 사각형: area.square(너비, 높이) [예: area.square(2,3)]
        - 사다리꼴: area.trape(윗변 길이, 아랫변 길이, 높이) [예: area.trape(2,3,5)]
        - 원기둥: area.cylin(반지름, 높이) [예: area.cylin(2,5)]
        `
    );
}

greeting();


//test cases
console.log(`circleArea(1)`);
circleArea(1);
console.log(`circleArea()`);
circleArea();
console.log(`circleArea('a')`);
circleArea('a');
console.log(`circleArea('a', 2, 3)`);
circleArea('a', 2, 3);