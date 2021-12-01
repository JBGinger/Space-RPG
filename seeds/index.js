const seedUsers = require("./user-seeds");
const seedItems = require("./item-seeds");
const seedPlanets = require("./planet-seeds");
const seedInventory = require("./inventory-seeds");

const sequelize = require("../config/connection");
const { Item, Inventory, Planet, User } = require("../models");

const seedAll = async () => {
	await sequelize.sync({ force: true });
	console.log("\n----- DATABASE SYNCED -----\n");

	const users = await seedUsers();
	console.log(users[0].username);
	console.log("\n----- USERS SEEDED -----\n");

	const planets = await seedPlanets();
	console.log("\n----- PLANETS SEEDED -----\n");

	const items = await seedItems();
	console.log("\n----- ITEMS SEEDED -----\n");

	// use sequelize 'set' to seed inventory
	const inventory = await seedInventory();

	await inventory[0].setItems(items[0]);
	// await inventory[0].setItems(items[2]);
	await inventory[1].setItems(items[1]);
	await inventory[2].setItems(items[2]);
	await inventory[3].setItems(items[3]);

	await Inventory.findAll({
		include: [
			{
				model: Item,
				key: "id",
			},
		],
	}).then((dbInventory) => console.log(dbInventory));

	process.exit(0);
};

seedAll();
