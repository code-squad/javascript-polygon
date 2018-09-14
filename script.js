    // log 전역 배열
    
    let logHistory = [];
    
    // 인자 갯수 에러 함수

    function isBlank(arg, num){
        logHistory.push('isBlank');
        let count = 0;
        for(v of arg){
            count++;
        }
        return (count != num) ? true : false;
    }

    // 숫자 타입 에러 함수

    function isNum(arg){
        logHistory.push('isNum');
        let count = 0;
        for(v of arg){
            isNaN(+v) ?  count++ : false;
        }
        return (count != 0) ? true : false;
    }

    // undefined 체크 함수

    function isUndefined(arg){
        logHistory.push('isUndefined');
        return typeof(arg) === undefined;
    }

    // 다각형 넓이 함수

    function circleArea(circle_bottom_half){
        logHistory.push('circleArea');
        if(isBlank(arguments, 1)){ return '정해진 인자 갯수대로 입력해주세요.'}
        if(isNum(arguments)){ return '숫자만 입력해주세요.' };
        return circle_bottom_half * circle_bottom_half  * Math.PI;
    }

    function increase_circleArea(first_radius, last_radius){
        logHistory.push('increase_circleArea');
        if(isBlank(arguments, 2)){ return '정해진 인자 갯수대로 입력해주세요.'}
        if(isNum(arguments)){ return '숫자만 입력해주세요.' };
        let circleArea = 0;

        for(let i = first_radius; first_radius <= last_radius; first_radius++ ){
            circleArea += i * i  * Math.PI;
        }

        return circleArea;
    }

    function squareArea(square_width, square_height){
        logHistory.push('squareArea');
        if(isBlank(arguments, 2)){ return '정해진 인자 갯수대로 입력해주세요.'}
        if(isNum(arguments)){ return '숫자만 입력해주세요.' };
        return square_width * square_height;
    }

    function trapezoidArea(trapezoid_bottom_width, trapezoid_top_width, trapezoid_height){
        logHistory.push('trapezoidArea');
        if(isBlank(arguments, 3)){ return '정해진 인자 갯수대로 입력해주세요.'}
        if(isNum(arguments)){ return '숫자만 입력해주세요.' };
        return (trapezoid_bottom_width + trapezoid_top_width) * trapezoid_height / 2;
    }

    function cylinderArea(cylinder_bottom_half,cylinder_height){
        logHistory.push('cylinderArea');
        if(isBlank(arguments, 2)){ return '정해진 인자 갯수대로 입력해주세요.'};
        if(isNum(arguments)){ return '숫자만 입력해주세요.' };
        return 2 * (circleArea(cylinder_bottom_half) + Math.PI * cylinder_bottom_half * cylinder_height);
    }

    // 전체 다각형 넓이 함수

    function getArea(typeOfPolygon, input1, input2, input3){
        logHistory.push('getArea');
        if(typeOfPolygon === 'circle'){
            if(!isUndefined(input2) && isUndefined(input3)){
                return increase_circleArea(input1, input2);
            }
            return circleArea(input1);
        } 
        if(typeOfPolygon === 'rect') {
            return squareArea(input1, input2);
        }  
        if(typeOfPolygon === 'trapezoid') {
            return trapezoidArea(input1, input2, input3);
        }
        if(typeOfPolygon === 'cylinder') {
            return cylinderArea(input1, input2);
        }
    }

    

    function printExecutionSequence(){
        return '실행된 함수: ' + logHistory.toString();
    }

    console.log(getArea('circle', 2));
    console.log(printExecutionSequence());
    