require("dotenv").config({ path: "./.env" });
const { Sequelize } = require("sequelize");
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/${DB_NAME}`
);
module.exports = sequelize;

