const { getCollection } = require("./utils/astraClient");

exports.handler = async function () {
    const cardCollection = await getCollection();
    const cards = [
        {
            "owl_id": "owl_01",
            "rarityOrder": 1,
            "rarity": "uncommon",
            "imgURL": "https://i.imgur.com/RzpbCJg.png"
        },
        {
            "owl_id": "owl_02",
            "rarityOrder": 0,
            "rarity": "common",
            "imgURL": "https://i.imgur.com/qKiV3dI.png"
        },
        {
            "owl_id": "owl_03",
            "rarityOrder": 0,
            "rarity": "common",
            "imgURL": "https://i.imgur.com/b2YWkJq.png"
        },
        {
            "owl_id": "owl_04",
            "rarityOrder": 0,
            "rarity": "common",
            "imgURL": "https://i.imgur.com/aNPifqg.png"
        },
        {
            "owl_id": "owl_05",
            "rarityOrder": 0,
            "rarity": "common",
            "imgURL": "https://i.imgur.com/lFmgnFj.png"
        },
        {
            "owl_id": "owl_06",
            "rarityOrder": 1,
            "rarity": "uncommon",
            "imgURL": "https://i.imgur.com/Xl5borx.png"
        },
        {
            "owl_id": "owl_07",
            "rarityOrder": 0,
            "rarity": "common",
            "imgURL": "https://i.imgur.com/Ppl525s.png"
        },
        {
            "owl_id": "owl_08",
            "rarityOrder": 0,
            "rarity": "common",
            "imgURL": "https://i.imgur.com/t9fnfaY.png"
        },
        {
            "owl_id": "owl_09",
            "rarityOrder": 2,
            "rarity": "rare",
            "imgURL": "https://i.imgur.com/UVrQwu4.png"
        },
        {
            "owl_id": "owl_10",
            "rarityOrder": 2,
            "rarity": "rare",
            "imgURL": "https://i.imgur.com/nfXbo4I.png"
        },
        {
            "owl_id": "owl_11",
            "rarityOrder": 1,
            "rarity": "uncommon",
            "imgURL": "https://i.imgur.com/8P24q8A.png"
        },
        {
            "owl_id": "owl_12",
            "rarityOrder": 3,
            "rarity": "ultra-rare",
            "imgURL": "https://i.imgur.com/CIV2Yhq.png"
        }
    ];

    try {
        for (let i = 0; i < cards.length; i++) {
            await cardCollection.create(cards[i].owl_id.toString(), cards[i]);
        }

        return {
            statusCode: 200,
            headers: {
                'Content-type': 'application/json',
            },
        };
    } catch (e) {
        console.error(e);
        return {
            statusCode: 500,
            body: JSON.stringify(e),
        };
    }
};