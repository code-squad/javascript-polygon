function isNum(param){
    if(param.length === 0) {
        throw Error("you don't input any argument!!")
    }else{
        param.map(function(v){
            if(typeof v !== "number") {
                throw Error("plz input Number type")
            }
        })
    }
  
    return true
}

function checkParamCount(count, param) {
        if(!(count === param.length)){
            throw Error(`input ${count} argument, your argument count is ${param.length}`)
        }else{
            return true
        }
    }   
function checkParam(count, param){
    return isNum(param) && checkParamCount(count, param) && [ ... param]
}

function circleArea(...param){
    const r = checkParam(1, param);
    return 3.14 * r * r 
}

function recArea(...param) {
    const [w, h] = checkParam(2,param); 
    return w * h;
}

function trepArea(...param) {
    const [t, b, h] = checkParam(3,param);
    return (t+b)/2 * h;
}

function pillar(...param) {
    const [r, h] = checkParam(2, param);
    return circleArea(r) * h
}

console.log(circleArea(5))
console.log(recArea(0,4,5))