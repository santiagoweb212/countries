require("dotenv").config({ path: "./.env" });
const app = require("./app");
const sequelize = require("./config/configDb");
const fs = require("fs");
const path = require("path");
const modelsRequest = () => {
  const pathModel = `${__dirname}/model`;
  fs.readdirSync(pathModel).forEach((file) => require(`${pathModel}/${file}`));
};

const main = async () => {
  const PORT = 3000;
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync({ force: false });
    app.listen(PORT, () => console.log("server is running on port", PORT));
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
modelsRequest();
main();
