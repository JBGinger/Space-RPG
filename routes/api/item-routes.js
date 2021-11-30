const router = require("express").Router();
const { User, Inventory, Item, Planet } = require("../../models");

// GET /api/items
router.get("/", (req, res) => {
	Item.findAll({
		attributes: ["id", "item_name", "rarity", "price", "planet_id"],
	})
		.then((dbItemData) => res.json(dbItemData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// GET /api/
router.get("/:id", (req, res) => {
	Item.findOne({
		where: {
			id: req.params.id,
		},
	})
		.then((dbItemData) => {
			if (!dbItemData) {
				res.status(404).json({ message: "No item found with this id" });
				return;
			}
			res.json(dbItemData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// POST /api/
router.post("/", (req, res) => {
	Item.create({
		item_name: req.body.item_name,
		rarity: req.body.rarity,
		price: req.body.price,
		planet_id: req.body.planet_id,
	})
		// TODO: import inventory model, use .setItems method
		.then((dbItemData) => res.json(dbItemData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// PUT /api/
router.put("/:id", (req, res) => {
	// TODO:
});

// DELETE /api/
router.delete("/:id", (req, res) => {
	Item.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then((dbItemData) => {
			if (!dbItemData) {
				res.status(404).json({ message: "No item found with this id" });
				return;
			}
			res.json(dbItemData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
