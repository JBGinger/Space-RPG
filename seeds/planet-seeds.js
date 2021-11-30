const { Planet } = require("../models");

const planetData = [
	{
		planet_name: "Mercury",
	},
	{
		planet_name: "Venus",
	},
	{
		planet_name: "Earth",
	},
	{
		planet_name: "Mars",
	},
	{
		planet_name: "Jupiter",
	},
	{
		planet_name: "Saturn",
	},
	{
		planet_name: "Uranus",
	},
	{
		planet_name: "Neptune",
	},
	{
		planet_name: "Pluto",
	},
];

const seedPlanets = () => Planet.bulkCreate(planetData);

module.exports = seedPlanets;
