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

let countArr = [];
function getArea(polygon,...args){
  //계산이 될때마다 polygon을 countArr에 담는 즉시 실행함수.
  (function(){
    countArr.push(polygon);
  })();

  let check = getcheckerror(...args);
  if(check !== true){
    return check;
  }
  if(polygon === 'circle'){
    let arr = [];
    for(let radius = args[0]; radius <= args[1]; radius ++){
      arr.push(getWidthCircle(radius));
    }
    if(typeof args[1] !== "number"){
      return getWidthCircle(args[0]);
    }
    return arr.join(", ");
  }
  else if(polygon === 'rect'){
    return getWidthSquare(args[0], args[1]);
  }
  else if(polygon === 'trapezoid'){
    return getWidthTrapezoid(args[0], args[1], args[2]);
  }
}
//countArr에 담긴 값을 출력하는 함수.
function getReport(){
  return "계산 수행 순서: " + countArr.join();
}   
console.log(getArea('circle',1));
console.log(getArea('rect', 10,15));
console.log(getArea('trapezoid',10,15,12));
console.log(getArea('circle', 1,5)); 
console.log(getReport());

// //getReport() //getReport가 불려지면, 함수 호출된 순서를 출력한다.
// > 계산수행순서 : circle, circle, circle, rect