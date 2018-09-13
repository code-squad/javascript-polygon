/*
Requirements
    반지름을 입력받아 원의 넓이를 계산하는 함수를 만든다.
    필요한 인자를 입력받아 사각형의 넓이를 계산하는 함수를 만든다.
    필요한 인자를 입력받아 사다리꼴의 넓이를 계산하는 함수를 만든다.
    필요한 인자를 입력받아 원기둥의 넒이를 계산하는 함수를 만든다.
    숫자가 아니면 에러를 반환하도록 구현한다.
    인자의갯수가 부족하면 에러를 반환한다.
*/

/*

getCircle() 
getCircle() 
getArea('circle',2) 
getArea('rect',2,3) 
printExecutionSequence()  //printExecutionSequence가 불려지면, 함수 호출된 순서를 출력한다. 
> 계산수행순서 : circle, circle, circle, rect
*/
const computeArea = {
    circle(radius) {
        return Math.PI * Math.pow(radius, 2);
    },
    rect(width, height) {
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
    rect(rectWidth, rectHeight, rectArea) {
        console.log(`입력하신 너비 ${rectWidth}, 높이 ${rectHeight}의 사각형 넓이는 ${rectArea}입니다.`);
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
        if(!arr[0]) {
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

const inputErr = {
    withOneArgs(argList) {
        const rightNumOfArgs = 1;
        return checkInputErr(argList,rightNumOfArgs);
    },
    withTwoArgs(argList) {
        const rightNumOfArgs = 2;
        return checkInputErr(argList,rightNumOfArgs);
    },
    withThreeArgs(argList) {
        const rightNumOfArgs = 3;
        return checkInputErr(argList,rightNumOfArgs);
    }
};

const area = {
    circle(circleRadius) {
        const circleArea = computeArea.circle(circleRadius);
        const argList = Array.from(arguments);
        if(inputErr.withOneArgs(argList)) {return false;}
    
        printArea.circle(circleRadius, circleArea);
    },
    rect(rectWidth, rectHeight) {
        const rectArea = computeArea.rect(rectWidth, rectHeight);
        const argList = Array.from(arguments);
        if(inputErr.withTwoArgs(argList)) {return false;}
    
        printArea.rect(rectWidth, rectHeight, rectArea);
    },
    trape(trapeTop, trapeBottom, trapeHeight) {
        const trapeArea = computeArea.trapezoid(trapeTop, trapeBottom, trapeHeight);
        const argList = Array.from(arguments);
        if(inputErr.withThreeArgs(argList)) {return false;}
    
        printArea.trapezoid(trapeTop, trapeBottom, trapeHeight, trapeArea);
    },
    cylin(cylinRadius, cylinHeight) {
        const cylinArea = computeArea.cylinder(cylinRadius, cylinHeight);
        const argList = Array.from(arguments);
        if(inputErr.withTwoArgs(argList)) {return false;}
    
        printArea.cylinder(cylinRadius, cylinHeight, cylinArea);
    }
};

function getArea(...arguments) {
    let calcType = arguments[0];
    const argList = arguments.splice(1);
    if(calcType === 'circle' && argList.length >= 2) {calcType = 'growingCircle';}

    switch (calcType) {
        case 'circle':
            if(inputErr.withOneArgs(argList)) {return false;}
            const circleRadius = argList[0];
            const circleArea = computeArea.circle(circleRadius);
            printArea.circle(circleRadius, circleArea);    
            break;

        case 'growingCircle':
            if(inputErr.withTwoArgs(argList)) {return false;}
            let startRadius = argList[0], targetRadius = argList[1];
            if(startRadius > targetRadius){
                console.log('시작 반지름 넓이가 최종 반지름보다 작습니다!');
                return false;
            }
            for (let radius = startRadius; radius <= targetRadius; radius++) {
                const circleArea = computeArea.circle(radius);
                printArea.circle(radius, circleArea);
            }
            break;
            
        case 'rect':
            if(inputErr.withTwoArgs(argList)) {return false;}
            const rectWidth = argList[0], rectHeight = argList[1];
            const rectArea = computeArea.rect(rectWidth, rectHeight);
            printArea.rect(rectWidth, rectHeight, rectArea);
            break;

        case 'trapezoid':
            if(inputErr.withThreeArgs(argList)) {return false;}
            const trapeTop = argList[0], trapeBottom = argList[1], trapeHeight = argList[2];
            const trapeArea = computeArea.trapezoid(trapeTop, trapeBottom, trapeHeight);
            printArea.trapezoid(trapeTop, trapeBottom, trapeHeight, trapeArea);
            break;

        case 'cylinder':
            if(inputErr.withTwoArgs(argList)) {return false;}
            const cylinRadius = argList[0], cylinHeight = argList[1];
            const cylinArea = computeArea.cylinder(cylinRadius, cylinHeight);
            printArea.cylinder(cylinRadius, cylinHeight, cylinArea);
            break;


        default:
            break;
    }


function greeting() {
    console.log(
        `다각형 넓이 계산기입니다. 아래 예시를 보고 명령어를 입력해 주세요
        - 원 넓이: getArea('circle', 반지름 숫자) [예: getArea('circle', 2)]
        - 점점 커지는 원 넓이: getArea('circle', 시작 반지름 숫자, 최대 반지름 숫자) [예: getArea('circle', 2, 5)]
        - 사각형: getArea('rect', 너비, 높이) [예: getArea('rect', 2, 3)]
        - 사다리꼴: getArea('trapezoid', 윗변 길이, 아랫변 길이, 높이) [예: area('trapezoid', 2,3,5)]
        - 원기둥: getArea('cylinder', 반지름, 높이) [예: getArea('cylinder', 2,5)]
        `
    );
}

greeting();



//test cases
getArea('circle', 2);
getArea('circle', 2,5);
getArea('circle', 5,2);
getArea('rect', 2,5);
getArea('rect', 2,5,7);
getArea('rect', 2,5,'a');
getArea('trapezoid', 2,5,7);
getArea('trapezoid', 2,5,'a');
getArea('trapezoid', 2,7);
getArea('cylinder', 2,5,7);
getArea('cylinder', 2,5);
getArea('cylinder', 2);
