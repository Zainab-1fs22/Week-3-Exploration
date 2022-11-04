const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const cors = require("cors");
const passport = require("passport");

const authRoutes = require("./routes/index");

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.options("*", cors());

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "SECRET",
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

app.use("/", authRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("App listening on port " + port));
