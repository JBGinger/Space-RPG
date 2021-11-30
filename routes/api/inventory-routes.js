const router = require("express").Router();
const { User, Inventory, Item, Planet } = require("../../models");

// GET /api/inventory
router.get("/", (req, res) => {
	Inventory.findAll({
		include: [
			{
				model: Item,
			},
		],
	})
		.then((dbInventoryData) => res.json(dbInventoryData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// GET /api/inventory/1
router.get("/:id", (req, res) => {
	Inventory.findOne({
		where: {
			id: req.params.id,
		},
	})
		.then((dbInventoryData) => {
			if (!dbInventoryData) {
				res.status(404).json({ message: "No inventory with this id found" });
				return;
			}
			res.json(dbInventoryData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// POST /api/inventory
router.post("/", (req, res) => {
	// TODO: post routes
});

// PUT /api/inventory/1
router.put("/:id", (req, res) => {
	// TODO:
});

// DELETE /api/inventory/1
router.delete("/:id", (req, res) => {
	// TODO:
});

module.exports = router;
