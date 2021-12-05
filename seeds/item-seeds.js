const { Item } = require("../models");

const itemData = [
	//Mars Objects
	{
		item_name: "Martian Sand",
		rarity: "common",
		price: 1,
		planet_id: 1,
	},
	{
		item_name: "Water",
		rarity: "common",
		price: 20,
		planet_id: 1,
	},
	{
		item_name: "Limestone",
		rarity: "common",
		price: 20,
		planet_id: 1,
	},
	{
		item_name: "Steel",
		rarity: "uncommon",
		price: 35,
		planet_id: 1,
	},
	{
		item_name: "Ice Rock",
		rarity: "uncommon",
		price: 75,
		planet_id: 1,
	},
	{
		item_name: "Apple",
		rarity: "uncommon",
		price: 40,
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
		rarity: "rare",
		price: 100,
		planet_id: 1,
	},
	{
		item_name: "Trident",
		rarity: "super rare",
		price: 1000,
		planet_id: 1,
	},
	//Venus Objects
	{
		item_name: "Venusian Sand",
		rarity: "common",
		price: 1,
		planet_id: 2,
	},
	{
		item_name: "Iron",
		rarity: "common",
		price: 10,
		planet_id: 2,
	},
	{
		item_name: "Toxic Gas",
		rarity: "common",
		price: 15,
		planet_id: 2,
	},
	{
		item_name: "Obsidian",
		rarity: "uncommon",
		price: 30,
		planet_id: 2,
	},
	{
		item_name: "Dwarf Stone",
		rarity: "uncommon",
		price: 25,
		planet_id: 2,
	},
	{
		item_name: "Sulfur",
		rarity: "uncommon",
		price: 40,
		planet_id: 2,
	},	
	{
		item_name: "Lava",
		rarity: "rare",
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
		price: 1000,
		planet_id: 2,
	},
];

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;