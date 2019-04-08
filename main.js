const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('도형의 유형과 넓이를 구하는데 필요한 정보를 입력해주세요.', (info) => {
  const args = info.split(' ');
  const shapeType = args[0];
  const rest = args.slice(1).map(e => parseInt(e));
  let result = 0;
  if(checkNumber(rest) === false) throw new Error('숫자가 필요합니다.');

  if(checkArgsLength(rest.length, shapeArea[shapeType].length) === false)
    throw new Error('필요한 인자의 개수가 부족합니다');
  result = shapeArea[shapeType](rest);

  console.log(result);

  rl.close();
});

const shapeArea = {
  circle: ([radius]) => radius * radius * Math.PI,
  rectangle: ([a, b]) => a * b,
  trapezoid: ([a, b, height]) => 2 * height * (a + b),
  cylinder: function ([radius, height]) {
    return 2 * this.circle([radius]) + circumference([radius]) * height;
  }
}

function circumference([radius]){
  return 2 * radius * Math.PI;
}

function checkNumber(target){
  let ret = true;
  target.forEach(element => {
    if(typeof element !== 'number') ret = false;
  });
  return ret;
}

function checkArgsLength(argsLen, funcLen){
  return argsLen >= funcLen;
}
