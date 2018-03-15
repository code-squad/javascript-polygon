function checkLogic(){
    for(let n = 0; n < arguments.length; n++){
      if(typeof arguments[n] === "string"){
        return "숫자형 타입만 계산이 가능합니다.";
      }
      else if(arguments[n] <= 0){
        return "길이가 0보다 커야 합니다.";
      }
    }
    return true;
  }
  
  function getWidthCircle(radius){
    let functionCheckLogic = checkLogic(radius);
    if(functionCheckLogic == true){
      let result = radius * radius * Math.PI;
      return result;
    }
    else{
      return functionCheckLogic;
    }
  }
  
  function getWidthSquare(base, height){
    let functionCheckLogic = checkLogic(base, height);
    if( functionCheckLogic === true){
      let result = base * height;
      return result;
      }
    else{
      return functionCheckLogic;
    }
  }
      
  function getWidthTrapezoid(base, uppbase, height){
    let functionCheckLogic = checkLogic(base, uppbase, height);
    if( functionCheckLogic === true){
      let result = (base + uppbase) * height * 0.5;
      return result;
      }
    else{
      return functionCheckLogic;
    }
  }

function getArea(){
    if(arguments[0] === 'circle'){
      if(arguments.length === 2){
        let radius = arguments[1];
        return getWidthCircle(radius);
      }
      else if(arguments.length === 3){
        let arr = [];
        for(let radius = arguments[1]; radius <= arguments[2]; radius ++){
            arr.push(getWidthCircle(radius));
        }
        return arr;
      }
    }
    else if(arguments[0] === 'rect' && arguments.length === 3){
      let base = arguments[1], height = arguments[2];
      return getWidthSquare(base, height);
    }
    else if(arguments[0] === 'trapezoid' && arguments.length === 4){
      let base = arguments[1], uppbase = arguments[2], height = arguments[3];
      return getWidthTrapezoid(base, uppbase, height);
    }
    return "정확한 인자의 갯수를 입력하세요";
}
  
console.log(getArea('circle', 10));
console.log(getArea('rect', 10,15));
console.log(getArea('trapezoid',10,15,12));
console.log(getArea('circle', 1,3));