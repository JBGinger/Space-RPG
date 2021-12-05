const bcrypt = require("bcrypt");
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {
	checkPassword(loginPw) {
		console.log(loginPw, this.password);
		return bcrypt.compareSync(loginPw, this.password);
	}
}

User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [4],
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [4],
			},
		},
		// inventory_id: {
		// 	type: DataTypes.INTEGER,
		// 	references: {
		// 		model: "inventory",
		// 		key: "id",
		// 	},
		// },
	},
	{
		hooks: {
			async beforeCreate(newUserData) {
				newUserData.password = await bcrypt.hash(newUserData.password, 8);
				return newUserData;
			},
			async beforeUpdate(updatedUserData) {
				updatedUserData.password = await bcrypt.hash(
					updatedUserData.password,
					8
				);
				return updatedUserData;
			},
		},
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "user",
	}
);

module.exports = User;
