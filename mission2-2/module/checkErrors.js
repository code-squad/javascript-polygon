
module.exports.checkNumber = (params) => {
    try {
        for (let value of params) {
            if (typeof value !== "number") {
                throw new Error('숫자만 입력하세요.')
            }
        }
    } catch (e) {
        console.log(e.name + ': ' + e.message);
    }
}

module.exports.checkNumOfArgs = (exceededNumOfArg, ...args) => {
    try {
        if (exceededNumOfArg.length !==0) {
            throw new Error('인자 갯수를 초과했습니다.')
        }

        for (let value of args) {
            if (typeof value === "undefined") {
                throw new Error('인자 갯수가 부족합니다.')
            }
        }

    } catch (e) {
        console.log(e.name + ': ' + e.message);

    }
}