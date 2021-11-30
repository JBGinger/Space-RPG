const User = require("./User");
const Item = require("./Item");
const Planet = require("./Planet");
const Inventory = require("./Inventory");

// Inventory belongsTo User
Inventory.belongsTo(User);

User.hasOne(Inventory);

Inventory.hasMany(Item);

Item.belongsTo(Inventory);

module.exports = { User, Item, Planet, Inventory };
