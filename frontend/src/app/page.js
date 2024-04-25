'use client'
import React, { useState } from 'react';
import SearchBar from "../../components/searchBar";
import TopRatedMovies from '../../components/TopRatedMovies';
import axios from '../../utils/axios';

export default function Home() {
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = async (searchTerm) => {
    console.log("Searching for:", searchTerm);
    try {
      const response = await axios.get(`/movies/${encodeURIComponent(searchTerm)}`);
      setSearchResult(response.data);
      console.log('Search result:', response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setSearchResult(null);
    }
  };

  let genresArray = [];
  if (searchResult && searchResult.genres.length > 0) {
    try {
      genresArray = JSON.parse(searchResult.genres[0]);
    } catch (error) {
      console.error('Error parsing genres:', error);
    }
  }

  return (
    <main>
      <div>
        <SearchBar onSearch={handleSearch} />
        {searchResult ? (
          <div>
            <h3>{searchResult.title}</h3>
            <p>Genres: {genresArray.map(genre => genre.name).join(', ')}</p>
            <p>Popularity: {searchResult.popularity}</p>
            <p>Rating: {searchResult.vote_average}</p>
          </div>
        ) : (
          <p>No results found</p>
        )}
        <TopRatedMovies />
      </div>
    </main>
  );
}
