// routes/apiRouter.js
const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

router.post('/movies', async (req, res) => {
  const movie = new Movie(req.body);
  try {
    await movie.save();
    res.status(201).send(movie);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/movies/:name', async (req, res) => {
  try {
    const name = req.params.name;
    const movie = await Movie.findOne({ title: name });
    if (!movie) {
      return res.status(404).send('No movie found with that name.');
    }
    res.send(movie);
  } catch (error) {
    res.status(500).send('Error retrieving the movie: ' + error);
  }
});



router.delete('/movies/:id', async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) return res.status(404).send("No movie found.");
    res.status(200).send(movie);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
