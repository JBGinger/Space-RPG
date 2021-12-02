const User = require("./User");
const Item = require("./Item");
const Planet = require("./Planet");
const Inventory = require("./Inventory");

// Inventory belongsTo User
Inventory.belongsTo(User);

User.hasOne(Inventory);

Item.belongsTo(Inventory);

Inventory.hasMany(Item);

Item.belongsTo(Planet);

Planet.hasMany(Item);

module.exports = { User, Item, Planet, Inventory };
