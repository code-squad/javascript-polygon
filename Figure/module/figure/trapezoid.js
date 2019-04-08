module.exports = (Bbase, Tbase, height) => {
    try {
        if((isNaN(Bbase) || isNaN(Tbase) || isNaN(height))) {
            throw "Invalid Input!! Start Again!!\n";
        }
        return parseInt((((Bbase + Tbase) * (height)) / 2));
    } 
    catch(err) {
        console.log(err);
    }
}