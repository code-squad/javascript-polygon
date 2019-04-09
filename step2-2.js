const {PI, pow} = Math

const getCircleArea = (r) => {
    let area = 0
    area = pow(r, 2) * PI
    return area
}

const getTotalCircleArea = (n, res = 0) => {
    if(0 === n) return res
    return getTotalCircleArea(n - 1, res += getCircleArea(n))
}


const getRectArea = (w, h) => {
    let area = 0
    area = w * h
    return area
}

const getTrapezoidArea = (uw, dw, h) => {
    let area = 0
    area = (uw + dw) * h / 2
    return area
}


const getArea = (polygonName, ...params) => {
    let area = 0
    switch (polygonName) {
        case "circle":
            if(params.length === 2) {
                area = getTotalCircleArea(params[1])
            } else {
                area = getCircleArea(params[0])
            }
            break
        case "rect":
            area = getRectArea(...params)
            break
        case "trapezoid":
            area = getTrapezoidArea(...params)
            break
        default :
            throw Error('Incorrect Parameters\ngetArea([polygon name], ...params)\npolygon name : circle / rect / trapezoid')
            break
    }

    return area
}

console.log(getArea("circle", 1, 3))
console.log(getArea("circle", 3))
console.log(getArea("rect", 3, 4))
console.log(getArea("trapezoid", 1, 2, 8))
console.log(getArea("asas", 1))

