function circle(radius){
    return radius * radius * 3.14;
}

function square(base, height){
    return base * height;
}

function Trapezoid(Tbase, Tuppbase, Theight){
    if( Theight == undefined){
        return "3개의 인자가 필요합니다";
    }
    return (Tbase+Tuppbase) * Theight * 0.5;
}

console.log(circle(10));
console.log(square(10, 15));
console.log(Trapezoid(10, 5, 12));
