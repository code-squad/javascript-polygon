var errorComment = {
    notNumber : "숫자형 타입만 계산이 가능합니다.",
    nullArgu: "최소 한가지 값이 필요합니다.",
    notTwoArgu: "2개의 값이 필요합니다.",
    notThreeArgu: "3개의 인자가 필요합니다!",
    minusValueCircle: "반지름은 0보다 커야 합니다."
};

// 원의 넓이
function getAreaCircle (radius) {
    if(typeof radius === 'string'){
        return errorComment.notNumber;
    } else if(radius === null || radius === undefined || radius === " "){
        return errorComment.nullArgu;
    } else if(radius <= 0){
        return errorComment.minusValueCircle;
    } else {
        let circleResult = radius * radius * Math.PI;
        return '원의 넓이는 ' + circleResult + ' 입니다.';
    }
}
// console.log(getAreaCircle("10")); 
// console.log(getAreaCircle());
// console.log(getAreaCircle(-1));
// console.log(getAreaCircle(10));

// 사각형의 넓이
function getAreaSquare (bottomSide, height) {
    if (arguments.length !== 2){
        return errorComment.notTwoArgu;
    } else if((typeof arguments[0] === 'string' || typeof arguments[1] === 'string') && arguments.length === 2){
        return errorComment.notNumber;
    } else if ((typeof arguments[0] !== "string" || typeof arguments[1] !== "string") && arguments.length === 2) {
        let squareResult = bottomSide * height;
        return "사각형의 넓이는 " + squareResult + " 입니다.";
    }
}
// console.log(getAreaSquare(10));
// console.log(getAreaSquare(10, "0"));
// console.log(getAreaSquare());
// console.log(getAreaSquare(10, 15));

// 사다리꼴의 넓이
function getAreaTrapezoid (topSideArgu, bottomSideArgu, heightArgu) {
    if (arguments.length !== 3){
        return errorComment.notThreeArgu;
    } else if((typeof arguments[0] === "string" || typeof arguments[1] === "string" || typeof arguments[2] === "string")&& arguments.length === 3){
        return errorComment.notNumber;
    } else if ((typeof arguments[0] !== "string" || typeof arguments[1] !== "string" || typeof arguments[2] !== "string")&& arguments.length === 3) {
        let resultTrapzoid = (topSideArgu + bottomSideArgu) * heightArgu / 2;
        return "사다리꼴의 넓이는 " + resultTrapzoid + " 입니다.";
    }
}

console.log(getAreaTrapezoid(10));
console.log(getAreaTrapezoid(10, "0", 12));
console.log(getAreaTrapezoid());
console.log(getAreaTrapezoid(5, 10, 12));