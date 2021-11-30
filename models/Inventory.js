const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create Inventory model
class Inventory extends Model {}

// define fields/columns for Inventory model
Inventory.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "user",
				key: "id",
			},
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "inventory",
	}
);

module.exports = Inventory;
