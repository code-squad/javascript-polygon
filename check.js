numCheck = function (param){
    param.forEach(el => {
        if(typeof el !== 'number'){
            throw Error("숫자가 아닌값이 들어왔습니다.");
        }
    })
    return true
    
}

checkParamCount = function (count , param){
    if(count !== param.length) throw Error(` 들어온 인자는 ${param.length}개 이고 들어와야하는 인자는${count}개 입니다.`);
    return true 
}

checkParam = function(count,param){
    return numCheck(param) && checkParamCount(count,param) && param
}

module.exports ={
    checkParam
}