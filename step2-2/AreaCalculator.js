const { pow, PI } = Math;
const { checkArgsLen, checkNumber } = require('./utility');

module.exports = ( () => {
  const _callHistory = Symbol('Array of function names');
  const _writeHistory = Symbol('Push the function name in _callHistory');
  const _getCircumference = Symbol('Return the circumference');
  const _getRectArea = Symbol('Return the rectangle area');
  const _getTrapezoidArea = Symbol('Return the trapezoid area');
  const _getCylinderArea = Symbol('Return the cylinder area');
  const _getCircleAreaRecur = Symbol('Calculate the sum of circles recursively');
  const _validateInputs = Symbol('Validate inputs');

  class AreaCalculator {
    constructor(){
      this[_callHistory] = [];

      this[_writeHistory] = name => this[_callHistory].push(name);
      
      this[_getCircumference] = radius => 2 * radius * PI;

      this[_getRectArea] = (width, height) => {
        this[_writeHistory]('rect');
        return width * height;
      };
  
      this[_getTrapezoidArea] = (line1, line2, height) => {
        this[_writeHistory]('trapezoid');
        return 2 * height * (line1 + line2);
      };
  
      this[_getCylinderArea] = (radius, height) => {
        this[_writeHistory]('cylinder');
        return 2 * this[_getCircleAreaRecur](radius) + this[_getCircumference](radius) * height;
      }

      this[_getCircleAreaRecur] = (startRadius, endRadius = startRadius) => {
        const getCircleArea = (radius) => {
          this[_writeHistory]('circle');
          return pow(radius, 2) * PI;
        }
        return getCircleArea(startRadius) + 
               (startRadius === endRadius ? 0 : this[_getCircleAreaRecur](startRadius+1, endRadius));
      }

      this[_validateInputs] = (type, ...args) => {
        if(!checkArgsLen(type, ...args)) {
          throw new Error('지원하지 않는 도형이거나 인수가 부족합니다.');
        }
        if(!checkNumber(...args)){
          throw new Error('인수는 숫자여야 합니다.');
        }
        return true;
      }
    }

    printExecutionSequence(){
      console.log(`계산수행순서: ${this[_callHistory].join(' ')}`);
    }
      
    getArea(type, ...args){
      try {
        this[_validateInputs](type, ...args);
        let result;
        switch (type) {
          case 'circle':
            result = this[_getCircleAreaRecur](args[0], args[1]);
            break;
          case 'rect':
            result = this[_getRectArea](args[0], args[1]);
            break;
          case 'trapezoid':
            result = this[_getTrapezoidArea](args[0], args[1], args[2]);
            break;
          case 'cylinder':
            result = this[_getCylinderArea](args[0], args[1]);
            break;
        }
        return result;
      } catch (error) {
        console.error(error.message);
      }

    }
  }

  return AreaCalculator;
})();