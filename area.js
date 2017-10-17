const calculateCircle = (...theArgs) => {
    let len = theArgs.length;
    if (len === 0) {
        return "최소 한가지 값이 필요합니다";
    }
    if (len !== 1) {
        return "1개의 인자가 필요합니다";
    }
    for (let i = 0; i < len; i++) {
        if (!Number.isInteger(theArgs[i])) {
            return "숫자형타입만 계산이 가능합니다.";
        }
    }
    if (theArgs[0] <= 0)
        return "반지름은 0보다 커야 합니다";
    let radius = theArgs[0];

    execution.push("circle");
    return Math.PI * radius * radius;
};
const calculateRect = (...theArgs) => {
    let len = theArgs.length;
    if (len === 0) {
        return "최소 한가지 값이 필요합니다";
    }
    if (len !== 2) {
        return "2개의 인자가 필요합니다";
    }
    for (let i = 0; i < len; i++) {
        if (!Number.isInteger(theArgs[i])) {
            return "숫자형타입만 계산이 가능합니다.";
        }
    }
    if (theArgs[0] <= 0)
        return "밑변은 0보다 커야 합니다";
    if (theArgs[1] <= 0)
        return "높이는 0보다 커야 합니다";
    let [width, height] = theArgs;

    execution.push("rect");
    return width * height;
};
const calculateTrapezoid = (...theArgs) => {
    let len = theArgs.length;
    if (len === 0) {
        return "최소 한가지 값이 필요합니다";
    }
    if (len !== 3) {
        return "3개의 인자가 필요합니다";
    }
    for (let i = 0; i < len; i++) {
        if (!Number.isInteger(theArgs[i])) {
            return "숫자형타입만 계산이 가능합니다.";
        }
    }
    if (theArgs[0] <= 0)
        return "밑변은 0보다 커야 합니다";
    if (theArgs[1] <= 0)
        return "윗변은 0보다 커야 합니다";
    if (theArgs[2] <= 0)
        return "높이는 0보다 커야 합니다";
    let [base, upper, height] = theArgs;

    execution.push("trapezoid");
    return ((base + upper) / 2) * height;
};
const getArea = (name, ...theArgs) => {
    switch (name) {
        case "circle":
            let len = theArgs.length;
            if (len === 1) {
                console.log(calculateCircle(theArgs[0]));
            } else if (len === 2) {
                for (let i = theArgs[0], count = theArgs[1]; i <= count; i++) {
                    console.log(calculateCircle(i));
                }
            }
            break;
        case "rect":
            console.log(calculateRect(theArgs[0], theArgs[1]));
            break;
        case "trapezoid":
            console.log(calculateTrapezoid(theArgs[0], theArgs[1], theArgs[2]));
            break;
        default:
            console.log("Sorry, we are out of " + name + ".");
    }

};
const getReport = () => {
    console.log("계산수행순서 : " + execution);
};
const print = (num) => {
    console.log("계산이 " + num + "번 일어났습니다.");
};

let execution = [];
let length = 0;
execution.push = function () {
    print(++length);
    return Array.prototype.push.apply(this, arguments);
}



getArea('circle', 10);
getArea('rect', 10, 15);
// getArea('trapezoid', 10, 15, 12);
getArea('circle', 1, 15);
getReport();