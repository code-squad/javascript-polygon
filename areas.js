    function areaOfCirc(...args) {
        let area = 0;
        let r = 0;
        let paramLength = args.length;

        checkParams(paramLength, 1);
        checkNum(args);

        r = args[0]
    
        area = Math.PI*r*r;
    
        return area.toFixed(2);
    }
    
    function areaOfRect(...args){
        let area = 0;
        let w, l;
        let paramLength = args.length;

        checkParams(paramLength, 2);
        checkNum(args);

        [w, l] = args
        area = w * l;
    
        return area;
    }
    
    function areaOfTrap(...args){
        let area = 0;
        const [w, l, h] = args;
        let paramLength = args.length;

        checkParams(paramLength, 3);
        checkNum(args);

        area = (w + l) * h / 2;
    
        return area;
    }
    
    function areaOfCyli(...args){
        let area = 0;
        let paramLength = args.length;
        const [r, h] = args

        checkParams(paramLength, 2);
        checkNum(args);

        area = 2 * Math.PI * r * (r + h);
    
        return area.toFixed(2);
    }

    function checkNum(args) {
        let arr = args;
        for(let i = 0; i < arr.length; i++) {
            if(typeof arr[i] !== 'number'){
                throw reqNum.message;
            }
        }
    }

    function checkParams(realParamNum, neededParamNum){
        if(realParamNum !== neededParamNum) {
            throw checkArg.message;
        }
    }

    let checkArg = new Error('인자 갯수가 맞지 않습니다.');
    let reqNum = new Error('숫자를 입력하세요.');
