const { _ } = require("lodash");
const { dynamicSort } = require("./helpers");

var rarities = [
    {
        type: "common",
        chance: 0
    },
    {
        type: "uncommon",
        chance: 45
    },
    {
        type: "rare",
        chance: 10
    },
    {
        type: "ultra-rare",
        chance: 3
    }
];

function pickRarity() {
    // Calculate chances for common
    var filler = 100 - rarities.map(r => r.chance).reduce((sum, current) => sum + current);
  
    if (filler <= 0) {
      console.log("chances sum is higher than 100!");
      return;
    }
  
    // Create an array of 100 elements, based on the chances field
    var probability = rarities.map((r, i) => Array(r.chance === 0 ? filler : r.chance).fill(i)).reduce((c, v) => c.concat(v), []);
  
    // Pick one
    var pIndex = Math.floor(Math.random() * 100);
    var rarity = rarities[probability[pIndex]];
  
    //console.log(rarity.type);
    return rarity.type;
}



function packBuilder(sourceDeck) {
    let deck = [];

    for (let i=0; i<5; i++) {
        let card = sourceDeck[_.random(11)];
        let rarity = pickRarity();

        //console.log(card.rarity);
        //console.log(rarity);
        if (card.rarity === rarity) {
            console.log("Pushing card, ", card.rarity, rarity);
            deck.push(card);
        } else {
            i--;
        }
    }
      
    return deck.sort(dynamicSort("rarityOrder"));
}

module.exports = { packBuilder };