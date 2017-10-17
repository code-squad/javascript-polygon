//다각형을 계산하는 함수
//3개의 함수를 정의,호출 해서 그 결과를 한줄씩 출력. 
//인자가 부족할 시 'n개의 인자가 필요합니다.' 라는 메세지를 출력

//원 넓이 구하기
function getCircle(radius){
    arguments.length
    //if(!radius) return console.log("인자가 부족합니다.");
    if(!arguments.length) console.log("인자가 부족합니다.");
    else console.log(radius * radius * Math.PI);
}
getCircle();

//사각형넓이 구하기
function getRect(width,height){
    if(width && height) return console.log(width*height);
    console.log("2개의 인자가 필요합니다.")
}
getRect(5 , 10);

//사다리꼴 넓이 구하기
function getTrap(bottom,top,height){
    if(bottom && top && height) return console.log((bottom+top)*height/2);
    console.log("3개의 인자가 필요합니다.")
    
}
getTrap(5,5,10);