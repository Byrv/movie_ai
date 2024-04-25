const mongoose = require('mongoose');
const fs = require('fs');
const csv = require('csv-parser');
const Movie = require('./models/Movie');  // Assuming you have a Movie model set up
require('dotenv').config({path:'./env.local'});

mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const results = [];

fs.createReadStream('tmdb_5000_movies.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    Movie.insertMany(results)
      .then(() => {
        console.log('Successfully imported data to MongoDB');
        mongoose.disconnect();
      })
      .catch(err => {
        console.error('Error importing data:', err);
        mongoose.disconnect();
      });
  });
