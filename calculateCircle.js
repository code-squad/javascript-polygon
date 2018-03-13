/*
calculateCircle(10) 인경우 정상적인 결과를 출력.

calculateCircle("10") 인경우 
> "숫자형타입만 계산이 가능합니다."

calculateCircle() 인경우 
> "최소 한가지 값이 필요합니다"

calculateCircle(-1) 인경우 
> "반지름은 0보다 커야 합니다"
*/

function calculateCircle(radius){
    let result = radius * radius * Math.PI;
    console.log(typeof radius);
    if((typeof radius) === String){
        console.log("숫자형 타입만 계산이 가능합니다.");
    }
    else if(arguments.length === 0){
        console.log("최소 한 가지 값이 필요합니다");
    }
    else if(radius <= 0){
        console.log("반지름이 0보다 커야 합니다.");
    }
        return result;
}
console.log(calculateCircle(50));