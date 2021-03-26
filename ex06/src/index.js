let rockStar = new Map();
rockStar.set("artrist", "The Rolling Stones");
rockStar.set("song", "Angie");
rockStar.set("album", "Goats Head Soup");
rockStar.set("singer", "Mick Jagger");

let newRock = new Map();

for (let [key, value] of rockStar.entries()) {
    if (key[0] > 'a') {
       newRock.set(key, value)
    }
};
    

console.log(newRock)

module.exports = { rockStar, newRock };