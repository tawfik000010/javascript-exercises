const removeFromArray = function(arr, ...rm) {
    return arr.filter(item => !rm.includes(item));
};
let ahhh = [1,2,3,4,5,6,7,8];
console.log(removeFromArray(ahhh, 972));
// Do not edit below this line
module.exports = removeFromArray;
