module.exports = (radius, height) => {
        try {
            if((isNaN(radius) || isNaN(height))) {
                throw "Invalid Input!! Start Again!!\n";
            }
            return parseInt(((2 * Math.PI) + (2 * Math.PI * radius) + (height)));
        } 
        catch(err) {
            console.log(err);
        }
}