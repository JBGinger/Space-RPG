const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Inventory, Item, Planet } = require("../models");

router.get("/", (req, res) => {
	console.log(req.session.loggedIn);
	res.render("dashboard", { loggedIn: req.session.loggedIn });
});

module.exports = router;
