const reverseString = function(str) {
    let whatever = ""
    for (let i = str.length -1; i >= 0; i--) {
        whatever += str[i];
    }
    return whatever;

};

let wow = "not your type";
console.log(reverseString(wow));

// Do not edit below this line
module.exports = reverseString;
