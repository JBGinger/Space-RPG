const { Planet } = require("../models");

const planetData = [
	{
		planet_name: "Mars",
	},
	{
		planet_name: "Venus",
	},
];

const seedPlanets = () => Planet.bulkCreate(planetData);

module.exports = seedPlanets;
