const router = require("express").Router();
const { User, Inventory, Item, Planet } = require("../../models");

// GET /api/inventory
router.get("/", (req, res) => {});

// GET /api/inventory/1
router.get("/:id", (req, res) => {});

// POST /api/inventory
router.post("/", (req, res) => {});

// PUT /api/inventory/1
router.put("/:id", (req, res) => {});

// DELETE /api/inventory/1
router.delete("/:id", (req, res) => {});

module.exports = router;
