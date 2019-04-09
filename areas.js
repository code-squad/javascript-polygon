function areaOfCirc(r) {
    let area = 0;
    if(arguments.length !== 1){
        throw checkArg.message;
    }
    if(checkNum(r)){
        throw reqNum.message;
    }
 
    area = Math.PI*r*r;
 
    return area.toFixed(2);
 }
 
 function areaOfRect(w, l){
    let area = 0;
    if(arguments.length !== 2){
        throw checkArg.message;
    }
    if(checkNum(w, l)){
        throw reqNum.message;
    }
    area = w * l;
 
    return area;
 }
 
 function areaOfTrap(w, l, h){
    let area = 0;
    if(arguments.length !== 3){
        throw checkArg.message;
    }
    if(checkNum(w, l, h)){
        throw reqNum.message;
    }
    area = (w + l) * h / 2;
 
    return area;
 }
 
 function areaOfCyli(r, h){
    let area = 0;
    if(arguments.length !== 2){
        throw checkArg.message;
    }
    if(checkNum(r, h)){
        throw reqNum.message;
    }
    let AC = areaOfCirc(r);
    area = 2 * AC + 2 * Math.PI * r * h;
 
    return area.toFixed(2);
 }

 function checkNum() {
    for(let i in arguments) {
        if(typeof arguments[i] !== 'number') {
            return true;
        }
    }
 }

 let checkArg = new Error('인자 갯수가 맞지 않습니다.');
 let reqNum = new Error('숫자를 입력하세요.');
