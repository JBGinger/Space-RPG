const router = require("express").Router();
const { Item, Planet } = require("../../models");

// GET /api/planets
router.get("/", (req, res) => {
	Planet.findAll({
		include: [
			{
				model: Item,
			},
		],
	})
		.then((dbPlanetData) => res.json(dbPlanetData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// GET /api/planets/1
router.get("/:id", (req, res) => {
	Planet.findOne({
		where: {
			id: req.params.id,
		},
		include: [
			{
				model: Item,
			},
		],
	})
		.then((dbPlanetData) => {
			if (!dbPlanetData) {
				res.status(404).json({ message: "No planet found with this id" });
				return;
			}
			res.json(dbPlanetData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// POST /api/planets
router.post("/", (req, res) => {
	Planet.create({
		planet_name: req.body.planet_name,
	})
		.then((dbPlanetData) => res.json(dbPlanetData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// PUT /api/planets/1
router.put("/:id", (req, res) => {
	Planet.update(req.body, {
		where: {
			id: req.params.id,
		},
	})
		.then((dbPlanetData) => {
			if (!dbPlanetData) {
				res.status(404).json({ message: "No planet found with this id" });
				return;
			}
			res.json(dbPlanetData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// DELETE /api/planets/1
router.delete("/:id", (req, res) => {
	Planet.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then((dbPlanetData) => {
			if (!dbPlanetData) {
				res.status(404).json({ message: "No planet found with this id" });
				return;
			}
			res.json(dbPlanetData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
