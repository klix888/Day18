let shoppingList = new Map();
shoppingList.set("groceries", ["Banana", "Pineapple"]);



let iterator1 = shoppingList;
let arrKey = [];
let arrValue = [];
for (let [key, value] of shoppingList.entries()) {
    arrKey.push(`${key}: ${value}`);
}
console.log(arrKey);
module.exports = { shoppingList, arrKey, arrValue };