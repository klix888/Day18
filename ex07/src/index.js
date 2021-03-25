
let numberArray = [9, 5, 4, 11, 5, 12, 13, 15, 4, 2, 5];
let mySet = new Set(numberArray);

let uniqueArray = [];
for (let i of mySet) {
    uniqueArray.push(i);
}
uniqueArray.sort((a, b) => a - b);

console.log(uniqueArray)
module.exports = { numberArray, uniqueArray };