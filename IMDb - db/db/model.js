const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("movies", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
});

const Movie = sequelize.define("movie", {
  movieid: { type: DataTypes.INTEGER, primaryKey: true },
  title: { type: DataTypes.TEXT },
  storyline: { type: DataTypes.TEXT },
  production_yr: { type: DataTypes.INTEGER },
  is_inTheatres: { type: DataTypes.BOOLEAN },
  is_comingSoon: { type: DataTypes.BOOLEAN },
  movieImdbRating: { type: DataTypes.FLOAT },
  moviePictureRating: { type: DataTypes.TEXT },
});

const Movie_Reviews = sequelize.define("Movie_Reviews", {
  movieid: { type: DataTypes.INTEGER },
  userReviews_id: { type: DataTypes.INTEGER },
});

const Movie_Language = sequelize.define("Movie_Language", {
  movieid: { type: DataTypes.INTEGER },
  language_id: { type: DataTypes.INTEGER },
});

const Movie_News = sequelize.define("Movie_News", {
  movieid: { type: DataTypes.INTEGER },
  news_id: { type: DataTypes.INTEGER },
});

const Movie_Awards = sequelize.define("Movie_Awards", {
  movieid: { type: DataTypes.INTEGER },
  awards_id: { type: DataTypes.INTEGER },
});

const Movie_Videos = sequelize.define("Movie_Videos", {
  movieid: { type: DataTypes.INTEGER },
  videos_id: { type: DataTypes.INTEGER },
});

const Movie_genre = sequelize.define("Movie_genre", {
  movieid: { type: DataTypes.INTEGER },
  genre_id: { type: DataTypes.INTEGER },
});

const Movie_Cast = sequelize.define("Movie_Cast", {
  movieid: { type: DataTypes.INTEGER },
  cast_id: { type: DataTypes.INTEGER },
  role_id: { type: DataTypes.INTEGER },
});

const Movie_Production = sequelize.define("Movie_Production", {
  movieid: { type: DataTypes.INTEGER },
  company_id: { type: DataTypes.INTEGER },
});

const User_Reviews = sequelize.define("User_Reviews", {
  userReviews_id: { type: DataTypes.INTEGER, primaryKey: true },
  movie_id: { type: DataTypes.INTEGER },
  date: { type: DataTypes.STRING },
  text: { type: DataTypes.STRING },
  yourImdbRating_id: { type: DataTypes.FLOAT },
});

const Language = sequelize.define("Language", {
  language_id: { type: DataTypes.INTEGER, primaryKey: true },
  name: { type: DataTypes.STRING },
});

const News = sequelize.define("News", {
  news_id: { type: DataTypes.INTEGER, primaryKey: true },
  headline: { type: DataTypes.STRING },
  text: { type: DataTypes.STRING },
});

const Awards = sequelize.define("Awards", {
  awards_id: { type: DataTypes.INTEGER, primaryKey: true },
  name: { type: DataTypes.STRING },
});

const Videos = sequelize.define("Videos", {
  videos_id: { type: DataTypes.INTEGER, primaryKey: true },
  video: { type: DataTypes.STRING },
});

const Genre = sequelize.define("Genre", {
  genre_id: { type: DataTypes.INTEGER, primaryKey: true },
  name: { type: DataTypes.STRING },
});

const Cast = sequelize.define("Cast", {
  cast_id: { type: DataTypes.INTEGER, primaryKey: true },
  name: { type: DataTypes.STRING },
  gender: { type: DataTypes.STRING },
  movies: { type: DataTypes.STRING },
  roles: { type: DataTypes.STRING },
  imdbRating_id: { type: DataTypes.INTEGER },
  height: { type: DataTypes.STRING },
  age: { type: DataTypes.INTEGER },
});

const Role = sequelize.define("Role", {
  role_id: { type: DataTypes.INTEGER, primaryKey: true },
  name: { type: DataTypes.STRING },
});

const Production = sequelize.define("Production", {
  production_id: { type: DataTypes.INTEGER, primaryKey: true },
  name: { type: DataTypes.STRING },
});

sequelize
  .sync()
  .then(() => {
    console.log("");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = {
  sequelize,
  Movie,
  Movie_Reviews,
  Movie_Language,
  Movie_News,
  Movie_Awards,
  Movie_Videos,
  Movie_genre,
  Movie_Cast,
  Movie_Production,
  User_Reviews,
  Language,
  News,
  Awards,
  Videos,
  Genre,
  Cast,
  Role,
  Production,
};
