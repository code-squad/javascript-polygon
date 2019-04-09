const checkArgument = function () {
   // arguments객체에는 받는만큼의 인자만 들어간다.
   for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === 'undefined') { 
         throw new Error("인자의 갯수가 부족합니다.")
         // 받은 인자들을 확인하면서 필요한 인자보다 더 많은 인자를 받았다면 'undefined' type이 지정됨.
      } else if (typeof arguments[i] !== 'number') {  // 
         throw new Error("숫자를 입력해주세요.");
         // 받은 인자들의 타입이 숫자가 아니라면 에러 반환
      }
   }
}

const circleArea = function(r){
   checkArgument(r);
   return 3.14 * r * r
}

const rec = function (width, height) {
   checkArgument(width, height);
   return width*height;
}

const sadari = function (top, base, height) {
   checkArgument(top, base, height);
   return (top+base)/2*height;
}

const pillar = function (r, h) {
   checkArgument(r, h);
   return circleArea(r)*h;
}

console.log(circleArea(5))
console.log(rec(4,5));
console.log(sadari(3,4,5));
console.log(pillar(3,5));

module.exports = {
   checkArgument, circleArea, rec, sadari, pillar
}