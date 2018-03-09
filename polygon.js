
var count = 0;

// 만능함수 제작
function getArea(polygon, ...theArgs) {
  var sidesOfPolygon = Array.from(arguments);
  var checkTypeResult = checkTypes(sidesOfPolygon);
  var checkPositiveNumResult = checkPositiveNum(sidesOfPolygon);
  var checkInputResult = checkInputs(sidesOfPolygon);
  var circleArray = [];

  if (!(checkInputResult && checkTypeResult && checkPositiveNumResult)) {
    return false;
  }
  switch (polygon) {
    case 'circle':
      if (theArgs.length === 1) {
        count++;
        return Math.PI * Math.pow(theArgs[0], 2);
      } else if (theArgs.length === 2) {
        while (theArgs[0] <= theArgs[1]) {
          circleArray.push("반지름이 " + theArgs[0] + "인 원의 넓이:", Math.PI * Math.pow(theArgs[0], 2));
          theArgs[0]++;
        }
        count++;
        return circleArray;
        break;
      }
    case 'rect':
      if (theArgs.length === 2) {
        count++;
        return theArgs[0] * theArgs[1];
        break;
      }
    case 'trap':
      if (theArgs.length === 3) {
        count++;
        return ((theArgs[0] + theArgs[1]) * theArgs[2]) / 2;
        break;
      }
  }
}


// 타입을 체크하는 함수
function checkTypes(...theArgs) {
  for (var i = 1; i < theArgs[0].length; i++) {
    if (!Number.isInteger(theArgs[0][i])) {
      console.log('숫자형 타입만 계산이 가능합니다.');
      return false;
    } else {
      return true;
    }
  }
}


// 인자가 있는지 체크하는 함수
function checkInputs(...theArgs) {
  for (var i = 1; i <= theArgs[0].length; i++) {
    if (theArgs[0][i] === undefined) {
      console.log('최소 한가지 값이 필요합니다.');
      return false;
    } else {
      return true;
    }
  }
}


// 양수인지 체크하는 함수
function checkPositiveNum(...theArgs) {
  for (var i = 1; i < theArgs[0].length; i++) {
    if (theArgs[0][i] < 0) {
      console.log('입력 값은 0보다 커야 합니다.');
      return false;
    } else {
      return true;
    }
  }
}



// 함수를 호출할 때 마다 그 결과를 출력하도록 하는 함수
function getReport() {
  console.log("==================================================");
  console.log("getArea('circle', 10):", getArea('circle', 10)); // 호출 됨
  console.log("getArea('circle', 1, 100):", getArea('circle', 1, 100)); // 호출 됨
  console.log("getArea('circle'):", getArea('circle'));
  console.log("getArea('circle', -1):", getArea('circle', -1));
  console.log("getArea('circle', '10'):", getArea('circle', '10'));
  console.log("==================================================");
  console.log("getArea('rect', 10, 20):", getArea('rect', 10, 20)); // 호출 됨
  console.log("getArea('rect'):", getArea('rect'));
  console.log("getArea('rect', -10, -20):", getArea('rect', -10, -20));
  console.log("getArea('rect', '10', '20'):", getArea('rect', '10', '20'));
  console.log("==================================================");
  console.log("getArea('trap', 10, 20, 5):", getArea('trap', 10, 20, 5)); // 호출 됨
  console.log("getArea('trap'):", getArea('trap'));
  console.log("getArea('trap', -10, -20, -5):", getArea('trap', -10, -20, -5));
  console.log("getArea('trap', '10', '20', '5'):", getArea('trap', '10', '20', '5'));
  console.log("==================================================");
  console.log("계산이 " + count + " 번 일어났습니다");
}

getReport();