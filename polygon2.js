var getCircle = function (radius) {
  if (arguments.length < 1) {
    return '최소 한가지 값이 필요합니다.';
  } else if (!isNumbers(Array.from(arguments)[0])) {
    return '숫자형타입만 계산이 가능합니다.';
  } else if (radius < 0) {
    return '반지름은 0보다 커야 합니다.';
  } else {
    return Math.PI * Math.pow(radius, 2);
  }
}


var getRectangle = function (width, height) {
  for (var i = 0; i < arguments.length; i++) {
    if (arguments.length < 2) {
      return '최소 두 가지 값이 필요합니다';
    } else if (!isNumbers(Array.from(arguments)[i])) {
      return '숫자형타입만 계산이 가능합니다.';
    } else if (arguments[i] < 0) {
      return '밑변과 높이는 0보다 커야 합니다';
    } else {
      return width * height;
    }
  }
}


function getTrapezoid(base, upper, height) {
  for (var i = 0; i < arguments.length; i++) {
    if (!isNumbers(Array.from(arguments)[i])) {
      return '숫자형 타입만 계산이 가능합니다.';
    } else if (arguments.length < 3) {
      return '최소 세 가지 값이 필요합니다.';
    } else if (arguments[i] < 0) {
      return '밑변과 윗변과 높이는 0보다 커야 합니다.';
    } else {
      return ((base + upper) * height) / 2;
    }
  }
}


function isNumbers(args) {
  for (var i = 0; i < arguments.length; i++) {
    return Number.isInteger(Array.from(arguments)[i]);
  }
}



function getArea(shape, a, b, c) {
  switch (shape) {
    case 'circle':
      while (a <= b) {
        console.log(getCircle(a));
        a++;
      };
      return getCircle(a);
      break;
    case 'rect':
      return getRectangle(a, b);
      break;
    case 'trapezoid':
      return getTrapezoid(a, b, c)
  }
}



var arr = [];
arr.push(getCircle(), getCircle(), getArea('circle', 2), getArea('rect', 2, 3));


function getReport(args) {
  for (var i = 0; i < arr.length; i++) {
    console.log("계산이" + (i + 1) + "번 일어났습니다.");
  }
  return arr;
}
console.log(getReport(arr));





// console.log("=========================================================");
// console.log("getArea('circle', 10):", getArea('circle', 10));
// console.log("getArea('rect', 10, 15):", getArea('rect', 10, 15));
// console.log("getArea('trapezoid', 10, 15, 12):", getArea('trapezoid', 10, 15, 12));
// console.log("=========================================================");
// getArea('circle', 1, 100);
// console.log("=========================================================");

// getCircle(), getArea() 등 실제 넓이 계산이 일어나는 경우 그 횟수를 출력하자.

// console.log("getCircle():", getCircle());
// console.log("getCircle():", getCircle());
// console.log("==========================");
// console.log("getArea('circle', 2):", getArea('circle', 2));
// console.log("getArea('rect', 2, 3):", getArea('rect', 2, 3));
