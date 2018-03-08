// 원의 넓이
// 반지름 * 반지름 * 3.14
function circleArea (radiusArgu) {
    let circleResult = radiusArgu * radiusArgu * Math.PI;
    console.log('원의 넓이는 ' + circleResult + ' 입니다.');
}
circleArea(10);

// 사각형의 넓이
// 밑변 * 높이 / 2
function squareArea (bottomSideArgu, heightArgu) {
    let squareResult = bottomSideArgu * heightArgu / 2;
    console.log('사각형의 넓이는 ' + squareResult + ' 입니다.');
}
squareArea(10, 15);

// 사다리꼴의 넓이
// 윗변 + 밑변 * 높이 / 2
function trapezoid (topSideArgu, bottomSideArgu, heightArgu) {
    let args = Array.prototype.slice.call(arguments);

    if (args.length === 3){
        let resultTrapzoid = (topSideArgu + bottomSideArgu) * heightArgu / 2;
        console.log('사다리꼴의 넓이는 ' + resultTrapzoid + ' 입니다.');
    } else if (args.length !== 3) {
        console.log('3개의 인자가 필요합니다!');
    }
}
// trapezoid(5, 10); // 3개의 인자가 필요합니다.(의도)
trapezoid(5, 10, 12); // 사다리꼴의 넓이.(의도)


