const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create Items model
class Item extends Model {}

// define fields/columns for Item model
Item.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		item_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		rarity: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		price: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		planet_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "planet",
				key: "id",
			},
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "item",
	}
);

module.exports = Item;
