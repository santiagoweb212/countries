const sequelize = require("../config/configDb");
const { DataTypes } = require("sequelize");

const ExternalUser = sequelize.define("ExternalUser", {
  externalUserId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  provider: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  providerUserId: {
    type: DataTypes.STRING,
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
});
module.exports = ExternalUser;
