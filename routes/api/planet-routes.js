const router = require("express").Router();
const { User, Inventory, Item, Planet } = require("../../models");

// GET /api/planets
router.get("/", (req, res) => {});

// GET /api/planets/1
router.get("/:id", (req, res) => {});

// POST /api/planets
router.post("/", (req, res) => {});

// PUT /api/planets/1
router.put("/:id", (req, res) => {});

// DELETE /api/planets/1
router.delete("/:id", (req, res) => {});

module.exports = router;
