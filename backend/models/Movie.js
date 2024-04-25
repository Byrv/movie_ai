const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  genres: Array,
  release_date: String,
  budget: Number,
  popularity: Number,
  vote_average: Number,
  vote_count: Number
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
