let shoppingList = new Map();
shoppingList.set('Banana', 3);
shoppingList.set('Pineapple', 5);
shoppingList.set('Pear', 2);
shoppingList.set('Carrot', 10);
shoppingList.set('Apple', 1.5);

let arrKey = [];
let arrValue = [];

for (let keys of shoppingList) {
    arrKey.push(`${keys[0]}`);
}
arrKey.forEach((key) => { console.log("groceries: ", key ); });

for (let values of shoppingList) {
    arrValue.push(`${values[1]}`);
}
arrValue.forEach((values) => { console.log("amount: ", values)});

for (let [keys, values] of shoppingList.entries()) {
    console.log([keys, values]);
}

module.exports = { shoppingList, arrKey, arrValue };