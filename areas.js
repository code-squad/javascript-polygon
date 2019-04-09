    function areaOfCirc(...args) {
        let area = 0;
        let r = 0;
        let paramLength = args.length;
        
        if(checkParams('circle', paramLength)){
            throw checkArg.message;
        }
        if(checkNum(args)){
            throw reqNum.message;
        }

        r = args[0]
    
        area = Math.PI*r*r;
    
        return area.toFixed(2);
    }
    
    function areaOfRect(...args){
        let area = 0;
        let w, l;
        let paramLength = args.length;

        if(checkParams('rectangle', paramLength)){
            throw checkArg.message;
        }
        if(checkNum(args)){
            throw reqNum.message;
        }

        [w, l] = args
        area = w * l;
    
        return area;
    }
    
    function areaOfTrap(...args){
        let area = 0;
        let w, l, h;
        let paramLength = args.length;

        if(checkParams('trapezoid', paramLength)){
            throw checkArg.message;
        }
        if(checkNum(args)){
            throw reqNum.message;
        }

        [w, l, h] = args
        area = (w + l) * h / 2;
    
        return area;
    }
    
    function areaOfCyli(...args){
        let area = 0;
        let r, h;
        let paramLength = args.length;

        if(checkParams('cylinder', paramLength)){
            throw checkArg.message;
        }
        if(checkNum(args)){
            throw reqNum.message;
        }

        [r, h] = args
        area = 2 * Math.PI * r * (r + h);
    
        return area.toFixed(2);
    }

    function checkNum(args) {
        let arr = args;
        for(let i = 0; i < arr.length; i++) {
            if(typeof arr[i] !== 'number'){
                return true;
            }
        }
    }

    function checkParams(polygon, paramNum){
        switch(polygon) {
            case 'circle':
                if (paramNum !== 1) {
                    return true;
                }
                break;
                
                case 'rectangle':
                if (paramNum !== 2) {
                    return true;
                }
                break;

            case 'trapezoid':
                if(paramNum !== 3) {
                    return true;
                }
                break;

            case 'cylinder':
                if(paramNum !== 2) {
                    return true;
                }
                break;
        }
    }

    let checkArg = new Error('인자 갯수가 맞지 않습니다.');
    let reqNum = new Error('숫자를 입력하세요.');
