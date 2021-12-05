const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Inventory, Item, Planet } = require("../models");

router.get("/", (req, res) => {
	res.render("login");
});

router.get("/logout", (req, res) => {
	req.session.destroy(() => res.redirect("/"));
});

router.get("/signup", (req, res) => {
	res.render("signup");
});

router.get("/inventory", (req, res) => {
	if (!req.session.loggedIn) {
	  res.redirect('/');
	  return;
	}
	res.render("inventory", { name: "Example" });
});

router.get("/dashboard", (req, res) => {
	if (!req.session.loggedIn) {
	  res.redirect('/');
	  return;
	}
	console.log(req.session.loggedIn);
	res.render("dashboard");
});

router.get("/explore", (req, res) => {
	if (!req.session.loggedIn) {
	  res.redirect('/');
	  return;
	}
	res.render("planetselect");
});

router.get("/mars", (req, res) => {
	if (!req.session.loggedIn) {
	  res.redirect('/');
	  return;
	}
	res.render("mars");
});

router.get('/venus', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('venus');
});

router.get('/lowoxygen', (req, res) => {
	if (!req.session.loggedIn) {
	  res.redirect('/');
	  return;
	}
	res.render('lowoxygen');
  });

module.exports = router;
