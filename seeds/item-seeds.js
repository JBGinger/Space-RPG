const { Item } = require("../models");

const itemData = [
	//Mars Objects
	{
		item_name: "Martian Sand",
		rarity: "Common",
		price: 1,
		planet_id: 1,
	},
	{
		item_name: "Water",
		rarity: "Common",
		price: 20,
		planet_id: 1,
	},
	{
		item_name: "Limestone",
		rarity: "Common",
		price: 20,
		planet_id: 1,
	},
	{
		item_name: "Steel",
		rarity: "Uncommon",
		price: 35,
		planet_id: 1,
	},
	{
		item_name: "Ice Rock",
		rarity: "Uncommon",
		price: 75,
		planet_id: 1,
	},
	{
		item_name: "Apple",
		rarity: "Uncommon",
		price: 40,
		planet_id: 1,
	},
	{
		item_name: "Alien Egg",
		rarity: "Rare",
		price: 50,
		planet_id: 1,
	},
	{
		item_name: "Mars Rover Part",
		rarity: "Rare",
		price: 100,
		planet_id: 1,
	},
	{
		item_name: "Trident",
		rarity: "Super Rare",
		price: 1000,
		planet_id: 1,
	},
	//Venus Objects
	{
		item_name: "Venusian Sand",
		rarity: "Common",
		price: 1,
		planet_id: 2,
	},
	{
		item_name: "Iron",
		rarity: "Common",
		price: 10,
		planet_id: 2,
	},
	{
		item_name: "Toxic Gas",
		rarity: "Common",
		price: 15,
		planet_id: 2,
	},
	{
		item_name: "Obsidian",
		rarity: "Uncommon",
		price: 30,
		planet_id: 2,
	},
	{
		item_name: "Dwarf Stone",
		rarity: "Uncommon",
		price: 25,
		planet_id: 2,
	},
	{
		item_name: "Sulfur",
		rarity: "Uncommon",
		price: 40,
		planet_id: 2,
	},	
	{
		item_name: "Lava",
		rarity: "Rare",
		price: 50,
		planet_id: 2,
	},
	{
		item_name: "Alien Plant",
		rarity: "Rare",
		price: 100,
		planet_id: 2,
	},
	{
		item_name: "Soviet Probe",
		rarity: "Super Rare",
		price: 1000,
		planet_id: 2,
	},
];

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;