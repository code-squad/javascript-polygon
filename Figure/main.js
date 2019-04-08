//const myModule = require('./module/figure');
const readline = require('readline');
const circleArea = require('./module/figure/circleArea.js');
const square = require('./module/figure/square.js');
const trapezoid = require('./module/figure/trapezoid.js');
const cylinder = require('./module/figure/cylinder.js');
const rl = readline.createInterface(process.stdin, process.stdout);

var recursiveAsyncReadLine = function() {
    rl.question('Which figure area do you want to know? 1. Circle 2. Square 3. Trapezoid 4. Cylinder:  ', function(answer) {
    switch(answer) {
        case "1": 
        rl.setPrompt("Please Input Radius Please: ");
        rl.prompt();
        rl.on('line', function(radius){
            console.log(circleArea(Number(radius)));
            rl.close();
        });
        break;

        case "2": 
        rl.setPrompt("Please Input length and width following in this form: (Length) (Width): ");
        rl.prompt();
        rl.on('line', function(squareValues){
            var garosero = squareValues.split(" ");
            console.log(square(Number(garosero[0]), Number(garosero[1])));
            rl.close(); 
        });
        break;

        case "3": 
        rl.setPrompt("Please Input following in this order and form: (Bottom Base) (Top Base) (Height): ");
        rl.prompt();
        rl.on('line', function(trapezoidValues){
            var twoBaseHeight = trapezoidValues.split(" ");
            console.log(trapezoid(Number(twoBaseHeight[0]), Number(twoBaseHeight[1]), Number(twoBaseHeight[2])));
            rl.close();
        });
        break;    

        case "4":
        rl.setPrompt("Please Input Radius and Height following in this form: (Radius) (Height): ");
        rl.prompt();
        rl.on('line', function(cylinderValues){
            var radHei = cylinderValues.split(" ");
            console.log(cylinder(radHei[0], radHei[1]));
                rl.close();
        });
        break;           

        default: 
            console.log("Pleas input only between 1 ~ 4");
            recursiveAsyncReadLine()
        }
    })
}

recursiveAsyncReadLine();

rl.on('close', function() {
    process.exit();
});