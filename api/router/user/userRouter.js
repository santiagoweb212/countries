const { Router } = require("express");
const {
  postCreateUser,
  postLogin,
} = require("../../controller/user.controller");
const passport = require("passport");
const userRouter = Router();
userRouter.post(
  "/register",
  passport.authenticate("local-signup", {
    failWithError: true,
    failureMessage: true,
  }),
  (err, req, res, next) => {
    return res.status(err.statusCode || 500).json({ error: err.message });
  },
  (req, res) => res.send(req.user)
);
userRouter.post(
  "/login",
  passport.authenticate("login", {
    failWithError: true,
    passReqToCallback: true,
    failureMessage: true,
  }),
  (err, req, res, next) => {
    return res.status(err.statusCode || 500).json({ error: err.message });
  },
  (req, res) =>{
		return res.json({ user: req.user, token: req.authInfo})
} 
);

module.exports = userRouter;
