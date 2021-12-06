const router = require("express").Router();
const d20 = require("d20");
const { Item, Planet } = require("../../models");

router.get("/", (req, res) => {
	var diceThrow = d20.roll(20);
	var rarity = "";
	// if dice roll is <= 20 & > 19 set rarity value to 'super rare'
	if (diceThrow <= 20 && diceThrow > 19) {
		rarity = "Super Rare";
	} else if (diceThrow <= 19 && diceThrow >= 16) {
		rarity = "Rare";
	} else if (diceThrow < 16 && diceThrow >= 11) {
		rarity = "Uncommon";
	} else if (diceThrow <= 10 && diceThrow >= 1) {
		rarity = "Common";
	}

	//Find items that match selected rarity. Math.random ensures that only one random item is selected.
	Item.findAll({
		where: {
			planet_id: 1,
			rarity: rarity,
		},
		attributes: ["item_name", "rarity", "price"],
	})
		.then((dbItemData) => {
			// selects random item from returned rarity
			var itemIndex = Math.floor(Math.random() * dbItemData.length);
			// found item ( ex/ dbItemData[0] )
			var item = dbItemData[itemIndex];
			// returning the response as a JSON object called Item
			res.json({ Item: item });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
