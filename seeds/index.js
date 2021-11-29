const seedUsers = require("./user-seeds");
const seedItems = require("./item-seeds");
const seedPlanets = require("./planet-seeds");
const seedInventory = require("./inventory-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
	await sequelize.sync({ force: true });
	console.log("\n----- DATABASE SYNCED -----\n");

	await seedUsers();
	console.log("\n----- USERS SEEDED -----\n");

	await seedPlanets();
	console.log("\n----- PLANETS SEEDED -----\n");

	await seedItems();
	console.log("\n----- ITEMS SEEDED -----\n");

	await seedInventory();
	console.log("\n----- INVENTORY SEEDED -----\n");

	process.exit(0);
};

seedAll();
