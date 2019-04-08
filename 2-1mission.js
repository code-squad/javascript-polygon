
function areaC(r) {
    let area = 0;
    if(arguments.length != 1){
        throw "인자 갯수가 맞지않습니다.";
    }
    if(typeof r != "number"){
        throw "숫자를 입력하세요";
    }

    area = Math.PI*r*r;

    return area.toFixed(2);
}

function areaR(a,b){
    let area = 0;
    if(arguments.length != 2){
        throw "인자 갯수가 맞지않습니다.";
    }
    if(typeof a != "number" || typeof b != "number"){
        throw "숫자를 입력하세요";
    }
    area = a*b;

    return area;
}

function areaT(a,h){
    let area = 0;
    if(arguments.length != 2){
        throw "인자 갯수가 맞지않습니다.";
    }
    if(typeof a != "number" || typeof h != "number"){
        throw "숫자를 입력하세요";
    }
    area = a*h;

    return area;
}

function areaS(r,h){
    let area = 0;
    if(arguments.length != 2){
        throw "인자 갯수가 맞지않습니다.";
    }
    if(typeof r != "number" || typeof h != "number"){
        throw "숫자를 입력하세요";
    }
    let AC = areaC(r);
    area = 2*AC+2*Math.PI*r*h;
    
    return area.toFixed(2);
}