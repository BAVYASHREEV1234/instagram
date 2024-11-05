// src/pages/Search.js
import React, { useState } from 'react';
import './search.css';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  // Handle input change and update search query
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Simulate a search by filtering a list of sample data
  const handleSearch = () => {
    // Here, replace this with actual search logic, like an API call
    const sampleData = ['username1', 'username2', 'username3']; // Replace with actual data
    const filteredResults = sampleData.filter((id) =>
      id.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <div className="search-page">
      <input
        type="text"
        placeholder="Search for ID..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>

      <div className="results">
        {results.length > 0 ? (
          results.map((result, index) => (
            <div key={index} className="result-item">
              {result}
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default Search;
