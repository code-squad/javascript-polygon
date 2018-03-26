function checkLogic(){
    for(let n = 0; n < arguments.length; n++){
      if(typeof arguments[n] === "string"){
        return "숫자형 타입만 계산이 가능합니다.";
      }
      else if(arguments[n] <= 0){
        return "길이가 0보다 커야 합니다.";
      }
    }
      if(arguments.length === 0){
        return "최소 1개의 값이 필요합니다";
      }
  }
  
  function getWidthCircle(radius){
    if(typeof radius === "number"){
    let result = radius * radius * Math.PI;
    return result;
    }
    else{
    return checkLogic(radius);
    }
  }
  
  function getWidthSquare(base, height){
    if(arguments.length <= 1){
      return "2개의 인자값이 필요합니다";
    }
    let arr = [];
    for(let n = 0; n < arguments.length; n++){
      if(typeof arguments[n] === "number"){
        arr.push(n);
      }
      else{
        break;
      }
    }
    if(arr.length === arguments.length){
      let result = base * height;
      return result;
    }
    else{
      return checkLogic(base, height);
    }
  }
  
  function getWidthTrapezoid(base, uppbase, height){
    if(arguments.length <= 2){
      return "3개의 인자값이 필요합니다";
    }
    let arr = [];
    for(let n = 0; n < arguments.length; n++){
      if(typeof arguments[n] === "number"){
        arr.push(n);
      }
      else{
        break;
      }
    }
     if(arr.length === arguments.length){
        let result = (base + uppbase) * height * 0.5;
        return result;
      }
    else{
      return checkLogic(base, uppbase, height);
    }
  }
  
  console.log(getWidthCircle(10));
  console.log(getWidthSquare(10,5));
  console.log(getWidthTrapezoid(10,5,12));