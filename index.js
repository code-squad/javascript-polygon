let hasUndefinded = (arguments)=> {
    for (let key in arguments){
        if(arguments[key] === undefined) return true;
    }
}


function calculateCircleSize(radius1,radius2) {
    var size = 0;
    if(radius2 === undefined){
        if(radius1 !== undefined){
            if(typeof radius1 === "number"){
                if(radius1 > 0){
                    size = radius1 * radius1 * Math.PI;
                    console.log("원의 넓이: " + size);
                    return size;
                }
                else {
                    console.log('반지름은 0보다 커야 합니다'); 
                }
            }
            else {
                console.log('숫자형타입만 계산이 가능합니다.')
            }
        }
        else {
            console.log('최소 한가지 값이 필요합니다');
        }
       
       
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

// 요구사항 1 
console.log(getArea('circle',10));
// 요구사항 2
console.log(getArea('rect', 10,15));
// 요구사항 3
console.log(getArea('trape', 10,5));

console.log(getArea('trape', 10,5, 12));

//요구사항 2
//2.1. 다음처럼 동작하는 원의 넓이를 계산하는 함수
// calculateCircle(10) 인경우 정상적인 결과를 출력.
// calculateCircle("10") 인경우 
//> "숫자형타입만 계산이 가능합니다."
// calculateCircle() 인경우 
//> "최소 한가지 값이 필요합니다"
// calculateCircle(-1) 인경우 
//> "반지름은 0보다 커야 합니다"
console.log(calculateCircleSize(10));
console.log(calculateCircleSize('10'));
console.log(calculateCircleSize());
console.log(calculateCircleSize(-1));

