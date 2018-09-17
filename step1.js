// STEP1. 다각형의 넓이

// 1. 반지름을 입력받아 원의 넓이를 계산하는 함수
var circleArea = function(radius) {

  if(typeof radius !== 'number') { 
    console.log("숫자가 아닙니다.");
  } else if(arguments.length !== 1) {
    console.log("인자의 개수가 일치하지 않습니다.")
  } else {
    var area = Math.PI * (radius * radius);
    console.log("원의 넓이는 " + area);
  }

}

circleArea(10);


// 2. 필요한 인자를 입력받아 사각형의 넓이를 계산하는 함수
var squareArea = function(width, height) {
  
  if(typeof width !== 'number' || typeof height !== 'number' ) { 
    console.log("숫자가 아닙니다.");
  } else if(arguments.length !== 2) {
    console.log("인자의 개수가 일치하지 않습니다.")
  }  else {
    var area = width * height;
    console.log("사각형의 넓이는 " + area);
  }

}

squareArea(10, 5);


// 3. 필요한 인자를 입력받아 사다리꼴의 넓이를 계산하는 함수
var trapezoid = function(top, bottom, height) {

  if(typeof top !== 'number' || typeof bottom !== 'number' || typeof height !== 'number') { 
    console.log("숫자가 아닙니다.");
  } else if(arguments.length !== 3) {
    console.log("인자의 개수가 일치하지 않습니다.")
  }  else {
    var area = ((top + bottom) * height / 2);
    console.log("사다리꼴의 넓이는 " + area);
  }

}

trapezoid(5, 6, 7);

// 4. 필요한 인자를 입력받아 원기둥의 넒이를 계산하는 함수.
var cylinderArea = function(radius, height) {
  if(typeof radius !== 'number' || typeof height !== 'number') { 
    console.log("숫자가 아닙니다.");
  } else if(arguments.length !== 2) {
    console.log("인자의 개수가 일치하지 않습니다.")
  }  else {
    var area = (Math.PI * (radius * radius)) * height;
    console.log("원기둥의 넓이는 " + area);
  }

}

cylinderArea(4, 10);