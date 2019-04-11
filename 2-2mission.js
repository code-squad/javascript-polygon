let functionCount = [];

function printExecutionSequence(name){
    console.log("계산수행 순서: " + functionCount.join(', '));
}

function typeNumber(array){
    
    array.forEach(function(item){
        if(typeof item !== "number"){
            throw "숫자를 입력하세요";
        }
    });
}

function checkParameter(len,condition1,condition2){

    if(arguments.length === 2){
        if(len!==condition1) {
            throw "인자 갯수가 맞지않습니다.";
        }else{
            return ;
        }

    } else {
        if(len < condition1 || len > condition2 ) {
            throw "인자 갯수가 맞지않습니다.";
        } else {
            return;
        }
    }
}

function getArea(name,...param){
    switch(name){
        case 'circle':
        
            typeNumber(param);
            checkParameter(param.length,1,2);
            functionCount.push(name);
            param.sort(function(a,b){
                return a-b;
            })
            return areaOfCircle(param[0],param[1]);
            
            case 'rect':
            
            typeNumber(param);
            checkParameter(param.length,2);
            functionCount.push(name);
            return areaOfRectangular(param[0],param[1])
            
            case 'trapezoid':
            
            typeNumber(param);
            checkParameter(param.length,3);
            functionCount.push(name);
            return areaOfTrapezoid(param[0],param[1],param[2]);
            
            case 'cylinder':
            
            typeNumber(param);
            checkParameter(param.length,2);
            functionCount.push(name);
            return areaOfCylinder(param[0],param[1]);
        }       
    };
    

function areaOfCircle(radius,n) {
    let area = 0;
    
    area = Math.PI*radius*radius;
    console.log(area.toFixed(2));
    
    if(n !== undefined){

        if(radius === n){
            return;
        }else{
            radius++;
            return areaOfCircle(radius, n);
        }
    }
    return area;
}

function areaOfRectangular(a,b){
    let area = 0;
    area = a*b;
    console.log(area);
    return area;
}

function areaOfTrapezoid(a,b,h){
    let area = 0;
    area = (a+b)*h/2;
    console.log(area);
    return area;
}

function areaOfCylinder(r,h){
    let area = 0;

    area = 2*Math.PI*r*(r+h);
    console.log(area.toFixed(2));
    return area.toFixed(2);
}
