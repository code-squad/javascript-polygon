// Step1 

// 원 넓이 구하기
function circle(r){
    if(isNum(...arguments)) {
        if(arguments.length == 2){
            for(let i = arguments[0]; i <= arguments[1]; i++){
                console.log(circle(i));
            }
        } else if(isSame(circle, arguments)){
            return r * r * Math.PI;
        } 
    }
}

// 사각형 넓이 구하기
function rect(w, h){
    if(isSame(rect, arguments) && isNum(...arguments)) return w * h;
}

// 사다리꼴 넓이 구하기
function trapezoid(a, b, h){
    if(isSame(trapezoid, arguments) && isNum(...arguments)) return (a+b) * h / 2;
}

// 원기둥 넓이 구하기
function cylinder(r, h){
    if(isNum(...arguments) && isSame(cylinder, arguments)) return circle(r) * h;
}

// 인자 type 확인
function isNum(){
    Array.prototype.forEach.call(arguments, function(val){
        if(typeof val !== 'number') throw new Error('숫자를 입력해주세요');
    })
    return true;
}

// 인자 개수 확인
function isSame(fn, args){
    if(fn.length !== args.length) throw new Error('인자의 개수를 확인하세요.');
    return true;
}

//Step2.1 getArea 함수
function getArea(fig, a, b, c){
    let result;
        switch(fig){
            case 'circle':
                result = circle(a, b);
                break;
            case 'rect':
                result = rect(a, b);
                break;
            case 'trapezoid':
                result = trapezoid(a,b,c);
                break;
            case 'cyl':
                result = cylinder(a,b);
                break;
            default :
                console.log('도형을 입력을 해주세요.');
        }       
    return result;   
}
