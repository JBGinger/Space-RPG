const router = require("express").Router();
const { Item, Planet } = require("../../models");

router.get("/", (req, res) => {
    var diceThrow = 95;
    //var diceThrow = req.params.dicethrow;
    var rarity = "";
    if (diceThrow <= 100 && diceThrow >= 95) {
        rarity = "super rare";
    } else if (diceThrow < 95 && diceThrow >= 80) {
        rarity = "rare";
    }

    //Find items that match selected rarity. Math.random ensures that only one random item is selected.
	Item.findAll({
        where: {
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