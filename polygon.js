var errorComment = {
    notNumber : "숫자형 타입만 계산이 가능합니다.",
    nullValue: "최소 한가지 값이 필요합니다.",
    notTwoValue: "2개의 값이 필요합니다.",
    notThreeValue: "3개의 인자가 필요합니다!",
    minusValueCircle: "반지름은 0보다 커야 합니다.",
    minusValue: "0 보다 커야 합니다."
};

// 원의 넓이
function getAreaCircle (radius) {
    if(typeof radius === 'string'){
        return errorComment.notNumber;
    } else if(radius === null || radius === undefined || radius === " "){
        return errorComment.nullValue;
    } else if(radius <= 0){
        return errorComment.minusValueCircle;
    } else {
        let circleResult = radius * radius * Math.PI;
        return '원의 넓이는 ' + circleResult + ' 입니다.';
    }
}

// 사각형의 넓이
function getAreaSquare (bottomSide, height) {
    if(arguments[0] <= 0 || arguments[1] <= 0 && typeof arguments === 'number'){
        return errorComment.minusValue;
    } else if (arguments.length !== 2){
        return errorComment.notTwoValue;
    } else if((typeof arguments[0] !== 'number' || typeof arguments[1] !== 'number') && arguments.length === 2){
        return errorComment.notNumber;
    } else if ((typeof arguments[0] === "number" || typeof arguments[1] === "number") && arguments.length === 2) {
        let squareResult = bottomSide * height;
        return "사각형의 넓이는 " + squareResult + " 입니다.";
    }
}

// 사다리꼴의 넓이
function getAreaTrapezoid (topSide, bottomSide, height) {
    if((arguments[0] <= 0 || arguments[1] <= 0 || arguments[2] <=0) && typeof arguments === 'number'){
        return errorComment.minusValue;
    } else if (arguments.length !== 3){
        return errorComment.notThreeValue;
    } else if((typeof arguments[0] !== "number" || typeof arguments[1] !== "number" || typeof arguments[2] !== "number") && arguments.length === 3 ){
        return errorComment.notNumber;
    } else if ((typeof arguments[0] === "number" || typeof arguments[1] === "number" || typeof arguments[2] === "number") && arguments.length === 3) {
        let resultTrapzoid = (topSide + bottomSide) * height / 2;
        return "사다리꼴의 넓이는 " + resultTrapzoid + " 입니다.";
    }
}

// 원의 넓이 출력 test
// console.log(getAreaCircle("10"));
// console.log(getAreaCircle()); 
// console.log(getAreaCircle(-1));
// console.log(getAreaCircle(10));


// 사각형의 넓이 출력 test
// console.log(getAreaSquare(10));
// console.log(getAreaSquare(10, "0"));
// console.log(getAreaSquare(-10));
// console.log(getAreaSquare(10, 15));

// 사다리꼴의 넓이 출력 test
// console.log(getAreaTrapezoid(10, -1, 0));
// console.log(getAreaTrapezoid(10, "0", 12));
// console.log(getAreaTrapezoid());
// console.log(getAreaTrapezoid(5, 10, 12));
