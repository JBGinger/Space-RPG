const router = require("express").Router();
const d20 = require("d20");
const { Item, Planet } = require("../../models");

router.get("/", (req, res) => {
    var diceThrow = 95;
    //var diceThrow = req.params.dicethrow;
    var rarity = "";
    if (diceThrow <= 100 && diceThrow >= 99) {
        rarity = "super rare";
    } else if (diceThrow < 99 && diceThrow >= 80) {
        rarity = "rare";
    } else if (diceThrow < 80 && diceThrow >= 60) {
        rarity = "uncommon";
    } else if (diceThrow < 60 && diceThrow >= 1) {
        rarity = "common";
    }

    //Find items that match selected rarity. Math.random ensures that only one random item is selected.
	Item.findAll({
        where: {
            planet_id: 1,
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