const router = require("express").Router();
const { User, Inventory, Item, Planet } = require("../../models");

// GET /api/inventory
router.get("/", (req, res) => {
	console.log('current session', req.session);

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
		include: [
			{
				model: Item,
			},
		],
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
// FIXME: figure out what is needed from this POST route
router.post("/", (req, res) => {
	Inventory.create({
		user_id: req.body.user_id,
	})
		.then((dbInventoryData) => res.json(dbInventoryData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// PUT /api/inventory/1
// FIXME: see what we will need this route for to adjust
router.put("/:id", (req, res) => {
	Inventory.update(req.body, {
		where: {
			id: req.params.id,
		},
	})
		.then((dbInventoryData) => {
			if (!dbInventoryData) {
				res.status(404).json({ message: "No inventory found with this id" });
				return;
			}
			res.json(dbInventoryData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// DELETE /api/inventory/1
router.delete("/:id", (req, res) => {
	// TODO:
	Inventory.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then((dbInventoryData) => {
			if (!dbInventoryData) {
				res.status(404).json({ message: "No inventory found with this id" });
				return;
			}
			res.json(dbInventoryData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
