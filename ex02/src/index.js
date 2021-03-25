function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
    yield 'undefined!';

}
    
    function* insideGenerator1() {
        let x = 1;
        for (let i = 1; i <= 5; i++) {
            yield x + '#';
            x++;
            
        }

}

    function* insideGenerator2() {
        let x = 10;
        for (let i = 10; i <= 15; i++) {
            yield x + '#';
            x++;
        }

}
    function* insideGenerator3() {
        let x = 6;
        for (let i = 6; i <= 9; i++) {
            yield x + '#';
            x++;
        }

}

let iterator = myGenerator();
fifteenArray = [];
for (let i of myGenerator()) {
    iterator.next();
    fifteenArray.push(i);
}
fifteenArray = fifteenArray.join(', ');
console.log(fifteenArray);

module.exports = { fifteenArray, myGenerator};