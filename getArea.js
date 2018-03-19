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
      return "정확한 인자의 갯수를 입력하세요";
    }
    return "넓이를 출력";
  }
  
  //원의 넓이
  function getWidthCircle(radius){
      let result = radius * radius * Math.PI;
      return result;
  }
  
  //사각형의 넓이
  function getWidthSquare(base, height){
      let result = base * height;
      return result;
  }
      
  //사달꼴의 넓이
  function getWidthTrapezoid(base, uppbase, height){
      let result = (base + uppbase) * height * 0.5;
      return result;
  }


function getArea(polygon,...args){
  let check = checkLogic(...args);
  if(check !== "넓이를 출력"){
    return check;
  }else{
    if(polygon === 'circle'){
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
    else if(polygon === 'rect' && arguments.length === 3){
      let base = arguments[1], height = arguments[2];
      return getWidthSquare(base, height);
    }
    else if(polygon === 'trapezoid' && arguments.length === 4){
      let base = arguments[1], uppbase = arguments[2], height = arguments[3];
      return getWidthTrapezoid(base, uppbase, height);
    }
  }
}
  
console.log(getArea('circle'));
console.log(getArea('rect', 10,15));
console.log(getArea('trapezoid',10,15,12));
console.log(getArea('circle', 1,3));