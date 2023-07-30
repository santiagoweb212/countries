const jwt = require("jsonwebtoken");
const SECRET_TOKEN = "123456789";
const createToken = (user) => {
  return jwt.sign({ idUser: user.localUserId }, SECRET_TOKEN, {
    expiresIn: "24h",
  });
};
const verifyToken = (token) => {
  return jwt.verify(token, SECRET_TOKEN);
};
module.exports = {createToken,verifyToken}