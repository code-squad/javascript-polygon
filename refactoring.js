// const/let
// arrow function
// template literal
// rest parameter
// spread operator

var ErrorText = {
  noArguments: "최소 한가지 값이 필요합니다",
  hasMinus: "길이는 0보다 커야 합니다",
  hasNotNumber: "숫자형타입만 계산이 가능합니다.",
  insufficientArguments: "입력한 argument 수가 충분하지 않습니다."
};

var caculateData = {
  caculateCounts: 0,
  reportList: []
};

var PrintText = {
  circle: "원의 넓이는",
  square: "정사각형의 넓이는",
  rect: "직사각형의 넓이는",
  trape: "사디리꼴의 넓이는"
};

var Type = {
  Circle: "circle",
  Rect: "rect",
  Trape: "trape"
};

var ArgumentstoArray = function(arguments) {
  var argumentsArray = [];
  for (key in arguments) {
    argumentsArray.push(arguments[key]);
  }
  var lastIdx = argumentsArray.length;
  return argumentsArray.slice(1, lastIdx);
};

var getArea = function(type, args) {
  var sizeArgs = ArgumentstoArray(arguments);
  switch (type) {
    case Type.Circle:
      return calculateCircleSize(sizeArgs);
    case Type.Rect:
      return caculateRectSize(sizeArgs);
    case Type.Trape:
      return caculateTrapeSize(sizeArgs);
  }
};

var printResult = function(printText, caculatedSzie) {
  console.log("printText", printText);
  return printText + " " + caculatedSzie;
};

var printCouts = function() {
  console.log("계산이 " + caculateData.caculateCounts + " 번 일어났습니다 :ㅇ");
};

var caculateReport = function(type) {
  caculateData.caculateCounts++;
  caculateData.reportList.push(type);
  printCouts();
};

var getReport = function() {
  console.log(caculateData.reportList);
};

var inspectValidData = function(data) {
  if (typeof data !== "number") throw new Error(ErrorText.hasNotNumber);
  if (data <= 0) throw new Error(ErrorText.hasMinus);
  return data;
};

var inspectValidAllData = function() {
  var validaDataList = [];
  for (key in arguments[0]) {
    var validData = inspectValidData(arguments[0][key]);
    validaDataList.push(validData);
  }

  return validaDataList;
};

var calculateCircleSize = function() {
  var printText = PrintText.circle;
  // 타입에서 왔을 떄 arguments보정
  if (arguments[0].length) {
    arguments = arguments[0];
  }
  var length = arguments.length;
  var getCircleSize = function(radius) {
    caculateReport(Type.Circle);
    return radius * radius * Math.PI;
  };
  var printSection = function(first, last, printText) {
    for (var i = first; i <= last; i++) {
      console.log(printResult(printText, getCircleSize(i)));
    }
  };
  switch (length) {
    case 0:
      throw new Error(ErrorText.noArguments);
    case 1:
      return printResult(printText, getCircleSize(inspectValidData(arguments[0])));
    case 2:
      return printSection(
        inspectValidData(arguments[0]),
        inspectValidData(arguments[1]),
        printText
      );
      break;
  }
};

var caculateRectSize = function() {
  var printText = {
    rect: PrintText.rect,
    square: PrintText.square
  };
  if (arguments[0].length) {
    arguments = arguments[0];
  }
  var length = arguments.length;
  var getSquareSize = function(squareLength) {
    caculateReport(Type.Rect);
    return squareLength * squareLength;
  };
  var getRectSize = function(width, height) {
    caculateReport(Type.Rect);
    return width * height;
  };
  switch (length) {
    case 0:
      throw new Error(ErrorText.noArguments);
    case 1:
      return printResult(printText.square, getSquareSize(inspectValidData(arguments[0])));
    case 2:
      return printResult(
        printText.rect,
        getRectSize(inspectValidData(arguments[0]), inspectValidData(arguments[1]))
      );
      break;
  }
};

var caculateTrapeSize = function() {
  const printText = PrintText.trape;
  if (arguments[0].length) {
    arguments = arguments[0];
  }
  var length = arguments.length;
  var getTrapeSize = function(upper, bottom, height) {
    caculateReport(Type.Trape);
    return (upper + bottom) * height / 2;
  };

  switch (length) {
    case 0:
      throw new Error(ErrorText.noArguments);
    case (1, 2):
      throw new Error(ErrorText.insufficientArguments);
    case 3:
      return printResult(printText, getTrapeSize.apply(null, inspectValidAllData(arguments)));
      break;
  }
};

// //getCircle()
// > 계산이 1번 일어났습니다.

// //getCircle()
// > 계산이 2번 일어났습니다.

// //getArea('circle',2)
// > 계산이 3번 일어났습니다.

// //getArea('rect',2,3)
// > 계산이 4번 일어났습니다.

// //getReport() //getReport가 불려지면, 함수 호출된 순서를 출력한다.
// > 계산수행순서 : circle, circle, circle, rect

//  console.log(getArea('circle',10));
//  console.log(getArea('circle',1,4));
//  console.log('caculaeCounts', caculateCounts);

//   console.log(getArea('rect',1,4));
//   console.log(caculateRectSize(10));

//
// console.log(calculateCircleSize(1));
// console.log(calculateCircleSize(1, 2));
// console.log(getArea("circle", 3, 3));

// console.log(caculateRectSize(1));
// console.log(caculateRectSize(1, 2));
// console.log(getArea("rect", 3, 3));

// console.log(caculateTrapeSize(1, 4, 10));

// getReport();

// console.log(caculagteTrapeSize('1',4,5));
// console.log(caculagteTrapeSize(-1,4,5));

console.log(caculateTrapeSize(1, 2, 4));

console.log(getArea("trape", 3, 3, 4));

// Object 할당 알아보기

// var inspectValidAllData = (...datas) => {
//     var validaDataListObj = {};
//     for(key in datas){
//         var validData = inspectValidData(datas[key]);
//         console.log('validaData', validData);
//         validaDataListObj = Object.assign(validaDataListObj,validData)
//     }
//     return validaDataListObj;
// }2%2
