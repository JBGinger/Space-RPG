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
	{
		username: "TheRealAlGore",
		password: "PolarBearsRul3",
	},
	{
		username: "BenKissel1",
		password: "bigFoot67",
	},
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
