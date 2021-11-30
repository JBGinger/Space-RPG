const { Inventory } = require("../models");

const inventoryData = [
	{
		user_id: 1,
		item_id: 3,
	},
	{
		user_id: 2,
		item_id: 8,
	},
	{
		user_id: 3,
		item_id: 5,
	},
	{
		user_id: 4,
		item_id: 13,
	},
];

const seedInventory = () => Inventory.bulkCreate(inventoryData);

module.exports = seedInventory;
