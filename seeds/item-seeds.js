const { Item } = require("../models");

const itemData = [
	{
		item_name: "Obsidian",
		rarity: "common",
		price: 25,
		planet_id: 1,
	},
	{
		item_name: "Sulphur",
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
	{
		item_name: "Apple",
		rarity: "common",
		price: 5,
		planet_id: 3,
	},
	{
		item_name: "Sand",
		rarity: "common",
		price: 20,
		planet_id: 4,
	},
	{
		item_name: "Iron",
		rarity: "common",
		price: 15,
		planet_id: 4,
	},
	{
		item_name: "Water",
		rarity: "uncommon",
		price: 20,
		planet_id: 4,
	},
	{
		item_name: "Alien Egg",
		rarity: "rare",
		price: 50,
		planet_id: 4,
	},
	{
		item_name: "Mars Rover Part",
		rarity: "super rare",
		price: 100,
		planet_id: 4,
	},
	{
		item_name: "Toxic Gas",
		rarity: "common",
		price: 15,
		planet_id: 5,
	},
	{
		item_name: "Ice Rock",
		rarity: "rare",
		price: 75,
		planet_id: 6,
	},
	{
		item_name: "Steel",
		rarity: "uncommon",
		price: 35,
		planet_id: 7,
	},
	{
		item_name: "Trident",
		rarity: "super rare",
		price: 1000,
		planet_id: 8,
	},
	{
		item_name: "Dwarf Stone",
		rarity: "uncommon",
		price: 25,
		planet_id: 9,
	},
];

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;
