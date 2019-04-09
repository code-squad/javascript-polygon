const figureArea = require('./module/figure/figureArea');
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

var recursiveAsyncFigureArea = function() {
    rl.question('Which figure area do you want to know? 1. Circle 2. Square 3. Trapezoid 4. Cylinder:  ', function(answer) {
    switch(answer) {
        case "1": 
        rl.setPrompt("Please Input Radius Please: ");
        rl.prompt();
        rl.on('line', function(radius){
            const resultOfCircle = figureArea.circleArea(Number(radius));
            errorHandler(resultOfCircle);
        });
        break;

        case "2": 
        rl.setPrompt("Please Input length and width following in this form: (Length) (Width): ");
        rl.prompt();
        rl.on('line', function(squareValues){
            var garosero = squareValues.split(" ");
            const resultOfSquare = figureArea.square(Number(garosero[0]), Number(garosero[1]));
            errorHandler(resultOfSquare); 
        });
        break;

        case "3": 
        rl.setPrompt("Please Input following in this order and form: (Bottom Base) (Top Base) (Height): ");
        rl.prompt();
        rl.on('line', function(trapezoidValues){
            var twoBaseHeight = trapezoidValues.split(" ");
            const resultOfTrapezoid = figureArea.trapezoid(Number(twoBaseHeight[0]), Number(twoBaseHeight[1]), Number(twoBaseHeight[2]));
            errorHandler(resultOfTrapezoid);
        });
        break;    

        case "4":
        rl.setPrompt("Please Input Radius and Height following in this form: (Radius) (Height): ");
        rl.prompt();
        rl.on('line', function(cylinderValues){
            var radHei = cylinderValues.split(" ");
            const resultOfCylinder = figureArea.cylinder(Number(radHei[0]), Number(radHei[1]));
            errorHandler(resultOfCylinder);
        });
        break;           

        default: 
            console.log("Pleas input only between 1 ~ 4");
            recursiveAsyncFigureArea()        
        }
    })
}

recursiveAsyncFigureArea();

rl.on('close', function() {
    process.exit();
});


function errorHandler(result) {
    if(isNaN(result)) {
        recursiveAsyncFigureArea();
    } 
    
    else {
         console.log(result);
         rl.close();
    }
}

