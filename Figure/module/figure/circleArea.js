module.exports = (radius) => {
    try {
        if((isNaN(radius))) {
            throw "Invalid Input!! Start Again!!\n";
        }
        return parseInt(radius * radius * Math.PI);
    } 
    catch(err) {
        console.log(err);
    }
}    
