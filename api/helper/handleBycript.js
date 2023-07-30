const bcrypt = require("bcryptjs");

const hashPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};
const mathPassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};
module.exports={
    hashPassword,mathPassword
}

