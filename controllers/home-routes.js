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
	// if user is not logged in, send them to login page
	if (!req.session.loggedIn) {
		res.redirect('/');
		return;
	}
	User.findOne({
		where: {
			id: req.session.user_id
		},
		attributes: [
			'id',
			'username'
		],
		include: [
			{
				model: Item,
				attributes: ['id', 'item_name', 'rarity', 'price']
			}
		]
	})
		.then(dbUserData => {
			console.log(dbUserData)
			if (!dbUserData) {
				res.status(404).json({ message: 'No User found with this id' });
				return;
			}
			res.render("inventory", {
				user: {
					id: req.session.user_id, username: req.session.username
				}
			});
		})
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
	res.render("mars", {
		user: {
			id: req.session.user_id, username: req.session.username
		}
	});
});

router.get('/venus', (req, res) => {
	if (!req.session.loggedIn) {
		res.redirect('/');
		return;
	}
	res.render("venus", {
		user: {
			id: req.session.user_id, username: req.session.username
		}
	});
});

router.get('/lowoxygen', (req, res) => {
	if (!req.session.loggedIn) {
		res.redirect('/');
		return;
	}
	res.render('lowoxygen');
});

router.get('/user', (req, res) => {
	if (!req.session.loggedIn) {
		res.redirect('/');
		return;
	}
	res.render('lowoxygen');
});

module.exports = router;
