const express = require("express");
const app = express();
const port = 3000;

const { sequelize } = require("./db/model.js");

const movieRoutes = require("./routes/movies.js");

app.get("/", (req, res) => {
  res.send("Server Connected!");
});

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

app.use("/", movieRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
