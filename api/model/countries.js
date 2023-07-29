const sequelize = require("../config/configDb");
const { DataTypes } = require("sequelize");
const Countrie = sequelize.define("Countrie", {
  countrieId: {
    type: DataTypes.STRING(3),
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  flags: {type:DataTypes.STRING},
  capital: {type:DataTypes.STRING},
  continents: {type:DataTypes.STRING},
  population: {type:DataTypes.STRING},
  maps: {type:DataTypes.STRING},
  languages: {type:DataTypes.STRING},
});
module.exports=Countrie;
