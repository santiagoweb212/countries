const { DataTypes } = require("sequelize");
const sequelize = require("../config/configDb");
const Profile = sequelize.define("Profile", {
  ProfileId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  photo:{
    type: DataTypes.STRING,
  }
});
module.exports = Profile;
