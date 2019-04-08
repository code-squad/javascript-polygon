module.exports = (length, width) => {
    try {
        if((isNaN(length) || isNaN(width))) {
            throw "Invalid Input!! Start Again!!\n";
        }
        return parseInt(length * width);
    } 
    catch(err) {
        console.log(err);
    }

}