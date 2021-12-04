const router = require("express").Router();
const { User, Inventory, Item, Planet } = require("../../models");

// GET /api/users
router.get("/", (req, res) => {
	User.findAll({
		attributes: { exclude: "password" },
	})
		.then((dbUserData) => res.json(dbUserData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// GET /api/users/1
router.get("/:id", (req, res) => {
	User.findOne({
		attributes: { exclude: ["password"] },
		where: {
			id: req.params.id,
		},
		// TODO: include?????????????
	})
		.then((dbUserData) => {
			if (!dbUserData) {
				res.status(404).json({ message: "No user found with this id" });
				return;
			}
			res.json(dbUserData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// POST /api/users
router.post("/", (req, res) => {
	User.create({
		username: req.body.username,
		password: req.body.password,
	}).then((dbUserData) => {
		req.session.save(() => {
			req.session.user_id = dbUserData.id;
			req.session.username = dbUserData.username;
			req.session.loggedIn = true;

			res.json(dbUserData);
		});
	});
});

// LOGIN /api/users/login
router.post("/login", (req, res) => {
	// query the User table using the findOne() method for the username entered
	User.findOne({
		// take that username and assign it to req.body.username
		where: {
			username: req.body.username,
		},
	}).then((dbUserData) => {
		console.log(dbUserData);
		if (!dbUserData) {
			res.status(400).json({ message: "No user with that username!" });
			return;
		}

		const validPassword = dbUserData.checkPassword(req.body.password);

		if (!validPassword) {
			// console.log(validPassword);
			res.status(400).json({ message: "Incorrect password!" });
			return;
		}

		req.session.save(() => {
			// declare session variables
			req.session.user_id = dbUserData.id;
			req.session.username = dbUserData.username;
			req.session.loggedIn = true;

			res.json({ user: dbUserData, message: "You are logged in!" });
		});
	});
});

// LOGOUT
router.post("/logout", (req, res) => {
	if (req.session.loggedIn) {
		req.session.destroy(() => {
			res.status(204).end();
		});
	} else {
		res.status(404).end();
	}
});

// PUT /api/users/1
router.put("/:id", (req, res) => {
	User.update(req.body, {
		individualHooks: true,
		where: {
			id: req.params.id,
		},
	})
		.then((dbUserData) => {
			if (!dbUserData[0]) {
				res.status(404).json({ message: "No user found with this id" });
				return;
			}
			res.json(dbUserData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// DELETE /api/users/1
router.delete("/:id", (req, res) => {
	User.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then((dbUserData) => {
			if (!dbUserData) {
				res.status(404).json({ message: "No user found with this id" });
				return;
			}
			res.json(dbUserData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
