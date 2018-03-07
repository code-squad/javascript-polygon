var radius = 6;
var topSide = 3;
var bottomSide = 7;
var height = 15;


// 원의 넓이
// 반지름 * 반지름 * 3.14
var circleArea = radius * radius * 3.14;
console.log(circleArea);

// 사각형의 넓이
// 밑변 * 높이 / 2
var square = bottomSide * height / 2;
console.log(square);

// 사다리꼴의 넓이
// 윗변 + 밑변 * 높이 / 2
var trapezoid = (topSide + bottomSide) * height / 2;
console.log(trapezoid);


