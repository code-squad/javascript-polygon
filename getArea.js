function getcheckerror(){
    for(let n = 0; n < arguments.length; n++){
      if(typeof arguments[n] !== "number"){
        return "숫자형 타입만 계산이 가능합니다.";
      }
      else if(arguments[n] <= 0){
        return "길이가 0보다 커야 합니다.";
      } 
    }
    if(arguments.length === 0){
      return "정확한 인자의 갯수를 입력하세요";
    }
    return true;
}
  
  //원의 넓이
  function getWidthCircle(radius){
      let result = radius * radius * Math.PI;
      let demicalPlaceResult = result.toFixed(2);
      return demicalPlaceResult;
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

//radius의 원의 넓이부터 untilThisRadius의 넓이까지 호출.
function checkRadiusAmount(radius, untilThisRadius){
  let arr = [];
  untilThisRadius = untilThisRadius || radius;
  for(radius; radius <= untilThisRadius; radius ++){
    arr.push(getWidthCircle(radius));
  }
  return arr.join(", ");
}

//구하려는 도형이 원인지, 사각형인지, 사다리꼴인지 판별하는 함수 + 에러체크
function getArea(polygon,...args){
  let check = getcheckerror(...args);
  if(check !== true){
    return check;
  }
  if(polygon === 'circle'){
    return checkRadiusAmount(args[0], args[1]);
  }

  else if(polygon === 'rect'){
    return getWidthSquare(args[0], args[1]);
  }
  else if(polygon === 'trapezoid'){
    return getWidthTrapezoid(args[0], args[1], args[2]);
  }
}
  
console.log(getArea('circle',1));
console.log(getArea('rect', 10,15));
console.log(getArea('trapezoid',10,15,12));
console.log(getArea('circle', 1,5));
