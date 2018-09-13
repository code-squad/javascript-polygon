    // 인자 갯수 에러 함수

    function isBlank(arg, num){
        let count = 0;
        for(v of arg){
            count++;
        }
        return (count != num) ? true : false;
    }

    // 숫자 타입 에러 함수

    function isNum(arg){
        let count = 0;
        for(v of arg){
            isNaN(+v) ?  count++ : false;
        }
        return (count != 0) ? true : false;
    }

    // 다각형 넓이 함수
    
    function circleArea(circle_bottom_half){
        if(isBlank(arguments, 1)){ return '정해진 인자 갯수대로 입력해주세요.'}
        if(isNum(arguments)){ return '숫자만 입력해주세요.' };
        return circle_bottom_half * circle_bottom_half  * Math.PI;
    }

    function squareArea(square_width, square_height){
        if(isBlank(arguments, 2)){ return '정해진 인자 갯수대로 입력해주세요.'}
        if(isNum(arguments)){ return '숫자만 입력해주세요.' };
        return square_width * square_height;
    }

    function trapezoidArea(trapezoid_bottom_width, trapezoid_top_width, trapezoid_height){
        if(isBlank(arguments, 3)){ return '정해진 인자 갯수대로 입력해주세요.'}
        if(isNum(arguments)){ return '숫자만 입력해주세요.' };
        return (trapezoid_bottom_width + trapezoid_top_width) * trapezoid_height / 2;
    }

    function cylinderArea(cylinder_bottom_half,cylinder_height){
        if(isBlank(arguments, 2)){ return '정해진 인자 갯수대로 입력해주세요.'};
        if(isNum(arguments)){ return '숫자만 입력해주세요.' };
        return 2 * (circleArea(cylinder_bottom_half) + Math.PI * cylinder_bottom_half * cylinder_height);
    }
