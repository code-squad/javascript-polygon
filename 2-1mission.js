
function typeNumber(a){
    if(typeof a !== "number"){
        throw "숫자를 입력하세요";
    }
}

function areaOfCircle(r) {
    let area = 0;
    if(arguments.length !== 1){
        throw "인자 갯수가 맞지않습니다.";
    }
    for(let i in arguments){
        typeNumber(arguments[i]);
    }
    area = Math.PI*r*r;
    return area.toFixed(2);
}

function areaOfRectangular(a,b){
    let area = 0;
    if(arguments.length !== 2){
        throw "인자 갯수가 맞지않습니다.";
    }
    for(let i in arguments){
        typeNumber(arguments[i]);
    }
    area = a*b;
    return area;
}

function areaOfTrapezoid(a,b,h){
    let area = 0;
    if(arguments.length !== 2){
        throw "인자 갯수가 맞지않습니다.";
    }
    for(let i in arguments){
        typeNumber(arguments[i]);
    }
    area = (a+b)*h/2;

    return area;
}

function areaOfCylinder(r,h){
    let area = 0;
    if(arguments.length !== 2){
        throw "인자 갯수가 맞지않습니다.";
    }
    for(let i in arguments){
        typeNumber(arguments[i]);
    }
    let AC = areaOfCircle(r);
    area = 2*AC+2*Math.PI*r*h;
    
    return area.toFixed(2);
}