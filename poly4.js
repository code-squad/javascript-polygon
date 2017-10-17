/*
getArea 함수를 통해 모든 넓이 값을 얻을 수 있다.
getArea('circle', 10); >  원의 넓이 값출력
getArea('rect', 10,15); >  사각형의 넓이값출력
getArea('trapezoid', 10,15,12); >  사다리꼴의 넓이값출력
getArea('circle', 1, 100); > 반지름이 1부터 100까지 1씩 증가하면서, 100개의 원의 넓이의 결과값을 출력.
*/

function getArea(type,p1,p2,p3){
 switch(type){
    case "circle" :
        if(p2){
            while(p2>p1){
                console.log(p1*p1*Math.PI);
                p1++;
            }
        }
        console.log(p1*p1*Math.PI);
        break;
    case "rect" :
        console.log(p1*p2);
        break;
    case "trapezoid" :
        console.log((p1+p2)*p3/2);
        break;
    default:
        console.log("없는 타입입니다.");
 }
}

getArea('circle', 10);
getArea('rect', 10,15);
getArea('trapezoid', 10,15,12);
getArea('circle', 1, 100);