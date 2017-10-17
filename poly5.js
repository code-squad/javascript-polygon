/*
//getCircle(), getArea() 등 실제 넓이 계산이 일어나는 경우 그 횟수를 출력하자. 
//getCircle() > 계산이 1번 일어났습니다. 
//getCircle() > 계산이 2번 일어났습니다. 
//getArea('circle',2) > 계산이 3번 일어났습니다. 
//getArea('rect',2,3) > 계산이 4번 일어났습니다. 
//getReport() //계산수행순서를 저장했다가 자유롭게 그 내역을 출력해보자. 배열을 사용할 수 있다. 
> 계산수행순서 : circle, circle, circle, rect
*/
var order = [];

function getReport(){
    console.log("계산 수행 순서 :"+order);
}

function getCircle(radius){
    //if(radius) console.log(radius*radius*Math.PI);
    order.push(" circle");
    console.log("계산이 "+order.length+"번 일어났습니다.");
}

function getArea(type,p1,p2,p3){
 switch(type){
    case "circle" :
        if(p2){
            while(p2>p1){
                console.log(p1*p1*Math.PI);
                p1++;
                order.push("circle");
                console.log("계산이 "+order.length+"번 일어났습니다.");
            }
        }
        //console.log(p1*p1*Math.PI);
        order.push(" circle");
        console.log("계산이 "+order.length+"번 일어났습니다.");
        break;
    case "rect" :
        //console.log(p1*p2);
        order.push(" rect");
        console.log("계산이 "+order.length+"번 일어났습니다.");
        break;
    case "trapezoid" :
        //console.log((p1+p2)*p3/2);
        order.push(" trapezoid");
        console.log("계산이 "+order.length+"번 일어났습니다.");
        break;
    default:
        console.log("없는 타입입니다.");
 }
}

getCircle();
getCircle();
getArea('circle',2);
getArea('rect',2,3) 
getReport();