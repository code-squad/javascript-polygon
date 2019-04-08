const polygon = require('./polygon')
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = (args) => {
    return new Promise((resolve, reject) => {
        rl.question(`${args} input >> `, (answer) => {
            resolve(answer * 1) // number 로 변환
        })
    })
}

(main = async () => {
    var circle = polygon.circle(await input('circle radius'))
    console.log('[ Circle Result ] : ', circle)

    var square = polygon.square(await input('square height'), 
                                await input('square width'))
    console.log('[ Square Result ] : ', square)

    var trapezoid = polygon.trapezoid(await input('trapezoid height'),
                                      await input('trapezoid underWidth'), 
                                      await input('trapezoid upperWidth'))
    console.log('[ Trapezoid Result ] : ', trapezoid)

    var cylinder = polygon.cylinder(await input('cylinder radius'), 
                                    await input('cylinder height'))
    console.log('[ Cylinder Result ] : ', cylinder)

    rl.close()
})()