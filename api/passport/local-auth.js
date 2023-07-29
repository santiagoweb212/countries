const { hashPassword, mathPassword } = require("../helper/handleBycript");
const { createToken } = require("../helper/handleJwt");
const { LocalUser, Profile } = require("../model");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;

passport.serializeUser((user, done) => {
  done(null, user.localUserId);
});
passport.deserializeUser(async (id, done) => {
  const user = await LocalUser.findByPk(id);
  done(null, user);
});

passport.use(
  "local-signup",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const user = await LocalUser.findOne({
          where: {
            email: email,
          },
        });
        if (user) {
          console.log("esty aca");
          const error = new Error("El usuario ya existe");
          error.statusCode = 400;
          return done(error, false);
        }

        const newUser = await LocalUser.create(
          {
            name: req.body.name,
            email,
            password: hashPassword(password),
            Profile: {
              name: req.body.name,
              photo: null,
              idLocalUser: LocalUser.localUserId,
            },
          },
          { include: [Profile] }
        );
        done(null, newUser, { message: "user sucessfull" });
      } catch (error) {
        return done(error);
      }
    }
  )
);
/* 
passport.use(
  "login",
  new localStrategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true,
  }),
  async (req, email, password,done) => {
    const user = await LocalUser.findOne({ where: { email } });
    if (!user) {
      const error = new Error("El usuario no existe");
      error.statusCode = 400;
      return done(error, false);
    } else if (mathPassword(password, user.password)) {
      const token=createToken(user)
      return done(null, user, { token });
    }else{
      const error = new Error("contraseña incorrecta");
      error.statusCode = 400;
      return done(error, false);
    }
  }
);
 */


passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const user = await LocalUser.findOne({ where: { email } });
        if (!user) {
          const error = new Error("El usuario no existe");
          error.statusCode = 400;
          return done(error, false);
        } else if (mathPassword(password, user.password)) {
          const token = createToken(user);
          return done(null, user, token );
        } else {
          const error = new Error("contraseña incorrecta");
          error.statusCode = 400;
          return done(error, false);
        }
      } catch (error) {
        return done(error);
      }
    }
  )
);
