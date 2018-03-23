var countCal = 0;
var orderCal = [];

function checkEvery(targetArr, funcName) {
  for (let i = 0; i < targetArr.length; i++) {
    if (!funcName(targetArr[i])) {
      return false;
    }
  }
  return true;
}

function getNumberOfInput(targetArr) {
  let rmUndefined = targetArr.filter(elem => typeof elem !== 'undefined');
  let result = rmUndefined.length
  return result;
}

function checkInputValue(inputValArray, { expectedValue }) {
  let getNumberOfValidInput = getNumberOfInput(inputValArray);
  if (!getNumberOfValidInput) {
    throw "최소 한가지 값이 필요합니다.";
  }
  if (getNumberOfValidInput !== expectedValue) {
    throw `${expectedValue}개의 인자가 필요합니다.`;
  }
  if (!checkEvery(inputValArray, elem => typeof elem === 'number')) {
    throw "숫자형 타입만 계산이 가능합니다.";
  }
  if (!checkEvery(inputValArray, elem => elem > 0)) {
    throw "입력값은 0보다 커야 합니다.";
  }
}

function getReport(collectValue) {
  let result;
  if (collectValue) {
    countCal++;
    orderCal.push(collectValue);
    result = `계산이 ${countCal}번 일어났습니다.`;
  }
  else {
    result = '계산수행순서 : ' + orderCal.join(', ');
    console.log(result);
  }
  return result;
}

function repeatCalculateCircle(radius, repeat) {
  for (let i = 0; i < repeat; i++) {
    calculateCircle(radius + i);
  }
}

function calculateCircle(radius) {
  checkInputValue([radius], { expectedValue: 1 });
  let result = radius * radius * Math.PI;
  console.log(result);
  console.log(getReport('circle'));
}

function calculateSquare(width, height) {
  checkInputValue([width, height], { expectedValue: 2 });
  let result = width * height;
  console.log(result);
  console.log(getReport('rect'));
}

function calculateTrapezoid(upper, lower, height) {
  checkInputValue([upper, lower, height], { expectedValue: 3 });
  let result = (upper + lower) * height / 2;
  console.log(result);
  console.log(getReport('trapezoid'));
}

function getArea(shape, v1, v2, v3) {
  switch (shape) {
    case 'circle':
      if (!v2) calculateCircle(v1);
      else repeatCalculateCircle(v1, v2);
      break;
    case 'rect':
      calculateSquare(v1, v2);
      break;
    case 'trapezoid':
      calculateTrapezoid(v1, v2, v3);
      break;
  }
}

calculateCircle(1);
calculateCircle(2);
getArea('circle', 2);
getArea('rect', 10, 15);
getArea('trapezoid', 10, 15, 12);
getReport();