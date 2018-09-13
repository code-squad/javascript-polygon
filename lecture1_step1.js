(function(){

    function isSame(fn, args){
        return fn.length === args.length ? true : false;    
    }

    function isNum(...args){ 
        return args.every(val => typeof val === 'number');
    }

    function printError(){
        console.log('인자(숫자, 개수)를 확인해주세요');
    }

    // 원 넓이 구하기
    this.circle = function(r1, r2){
        sequenceArr.push('circle');
        if(arguments.length === 2 && isNum(...arguments)){
            for(let i = r1; i <= r2; i++){
                console.log(i * i * Math.PI);
            }
        } else if(arguments.length === 1 && isNum(...arguments)){
            return r1 * r1 * Math.PI;
        } else {
            printError();
        }
    }

    // 사각형 넓이 구하기
    this.rect = function(w, h){
        sequenceArr.push('rect');  
        if(isSame(rect, arguments) && isNum(...arguments)) return w * h;
        printError();
    }

    // 사다리꼴 넓이 구하기
    this.trapezoid = function(a, b, h){
        sequenceArr.push('trapezoid');
        if(isSame(trapezoid, arguments) && isNum(...arguments)) return (a+b) * h / 2;
        printError();
    }

    // 원기둥 넓이 구하기
    this. cylinder = function(r, h){
        sequenceArr.push('cylinder');
        if(isSame(cylinder, arguments) && isNum(...arguments)) return circle(r) * h;
        printError();
    }

    //Step2.1 getArea 함수
    this.getArea = function(fig, ...args){
        let result;
            switch(fig){
                case 'circle':
                    result = circle(...args);
                    break;
                case 'rect':
                    result = rect(...args);
                    break;
                case 'trapezoid':
                    result = trapezoid(...args);
                    break;
                case 'cyl':
                    result = cylinder(...args);
                    break;
                default :
                    console.log('도형을 입력을 해주세요.');
            }
        return result;          
    }

    //Step2.2 printExecutionSequence 함수
    const sequenceArr = [];

    this.printExecutionSequence = function(){
        return `계산순서: ${sequenceArr.join(', ')}`;        
    }
})();