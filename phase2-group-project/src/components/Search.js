import React from "react";

function Search({ changeSearchTerm }) {

  const handleSearch = e => changeSearchTerm( e.target.value )

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Books:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a title to search..."
        onChange={ handleSearch }
      />
    </div>
  );
} 

export default Search;
