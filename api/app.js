require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./router");
const passport = require("passport");
const session = require("express-session");
require("./passport/local-auth");
const app = express();
app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/", router);


module.exports = app;
