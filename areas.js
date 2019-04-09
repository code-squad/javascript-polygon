    function areaOfCirc(...args) {
        let area = 0;
        let r = 0;
        if(checkParams('circle', args)){
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
        if(checkParams('rectangle', args)){
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
        if(checkParams('trapezoid', args)){
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
        if(checkParams('cylinder', args)){
            throw checkArg.message;
        }
        if(checkNum(args)){
            throw reqNum.message;
        }

        [r, h] = args
        let AC = areaOfCirc(r);
        area = 2 * AC + 2 * Math.PI * r * h;
    
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

    function checkParams(polygon, arr){
        switch(polygon) {
            case 'circle':
                if (arr.length !== 1) {
                    return true;
                }
                break;
                
                case 'rectangle':
                if (arr.length !== 2) {
                    return true;
                }
                break;

            case 'trapezoid':
                if(arr.length !== 3) {
                    return true;
                }
                break;

            case 'cylinder':
                if(arr.length !== 2) {
                    return true;
                }
                break;
        }
    }

    let checkArg = new Error('인자 갯수가 맞지 않습니다.');
    let reqNum = new Error('숫자를 입력하세요.');
