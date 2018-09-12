    // 0. getElementById, getElementsByClassName 함수 정의
    // for문 정리

    function $(result){
        return document.getElementById(result);
    }

    function class_name(result){
        return document.getElementsByClassName(result);
    }
    
    
    //   polygon 

    let polygon_action_button = document.getElementsByClassName("polygon_action_button");

    function string_error() {
        let inputTag = window.document.getElementsByTagName("input");
        for(let i = 0; i < inputTag.length; i++){
            if(isNaN(+inputTag[i].value)){
                result_polygon.innerHTML = "숫자를 입력해주세요.";
                return;
            }
        }
    }

    function blank_error(target){
        target.parentNode.childNodes.forEach(function(input_value){
            if(input_value.nodeName == "P" && input_value.childNodes[1].value == ""){
                result_polygon.innerHTML = "필요한 인자를 모두 입력해주세요.";
                return;
            }
        })
    }

    function polygon(){
        let result;
        if(this.id === "action_one_polygon"){
            result = oneArea();
        }  else if(this.id === "action_square_polygon"){
            result = squareArea();
        }  else if(this.id === "action_trapezoid_polygon"){
            result = trapezoidArea();
        }  else if(this.id === "action_cylinder_polygon"){
            result = cylinderArea();
        }
        result_polygon.innerHTML = result;

        string_error();
        blank_error(this);
    }


    function oneArea(){
        const one_half_length = parseInt($('one_bottom_half').value);
        const result = one_half_length * one_half_length  * Math.PI;

        return result;
    }

    function squareArea(){
        const width = parseInt($('square_width').value);
        const height = parseInt($('square_height').value);
        const result = width * height;

        return result;
    }

    function trapezoidArea(){
        const bottom = parseInt($('trapezoid_bottom_width').value);
        const top = parseInt($('trapezoid_top_width').value);
        const height = parseInt($('trapezoid_height').value);
        const result = (bottom + top) * height / 2;
        
        return result;
    }

    function cylinderArea(){
        const one_half_length = parseInt($('cylinder_bottom_half').value);
        const height = parseInt($('cylinder_height').value);
        const result = Math.pow((Math.PI * one_half_length), 2) + 2 * Math.PI * one_half_length * height;

        return result;
    }

    for (var i = 0; i < polygon_action_button.length; i++) {
        polygon_action_button[i].addEventListener('click', polygon);
    }

    // End : STEP 01