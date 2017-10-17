/*
//파라미터를 체크하는 다각형의 넓이 함수
 calculateCircle(10) 인경우 정상적인 결과를 출력.
 calculateCircle("10") 인경우 > "숫자형타입만 계산이 가능합니다."
 calculateCircle() 인경우 > "최소 한가지 값이 필요합니다"
 calculateCircle(-1) 인경우 > "반지름은 0보다 커야 합니다"
*/
function calculateCircle(radius){
 if(typeof(radius) == "number") radius > 0 ? console.log(radius*radius*Math.PI) : console.log("반지름은 0보다 커야 합니다.");
 else if (typeof(radius) == "string") console.log("숫자형타입만 계산이 가능합니다.");
 else console.log("최소 한가지 값이 필요합니다.");
}
calculateCircle(10);
calculateCircle("10");
calculateCircle();
calculateCircle(-1);