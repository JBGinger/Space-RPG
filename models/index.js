const User = require("./User");
const Item = require("./Item");
const Planet = require("./Planet");
const Inventory = require("./Inventory");

// Inventory belongsTo User
Inventory.belongsTo(User, {
	foreignKey: "user_id",
});

// Inventory.hasMany(Item, {
// 	foreignKey: "inventory_id",
// });

module.exports = { User, Item, Planet, Inventory };
