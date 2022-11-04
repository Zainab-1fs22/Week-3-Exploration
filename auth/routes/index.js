const express = require("express");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const passport = require("passport");

const router = express.Router();
const GOOGLE_CLIENT_ID = "aaaaaa";
const GOOGLE_CLIENT_SECRET = "cccc";

let user;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://127.0.0.1:3000/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      user = { profile, accessToken, refreshToken };
      return done(null, user);
    }
  )
);

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/error" }),
  function (req, res) {
    res.redirect("/success");
  }
);

router.get("/error", (req, res) => {
  return res
    .status(401)
    .json({ success: 0, message: "Failed to authenticate" });
});

router.get("/success", (req, res) => {
  return res
    .status(200)
    .json({ success: 0, message: "Login Successful", data: user });
});

router.get("/test", (req, res) => {
  res
    .status(200)
    .json({ success: 1, message: "Server is running successfully" });
});

module.exports = router;
