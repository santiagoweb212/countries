const sequelize = require("../config/configDb");
const { DataTypes } = require("sequelize");

const LocalUser = sequelize.define("LocalUser", {
  localUserId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = LocalUser;
