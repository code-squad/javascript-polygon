const readline = require('readline');
const { pow, PI } = Math;
const helpMsg = '넓이를 구하는데 필요한 정보를 입력해주세요.\n' 
               +'원 넓이: circle radius\n'
               +'사각형 넓이: rectangle width height\n'
               +'사다리꼴 넓이: trapezoid line1 line2 height\n'
               +'원기둥 넓이: cylinder radius height\n';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const shapeArea = {
  circle: ([radius]) => pow(radius, 2) * PI,
  rectangle: ([width, height]) => width * height,
  trapezoid: ([line1, line2, height]) => 2 * height * (line1 + line2),
  cylinder: function ([radius, height]) {
    return 2 * this.circle([radius]) + circumference([radius]) * height;
  }
}

const parameterLength = {
  circle: 1,
  rectangle: 2,
  trapezoid: 3,
  cylinder: 2,
}

function circumference([radius]){
  return 2 * radius * PI;
}

function isNumber(element){
  return typeof element === 'number';
}

function isNotNaN(element){
  return !isNaN(element);
}

function checkNumber(args){
  return args.every(isNumber) && args.every(isNotNaN);
}

function checkArgsLength(argsLen, funcLen){
  return argsLen >= funcLen;
}

function getArea(type, args){
  try {
    if(shapeArea[type] === undefined){
      throw new Error('circle, rectangle, trapezoid, cylinder 이외에는 사용할 수 없습니다.');
    }

    if(!checkNumber(args)) {
      throw new Error('radius, line, height는 숫자여야 합니다.');
    }

    if(!checkArgsLength(args.length, parameterLength[type].length)){
      throw new Error('필요한 인자의 개수가 부족합니다');
    }

    return shapeArea[type](args);
  } catch (error) {
    console.error(`에러: ${error.message}`);
  }
}


rl.question(helpMsg, (info) => {
  const args = info.split(' ');
  const shapeType = args[0];
  const rest = args.slice(1).map(e => parseInt(e));
  
  const result = getArea(shapeType, rest);

  console.log(result || '');

  rl.close();
});