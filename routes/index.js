const express = require("express");
const Movie = require("../models/Movie.model");
const router = express.Router();

// GET home page
router.get("/", (req, res, next) => {
  res.render("index");
});

// GET "/movies" => para listar todas las peliculas de la DB
router.get("/movies", (req, res, next) => {
  Movie.find()
    .select({ title: 1, image: 1 })
    .then((response) => {
      res.render("movies", {
        movies: response,
      });
    })
    .catch((err) => {
      next(err);
    });
});

// GET "/movies/:id" => para ver los detalles de una pelicula por su Id
router.get("/movies/:movieId", (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then((response) => {
      res.render("details", {
        oneMovie: response,
      });
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
