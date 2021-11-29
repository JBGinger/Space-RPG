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
];

const seedInventory = () => Inventory.bulkCreate(inventoryData);

module.exports = seedInventory;
