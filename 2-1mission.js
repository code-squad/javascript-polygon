
function typeNumber(a){
    if(typeof a !== "number"){
        throw "숫자를 입력하세요";
    }
}

function checkParameter(name,para){
    switch(name){
        case 'Circle':
            if(para.length !== 1){
                throw "인자 갯수가 맞지않습니다.";
            }else{
                break;
            }
        
        case 'Rectangular':
            if(para.length !== 2){
                throw "인자 갯수가 맞지않습니다.";
            }else{
                break;
            }
        
        case 'Trapezoid':
            if(para.length !== 3){
                throw "인자 갯수가 맞지않습니다.";
            }else{
                break;
            }
        
        case 'Cylinder':
            if(para.length !== 2){
                throw "인자 갯수가 맞지않습니다.";
            }else{
                break;
            }
    }

};

function areaOfCircle(...item) {
    let area = 0;
    let arr = item;
    //arr = {r}
    checkParameter('Circle',arr);

    arr.forEach(function(item){
        typeNumber(item);
    });

    area = Math.PI*item[0]*item[0];
    return area.toFixed(2);
}

function areaOfRectangular(...item){
    let area = 0;
    let arr = item;
    //arr = {a,b}
    checkParameter('Rectangular',arr);

    arr.forEach(function(item){
        typeNumber(item);
    });
    area = item[0]*item[1];
    return area;
}

function areaOfTrapezoid(...item){
    let area = 0;
    let arr = item;
    //arr = {a,b,h}
    checkParameter('Trapezoid',arr);

    arr.forEach(function(item){
        typeNumber(item);
    });
    area = (item[0]+item[1])*item[2]/2;

    return area;
}

function areaOfCylinder(...item){
    let area = 0;
    let arr = item;
    //arr = {r,h}

    checkParameter('Cylinder',arr);

    arr.forEach(function(item){
        typeNumber(item);
    });

    let AC = areaOfCircle(item[0]);
    area = 2*AC+2*Math.PI*item[0]*item[1];
    
    return area.toFixed(2);
}