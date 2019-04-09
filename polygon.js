const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const execSequence = [];
const { PI } = Math;

const input = (args) => {
    return new Promise((resolve, reject) => {
        rl.question(`${args} input >> `, (answer) => { resolve(answer * 1) });
    });
}

const saveFunctionCallName = (result) => {
    execSequence.push(result);
}

const checkArgs = (property) => {
    function checkNumber(value) { return typeof value  === "number" && !isNaN(value); }
    return property.every(checkNumber);
}

module.exports.getCircle = async (radius) => {
    if (!checkArgs([ radius ])) radius = await input('circle radius');
    if (!checkArgs([ radius ])) throw new Error('Input Error');
    const result = radius * radius * PI;
    saveFunctionCallName(['circle' , result]);
    return result;
}

module.exports.getRect = async (height, width) => {
    if (!checkArgs([ height, width ])) {
        height = await input('square height');
        width = await input('square width'); 
    }
    if (!checkArgs([ height, width ])) throw new Error('Input Error');
    const result = height * width;
    saveFunctionCallName(['rect' , result]);
    return result;
}

module.exports.getTrapezoid = async (height, underWidth, upperWidth) => {
    if (!checkArgs([ height, underWidth, upperWidth ])) {
        height = await input('trapezoid height');
        underWidth = await input('trapezoid underWidth');
        upperWidth = await input('trapezoid upperWidth');
    }
    if (!checkArgs([ height, underWidth, upperWidth ])) throw new Error('Input Error');
    const result = height * (underWidth + upperWidth) / 2;
    saveFunctionCallName(['trapezoid' , result]);
    return result;
}

module.exports.getCylinder = async (radius, height) => {
    if (!checkArgs([ radius, height ])) {
        radius = await input('cylinder radius');
        height = await input('cylinder height');
    }
    if (!checkArgs([ radius, height ])) throw new Error('Input Error');
    const result = radius * radius * height * PI;
    saveFunctionCallName(['cylinder' , result]);
    return result;
}

module.exports.getArea = async (type, arg1, arg2, arg3) => {
    let value = 0;
    switch(type) {
        case 'circle':
        {
            value = await this.getCircle(arg1);
            if (arg2 > 1) value += await this.getArea('circle', arg1+arg1, arg2-1);
            break;  
        }                 
        case 'rect':        value = await this.getRect(arg1, arg2);                 break;
        case 'trapezoid':   value = await this.getTrapezoid(arg1, arg2, arg3);      break;
        case 'cylinder':    value = await this.getCylinder(arg1, arg2);             break;
        default:            console.log('Polygon type does not exist!');            break;
    }
    return value;
}

module.exports.printExecutionSequence = () => {
    console.log(execSequence.reduce((acc, cur, i) => {
        if (i === 0) return `[ ${cur[0]} , ${cur[1]} ]`;
        return acc + `, [ ${cur[0]} , ${cur[1]} ]`;
    }, 0));
}

module.exports.print = (type, value) => console.log(`[ ${type} result ] : ${value}`);

module.exports.readLineClose = async () => rl.close();
