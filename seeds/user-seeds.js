const { User } = require("../models");

const userData = [
	{
		username: "MarkGranade",
		password: "password123",
	},
	{
		username: "AlPal",
		password: "123password",
	},
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
