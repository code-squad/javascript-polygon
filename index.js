let hasUndefinded = (arguments)=> {
    for (let key in arguments){
        if(arguments[key] === undefined) return true;
    }
}

function calculateCircleSize(radius1,radius2) {
    var size = 0;
    if(radius2 === undefined){
        size = radius1 * radius1 * Math.PI;
        console.log("원의 넓이: " + size);
        return size;
    }
    if(arguments.length === 2){
        for(var i = radius1; i <= radius2; i++){
            console.log('반지름이 '+i+'인 원의 넓이는 :'+(i*i*Math.PI));
        }
    }
}

function calculateRectSize(width,height) {
    if(typeof width !== 'number' && typeof height !== 'number'){
        console.log('숫자형타입만 계산이 가능합니다');
    } else if(arguments.length===0){
        console.log('최소 한가지 값이 필요합니다')
    } else if(width<= 0 || height<= 0){
        console.log('길이값과 높이값은 0보다 커야합니다');
    }
    else {
        var size = width * height;
        console.log("사각형의 넓이: " + size);
        return size;
    }
}


function calculateTrapeSize(upper,bottom,height) {
    if(hasUndefinded(arguments)){
        console.log('3개의 인자가 필요합니다');
    }
    else{
        var size = (upper+bottom)*height/2;
        console.log("사다리꼴의 넓이: "+size);
        return size;
    }
}



function getArea(shape, para1, para2, para3) {
    switch(shape){
        case 'circle': calculateCircleSize(para1, para2);
            break;
        case 'rect': calculateRectSize(para1, para2);
            break;
        case 'trape': calculateTrapeSize(para1, para2, para3);
            break;
    }
}
//요구사항
// 1. 반지름이 10cm인 원 넓이를 출력한다.
// 2. 밑변 10cm, 높이15cm인 사각형의 넓이를 출력한다.
// 3. 밑변 10cm, 윗변 5cm, 높이가 12cm인 사다리꼴의 넓이를 출력한다.
//다각형의 넓이를 함수를 호출해서 실행하도록 하자. 3개의 함수를 정의하고,
// 3개의 함수를 호출해서 그 결과를 한줄씩 출력한다. 
//사다리꼴의 넓이를 구하기 위해서는 3개의 인자를 받아야한다. 만약 2개의 인자만 받으면 '3개의 인자가 필요합니다' 라는 메시지를 노출하자.

// 요구사항 1 
console.log(getArea('circle',10));
// 요구사항 2
console.log(getArea('rect', 10,15));
// 요구사항 3
console.log(getArea('trape', 10,5));

console.log(getArea('trape', 10,5, 12));

