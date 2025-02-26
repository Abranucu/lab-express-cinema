const mongoose = require("mongoose");

const movieScheme = new mongoose.Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String],
});

const Movie = mongoose.model("Movie", movieScheme);

module.exports = Movie;
