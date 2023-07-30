const sequelize = require("../config/configDb");
const { DataTypes } = require("sequelize");
const Activity = sequelize.define("Activity", {
  activityId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  difficulty: { type: DataTypes.ENUM("1", "2", "3"), allowNull: false },
  dateTime: { type: DataTypes.DATE, allowNull: false },
  duration: { type: DataTypes.INTEGER, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});
module.exports = Activity;
