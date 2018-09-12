function circleCalcArea() {
    const circleSize = document.getElementById('circleSize')
    const radius = Number(document.getElementById('radius').value);
    if(radius != Number(radius)) {
        alert('숫자만 입력하세요');
    }
    let circleArea = radius * radius * Math.PI
    circleSize.innerHTML = '넓이 : ' + circleArea;
}

function squareCalcArea() {
    const squareSize = document.getElementById('squareSize');
    const squareLS = Number(document.getElementById('squareLS').value);
    const squareH = Number(document.getElementById('squareH').value);
    if(squareLS != Number(squareLS) || squareH != Number(squareH)) {
        alert('숫자만 입력하세요');
    }
    let squareArea = squareLS * squareH
    squareSize.innerHTML = '넓이 : ' + squareArea;
}

function trapezoidCalcArea() {
    const trapezoidSize = document.getElementById('trapezoidSize');
    const trapezoidUS = Number(document.getElementById('trapezoidUS').value);
    const trapezoidLS = Number(document.getElementById('trapezoidLS').value);
    const trapezoidH = Number(document.getElementById('trapezoidH').value);
    if(trapezoidUS != Number(trapezoidUS) || trapezoidLS != Number(trapezoidLS) || trapezoidH != Number(trapezoidH)) {
        alert('숫자만 입력하세요');
    }
    let trapezoidArea = (trapezoidUS + trapezoidLS) * (trapezoidH / 2)
    trapezoidSize.innerHTML = '넓이 : ' + trapezoidArea
}

function cylinderCalcArea() {
    const cylinderSize = document.getElementById('cylinderSize');
    const cylinderR = Number(document.getElementById('cylinderR').value);
    const cylinderH = Number(document.getElementById('cylinderH').value);
    if(cylinderH != Number(cylinderH) || cylinderR != Number(cylinderR)) {
        alert('숫자만 입력하세요');
    }
    let cylinderArea = 2 * Math.PI * cylinderR * cylinderR + 2 * cylinderR * Math.PI * cylinderH
    cylinderSize.innerHTML = '넓이 : ' + cylinderArea
}