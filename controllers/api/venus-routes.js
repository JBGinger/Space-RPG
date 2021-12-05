const router = require("express").Router();
const d20 = require("d20");
const { Item, Planet } = require("../../models");

router.get("/", (req, res) => {
    var diceThrow = d20.roll(20);
    var rarity = "";
    if (diceThrow <= 20 && diceThrow > 19) {
        rarity = "super rare";
    } else if (diceThrow <= 19 && diceThrow >= 16) {
        rarity = "rare";
    } else if (diceThrow < 16 && diceThrow >= 11) {
        rarity = "uncommon";
    } else if (diceThrow <= 10 && diceThrow >= 1) {
        rarity = "common";
    }

    //Find items that match selected rarity. Math.random ensures that only one random item is selected.
	Item.findAll({
        where: {
            planet_id: 2,
            rarity: rarity
        }
	})
		.then((dbItemData) => {
            var itemIndex = Math.floor(Math.random() * dbItemData.length);
            var item = dbItemData[itemIndex];
            res.json({"Item": item})
        })
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;