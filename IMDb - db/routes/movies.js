const express = require("express");

const router = express.Router();

const {
  Movie,
  Awards,
  Cast,
  Genre,
  Language,
  Movie_Awards,
  Movie_Cast,
  Movie_genre,
  Movie_Language,
  Movie_News,
  Movie_Production,
  Movie_Reviews,
  Movie_Videos,
  News,
  Production,
  Role,
  User_Reviews,
  Videos,
  sequelize,
} = require("../db/model.js");

router.get("/movies", (req, res) => {
  Movie.findAll()
    .then((data) => {
      if (data.length > 0) return res.status(200).json({ movies: data });
      else return res.status(200).json({ message: "No movies found" });
    })
    .catch((error) => {
      console.error("Failed to retrieve data : ", error);
    });
  Awards.findAll()
    .then((data) => {
      if (data.length > 0) return res.status(200).json({ movies: data });
      else return res.status(200).json({ message: "No Awards found" });
    })
    .catch((error) => {
      console.error("Failed to retrieve data : ", error);
    });
  Cast.findAll()
    .then((data) => {
      if (data.length > 0) return res.status(200).json({ movies: data });
      else return res.status(200).json({ message: "No Awards found" });
    })
    .catch((error) => {
      console.error("Failed to retrieve data : ", error);
    });
  Genre.findAll()
    .then((data) => {
      if (data.length > 0) return res.status(200).json({ movies: data });
      else return res.status(200).json({ message: "No Awards found" });
    })
    .catch((error) => {
      console.error("Failed to retrieve data : ", error);
    });
  Language.findAll()
    .then((data) => {
      if (data.length > 0) return res.status(200).json({ movies: data });
      else return res.status(200).json({ message: "No Awards found" });
    })
    .catch((error) => {
      console.error("Failed to retrieve data : ", error);
    });
  Movie_Awards.findAll()
    .then((data) => {
      if (data.length > 0) return res.status(200).json({ movies: data });
      else return res.status(200).json({ message: "No Awards found" });
    })
    .catch((error) => {
      console.error("Failed to retrieve data : ", error);
    });
  Movie_Cast.findAll()
    .then((data) => {
      if (data.length > 0) return res.status(200).json({ movies: data });
      else return res.status(200).json({ message: "No Awards found" });
    })
    .catch((error) => {
      console.error("Failed to retrieve data : ", error);
    });
  Movie_genre.findAll()
    .then((data) => {
      if (data.length > 0) return res.status(200).json({ movies: data });
      else return res.status(200).json({ message: "No Awards found" });
    })
    .catch((error) => {
      console.error("Failed to retrieve data : ", error);
    });
  Movie_Language.findAll()
    .then((data) => {
      if (data.length > 0) return res.status(200).json({ movies: data });
      else return res.status(200).json({ message: "No Awards found" });
    })
    .catch((error) => {
      console.error("Failed to retrieve data : ", error);
    });
  Movie_News.findAll()
    .then((data) => {
      if (data.length > 0) return res.status(200).json({ movies: data });
      else return res.status(200).json({ message: "No Awards found" });
    })
    .catch((error) => {
      console.error("Failed to retrieve data : ", error);
    });
  Movie_Production.findAll()
    .then((data) => {
      if (data.length > 0) return res.status(200).json({ movies: data });
      else return res.status(200).json({ message: "No Awards found" });
    })
    .catch((error) => {
      console.error("Failed to retrieve data : ", error);
    });
  Movie_Reviews.findAll()
    .then((data) => {
      if (data.length > 0) return res.status(200).json({ movies: data });
      else return res.status(200).json({ message: "No Awards found" });
    })
    .catch((error) => {
      console.error("Failed to retrieve data : ", error);
    });
  Movie_Videos.findAll()
    .then((data) => {
      if (data.length > 0) return res.status(200).json({ movies: data });
      else return res.status(200).json({ message: "No Awards found" });
    })
    .catch((error) => {
      console.error("Failed to retrieve data : ", error);
    });
  News.findAll()
    .then((data) => {
      if (data.length > 0) return res.status(200).json({ movies: data });
      else return res.status(200).json({ message: "No Awards found" });
    })
    .catch((error) => {
      console.error("Failed to retrieve data : ", error);
    });
  Production.findAll()
    .then((data) => {
      if (data.length > 0) return res.status(200).json({ movies: data });
      else return res.status(200).json({ message: "No Awards found" });
    })
    .catch((error) => {
      console.error("Failed to retrieve data : ", error);
    });
  Role.findAll()
    .then((data) => {
      if (data.length > 0) return res.status(200).json({ movies: data });
      else return res.status(200).json({ message: "No Awards found" });
    })
    .catch((error) => {
      console.error("Failed to retrieve data : ", error);
    });
  User_Reviews.findAll()
    .then((data) => {
      if (data.length > 0) return res.status(200).json({ movies: data });
      else return res.status(200).json({ message: "No Awards found" });
    })
    .catch((error) => {
      console.error("Failed to retrieve data : ", error);
    });
  Videos.findAll()
    .then((data) => {
      if (data.length > 0) return res.status(200).json({ movies: data });
      else return res.status(200).json({ message: "No Awards found" });
    })
    .catch((error) => {
      console.error("Failed to retrieve data : ", error);
    });
});

router.post("/movies", (req, res) => {
  console.log(req.movieid, req.body);
  Movie.create({
    movieid: req.body.movieid,
    title: req.body.title,
    storyline: req.body.storyline,
    production_yr: req.body.production_yr,
    is_inTheatres: req.body.is_inTheatres,
    is_comingSoon: req.body.is_comingSoon,
    movieImdbRating: req.body.movieImdbRating,
    moviePictureRating: req.body.moviePictureRating,
  })
    .then((data) => {
      return res.status(201).json({ message: "Movie added successfully" });
    })
    .catch((error) => {
      console.log(error, " Error while creating movies");
    });

  Awards.create({
    awards_id: req.body.awards_id,
    name: req.body.name,
  })
    .then((data) => {
      return res.status(201).json({ message: "Awards added successfully" });
    })
    .catch((error) => {
      console.log(error, " Error while creating Awards");
    });

  Cast.create({
    cast_id: req.body.cast_id,
    name: req.body.name,
    gender: req.body.gender,
    movies: req.body.movies,
    roles: req.body.roles,
    imdbRating_id: req.body.imdbRating_id,
    height: req.body.height,
    age: req.body.age,
  })
    .then((data) => {
      return res.status(201).json({ message: "Cast added successfully" });
    })
    .catch((error) => {
      console.log(error, " Error while creating Cast");
    });
  Genre.create({
    genre_id: req.body.genre_id,
    name: req.body.name,
  })
    .then((data) => {
      return res.status(201).json({ message: "Genre added successfully" });
    })
    .catch((error) => {
      console.log(error, " Error while creating Genre");
    });
  Language.create({
    language_id: req.body.language_id,
    name: req.body.name,
  })
    .then((data) => {
      return res.status(201).json({ message: "Language added successfully" });
    })
    .catch((error) => {
      console.log(error, " Error while creating Language");
    });
  Movie_Awards.create({
    movieid: req.body.movieid,
    news_id: req.body.news_id,
  })
    .then((data) => {
      return res
        .status(201)
        .json({ message: "Movie Awards added successfully" });
    })
    .catch((error) => {
      console.log(error, " Error while creating Movie Awards");
    });
  Movie_Cast.create({
    movieid: req.body.movieid,
    cast_id: req.body.cast_id,
    role_id: req.body.role_id,
  })
    .then((data) => {
      return res.status(201).json({ message: "Movie Cast added successfully" });
    })
    .catch((error) => {
      console.log(error, " Error while creating Movie Cast");
    });
  Movie_genre.create({
    movieid: req.body.movieid,
    genre_id: req.body.genre_id,
  })
    .then((data) => {
      return res
        .status(201)
        .json({ message: "Movie Genre added successfully" });
    })
    .catch((error) => {
      console.log(error, " Error while creating Movie Genre");
    });
  Movie_Language.create({
    movieid: req.body.movieid,
    language_id: req.body.language_id,
  })
    .then((data) => {
      return res
        .status(201)
        .json({ message: "Movie Language added successfully" });
    })
    .catch((error) => {
      console.log(error, " Error while creating Movie Language");
    });
  Movie_News.create({
    movieid: req.body.movieid,
    news_id: req.body.news_id,
  })
    .then((data) => {
      return res.status(201).json({ message: "Movie News added successfully" });
    })
    .catch((error) => {
      console.log(error, " Error while creating Movie News");
    });
  Movie_Production.create({
    movieid: req.body.movieid,
    company_id: req.body.company_id,
  })
    .then((data) => {
      return res
        .status(201)
        .json({ message: "Movie Production added successfully" });
    })
    .catch((error) => {
      console.log(error, " Error while creating Movie Production");
    });
  Movie_Reviews.create({
    movieid: req.body.movieid,
    userReviews_id: req.body.userReviews_id,
  })
    .then((data) => {
      return res
        .status(201)
        .json({ message: "Movie Reviews added successfully" });
    })
    .catch((error) => {
      console.log(error, " Error while creating Movie Reviews");
    });
  Movie_Reviews.create({
    movieid: req.body.movieid,
    userReviews_id: req.body.userReviews_id,
  })
    .then((data) => {
      return res
        .status(201)
        .json({ message: "Movie Reviews added successfully" });
    })
    .catch((error) => {
      console.log(error, " Error while creating Movie Reviews");
    });
  Movie_Videos.create({
    movieid: req.body.movieid,
    videos_id: req.body.videos_id,
  })
    .then((data) => {
      return res
        .status(201)
        .json({ message: "Movie Videos added successfully" });
    })
    .catch((error) => {
      console.log(error, " Error while creating Movie Videos");
    });
  Movie_Reviews.create({
    movieid: req.body.movieid,
    language_id: req.body.language_id,
  })
    .then((data) => {
      return res
        .status(201)
        .json({ message: "Movie Reviews added successfully" });
    })
    .catch((error) => {
      console.log(error, " Error while creating Movie Reviews");
    });
  Movie_Videos.create({
    movieid: req.body.movieid,
    videos_id: req.body.videos_id,
  })
    .then((data) => {
      return res
        .status(201)
        .json({ message: "Movie Videos added successfully" });
    })
    .catch((error) => {
      console.log(error, " Error while creating Movie Videos");
    });
  News.create({
    news_id: req.body.news_id,
    headline: req.body.headline,
    text: req.body.text,
  })
    .then((data) => {
      return res.status(201).json({ message: "News added successfully" });
    })
    .catch((error) => {
      console.log(error, " Error while creating News");
    });
  Production.create({
    production_id: req.body.production_id,
    name: req.body.name,
  })
    .then((data) => {
      return res.status(201).json({ message: "Production added successfully" });
    })
    .catch((error) => {
      console.log(error, " Error while creating Production");
    });
  Role.create({
    role_id: req.body.role_id,
    name: req.body.name,
  })
    .then((data) => {
      return res.status(201).json({ message: "Role added successfully" });
    })
    .catch((error) => {
      console.log(error, " Error while creating Role");
    });
  User_Reviews.create({
    userReviews_id: req.body.userReviews_id,
    movie_id: req.body.movie_id,
    date: req.body.date,
    text: req.body.text,
    yourImdbRating_id: req.body.yourImdbRating_id,
  })
    .then((data) => {
      return res
        .status(201)
        .json({ message: "User Reviews added successfully" });
    })
    .catch((error) => {
      console.log(error, " Error while creating User Reviews");
    });
  Videos.create({
    videos_id: req.body.videos_id,
    video: req.body.video,
  })
    .then((data) => {
      return res.status(201).json({ message: "Videos added successfully" });
    })
    .catch((error) => {
      console.log(error, " Error while creating Videos");
    });
});

router.put("/movies", (req, res) => {
  Movie.update(
    { movieid: req.body },
    {
      where: {
        movieid: req.body.movieid,
      },
    }
  )
    .then((data) => {
      return res.status(201).json({ message: "Movie added successfully" });
    })
    .catch((error) => {
      console.log(error, " Error while creating movies");
    });
  Awards.update(
    { awards_id: req.body },
    {
      where: {
        awards_id: req.body.awards_id,
      },
    }
  )
    .then((data) => {
      return res.status(201).json({ message: "Awards updated successfully" });
    })
    .catch((error) => {
      console.log(error, " Error while updating Awards");
    });
});

router.delete("/movies", (req, res) => {
  Movie.destroy({
    where: {
      movieid: req.body.movieid,
    },
  })
    .then((data) => {
      return res.status(201).json({ message: "Movie destroyed successfully" });
    })
    .catch((error) => {
      console.log(error, " Error while destroying movies");
    });
  Awards.destroy({
    where: {
      awards_id: req.body.awards_id,
    },
  })
    .then((data) => {
      return res.status(201).json({ message: "Awards destroyed successfully" });
    })
    .catch((error) => {
      console.log(error, " Error while destroying movies");
    });
});

module.exports = router;
