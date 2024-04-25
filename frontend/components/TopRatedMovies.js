import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TopRatedMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/top-movies');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching top rated movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Top Rated Movies</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <strong>{movie.title}</strong> - Average Vote: {movie.vote_average}, Total Votes: {movie.vote_count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopRatedMovies;
