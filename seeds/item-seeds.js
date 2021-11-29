const { Item } = require("../models");

const itemData = [
	{
		item_name: "Sand",
		rarity: "common",
		price: 20,
		planet_id: 1,
	},
	{
		item_name: "Iron",
		rarity: "common",
		price: 15,
		planet_id: 1,
	},
	{
		item_name: "Water",
		rarity: "uncommon",
		price: 20,
		planet_id: 1,
	},
	{
		item_name: "Alien Egg",
		rarity: "rare",
		price: 50,
		planet_id: 1,
	},
	{
		item_name: "Mars Rover Part",
		rarity: "super rare",
		price: 100,
		planet_id: 1,
	},
	{
		item_name: "Sulfer",
		rarity: "common",
		price: 10,
		planet_id: 2,
	},
	{
		item_name: "Limestone",
		rarity: "common",
		price: 20,
		planet_id: 2,
	},
	{
		item_name: "Lava",
		rarity: "uncommon",
		price: 50,
		planet_id: 2,
	},
	{
		item_name: "Alien Plant",
		rarity: "rare",
		price: 100,
		planet_id: 2,
	},
	{
		item_name: "Soviet Probe",
		rarity: "super rare",
		price: 200,
		planet_id: 2,
	},
];

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;
