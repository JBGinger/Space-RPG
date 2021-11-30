const router = require("express").Router();
const { User, Inventory, Item, Planet } = require("../../models");

// GET /api/planets
router.get("/", (req, res) => {
	// TODO:
});

// GET /api/planets/1
router.get("/:id", (req, res) => {
	// TODO:
});

// POST /api/planets
router.post("/", (req, res) => {
	// TODO:
});

// PUT /api/planets/1
router.put("/:id", (req, res) => {
	// TODO:
});

// DELETE /api/planets/1
router.delete("/:id", (req, res) => {
	// TODO:
});

module.exports = router;
