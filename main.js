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
    circle : function(radius) {
        return Math.PI * Math.pow(radius, 2);
    },
    square : function(width, height) {
        return width * height;
    },
    trapezoid : function(top, bottom, height) {
        return 1/2 * (top + bottom) * height;
    },
    cylinder : function(radius, height) {
        const circleSize = Math.PI * Math.pow(radius, 2);
        const circumference = 2 * Math.PI * radius
        return (circumference * height) + (2 * circleSize);
    }
};


const checkErrors = {
    hasLessArgs : function(arr) {
        if (arr.some((num) => num <= 0)) {
            alert('입력하지 않은 정보가 있거나, 0보다 작거나 같은 값이 있습니다!');
            return true;
        }
        return false;
    },
    hasAnyNaN : function(arr) {
        if (arr.some((num) => Number.isNaN(num))) {
            alert('숫자가 아닌 입력값이 있습니다!');
            return true;
        }
        return false;
    }
};

const printArea = {
    //Save arguments from HTML <input>s
    //Check input error
    //Calculate
    //Return value through alert

    circle : function() {
        const circleRadius = Number(document.getElementById('circleRadius').value);
        const inputArr = [circleRadius];
        if(checkErrors.hasLessArgs(inputArr) || checkErrors.hasAnyNaN(inputArr)) {return false;}
        const circleArea = computeArea.circle(circleRadius);
        alert(`입력하신 반지름 ${circleRadius}의 원 넓이는 ${circleArea}입니다.`);
    },
    square : function() {
        const squareWidth = Number(document.getElementById('squareWidth').value);
        const squareHeight = Number(document.getElementById('squareHeight').value);
        const inputArr = [squareWidth, squareHeight];
        if(checkErrors.hasLessArgs(inputArr) || checkErrors.hasAnyNaN(inputArr)) {return false;}
        const squareArea = computeArea.square(squareWidth, squareHeight);
        alert(`입력하신 너비 ${squareWidth}, 높이 ${squareHeight}의 사각형 넓이는 ${squareArea}입니다.`);
    },
    trapezoid : function() {
        const trapeTop = Number(document.getElementById('trapeTop').value);
        const trapeBottom = Number(document.getElementById('trapeBottom').value);
        const trapeHeight = Number(document.getElementById('trapeHeight').value);
        const inputArr = [trapeTop, trapeBottom, trapeHeight];
        if(checkErrors.hasLessArgs(inputArr) || checkErrors.hasAnyNaN(inputArr)) {return false;}
        const trapeArea = computeArea.trapezoid(trapeTop, trapeBottom, trapeHeight);
        alert(`입력하신 윗변 ${trapeTop}, 아랫변 ${trapeBottom}, 높이 ${trapeHeight}의 사다리꼴 넓이는 ${trapeArea}입니다.`);
    },
    cylinder : function() {
        const cylinRadius = Number(document.getElementById('cylinRadius').value);
        const cylinHeight = Number(document.getElementById('cylinHeight').value);
        const inputArr = [cylinRadius, cylinHeight];
        if(checkErrors.hasLessArgs(inputArr) || checkErrors.hasAnyNaN(inputArr)) {return false;}
        const cylinArea = computeArea.cylinder(cylinRadius, cylinHeight);
        alert(`입력하신 너비 ${cylinRadius}, 높이 ${cylinHeight}의 원기둥 넓이는 ${cylinArea}입니다.`);
    }
};



//addEventListener on submit buttons
const circleSubmit = document.getElementById('circleSubmit');
const squareSubmit = document.getElementById('squareSubmit');
const trapeSubmit = document.getElementById('trapeSubmit');
const cylinSubmit = document.getElementById('cylinSubmit');

circleSubmit.addEventListener("click", printArea.circle);
squareSubmit.addEventListener("click", printArea.square);
trapeSubmit.addEventListener("click", printArea.trapezoid);
cylinSubmit.addEventListener("click", printArea.cylinder);