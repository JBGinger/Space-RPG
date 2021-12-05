const User = require("./User");
const Item = require("./Item");
const Planet = require("./Planet");
const Inventory = require("./Inventory");

// Inventory belongsTo User
Inventory.belongsTo(User);

//User.hasOne(Inventory);

User.belongsToMany(Item, {
	through: Inventory,
	// as: "user_inventory",
	foreignKey: "user_id"
  });

Item.belongsToMany(User, {
	through: Inventory,
	// as: "user_inventory",
	foreignKey: "item_id"
  });

//Inventory.hasMany(Item);

Item.belongsTo(Planet);

Planet.hasMany(Item);

module.exports = { User, Item, Planet, Inventory };
