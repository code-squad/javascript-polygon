//다각형의 넓이 구하기 

//1. Before: 원의 넓이 계산
// function getCircleArea(para1,para2) {
//     addSequenceArr('circle');

//     if (isNaN(para1, para2)) {
//         return 'error';
//     }
//     else if ( para2 === undefined ) {
//         const pi = 3.14;
//         const radius = para1;
//         let result = '원의 넓이는 '+pi * Number(radius) * Number(radius);
//         return result;
//     }
//     else if (arguments.length === 2 ) {
//         const pi = 3.14,
//               min = para1,
//               max = para2;
//         let result = '';

//         for (let r = min; r < max + 1; r++) {
//             const rSquare = Math.pow(r, 2);
//             result += '반지름 ' + r + '의 원넓이는 ' + (pi * rSquare) + ' / ';
//         }
//         return result;
//     } else if ( arguments.length > 2 ) {
//         let result = "인자 개수가 맞지 않습니다.";
//         return result;
//     } 
// }

//2. 사각형의 넓이를 계산하는 함수
function getRectangleArea(width, height) {
    addSequenceArr('rect');

    if ([width, height].length != arguments.length) {
        let result = "인자 개수가 맞지 않습니다.";
        return result;
    }
    else if (isNaN(width, height)) {
        return 'error';
    } else {
        let result = '사각형의 넓이는 '+Number(width) * Number(height);
        return result;
    }
}

//3.사다리꼴 넓이 계산 함수 
function getTrapezoidArea(upperLine, bottomLine, height) {
    addSequenceArr('trapezoid');

    if ([upperLine, bottomLine, height].length != arguments.length) {
        let result = "인자 개수가 맞지 않습니다.";
        return result;
    }

    if (isNaN(upperLine, bottomLine, height)) {
        return 'error';
    } else {
        let result = '사다리꼴의 넓이는 '+(Number(upperLine) + Number(bottomLine)) * Number(height) / 2;
        return result;
    }
}

//4.원기둥 넓이 계산 함수 
function getCylinderArea(radius, width) {
      addSequenceArr('cylinder');

    if ([radius, width].length != arguments.length) {
        let result = "인자 개수가 맞지 않습니다.";
        return result;
    }

    if (isNaN(radius, width)) {
        return 'error';
    } else {
        const pi = 3.14;
        let circle = pi * Number(radius) * Number(radius);
        let result = '원기둥의 넓이는 '+circle * Number(width);
        return result;
    }
}

//getArea 
function getArea(figure, para1, para2, para3) {
    let result;

    switch (figure) {
        case 'circle' : 
            result = getCircleArea(para1,para2);break;
        case 'rect': result = getRectangleArea(para1, para2);
        break;
        case 'trapezoid': result = getTrapezoidArea(para1,para2,para3);break;
        case 'cylinder' : result = getCylinderArea(para1,para2);break;
        default : console.log('알맞은 값을 입력해주세요');
    }
    return result;
}

// Initialize printExecutionSequence
var sequenceArr = [];


// 수정1. getCircleArea() > Creating subfunction
function getCircleArea(para1, para2) {
    addSequenceArr('circle');

    if (isNaN(para1, para2)) {
        return 'error';
    } else if (arguments.length > 2) {
        let result = "인자 개수가 맞지 않습니다.";
        return result;
    } else {
        let result = subroutine(para1, para2);
        return result;
    }
}

let subroutine = function (para1, para2) {
    if (para2 === undefined) {
        const pi = 3.14;
        const radius = para1;
        let result = '원의 넓이는 ' + pi * Number(radius) * Number(radius);
        return result;
    } else if (arguments.length === 2) {
        const pi = 3.14,
            min = para1,
            max = para2;
        let result = '';

        for (let r = min; r < max + 1; r++) {
            const rSquare = Math.pow(r, 2);
            result += '반지름 ' + r + '의 원넓이는 ' + (pi * rSquare) + ' / ';
        }
        return result;
    }
}

// 수정2. Before:Overlapped sequenceArr.push() > After:creating function 
function addSequenceArr(figure) {
    return sequenceArr.push(figure);
}

// 수정3. Print array using for-in statement
function printExecutionSequence() {
    let result = '';

    sequenceArr.forEach( (index) => {
        result += index+"\n";
    })
    return result;
}

// [1] 실행: getArea()
// getArea('circle', 10);
// getArea('rect', 10, 15);
// getArea('trapezoid', 10, 15, 12);
// getArea('circle', 1, 100);

// [2] 실행: printExecutionSequence()
// getCircleArea(); 
// getCircleArea(); 
// getArea('circle',2); 
// getArea('rect',2,3); 
// printExecutionSequence(); 