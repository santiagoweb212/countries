const { hashPassword, mathPassword } = require("../helper/handleBycript");
const { LocalUser, Profile } = require("../model");
const postCreateUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    const newUser = await LocalUser.create(
      {
        name,
        email,
        password: hashPassword(password),
        Profile: {
          name,
          photo: null,
          idLocalUser: LocalUser.localUserId,
        },
      },
      {
        include: [Profile],
      }
    );
    if (!newUser) {
      const error = new Error("error al crear usuario");
      error.statusCode = 400;
      throw error;
    } else {
      return res
        .status(201)
        .json({ message: "usuario creado exitosamente", newUser });
    }
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
    return;
  }
};
const postLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await LocalUser.findOne({ where: { email } });
    if (!user) {
      const error = new Error("usuario no encontrado");
      error.statusCode = 404;
      throw error;
    } else if (!mathPassword(password, user.password)) {
      const error = new Error("contraseña incorrecta");
      error.statusCode = 404;
      throw error;
    } else {
      res.status(200).json({ message: "usuario logueado exitosamente", user });
    }
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
    return;
  }
};
module.exports = { postCreateUser, postLogin };
