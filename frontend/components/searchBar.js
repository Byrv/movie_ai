'use client'
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <div className="flex items-center border-b-2 border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition duration-200 ease-in-out"
          type="text"
          placeholder="Search..."
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 focus:bg-teal-700 border-teal-500 hover:border-teal-700 focus:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded transition duration-200 ease-in-out shadow hover:shadow-lg"
          type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
