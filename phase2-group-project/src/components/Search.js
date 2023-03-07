import React from "react";

function Search({ changeSearchTerm }) {

  const handleSearch = e => changeSearchTerm( e.target.value )

  return (
    <div className="searchbar">
      <h2>Search Books:</h2>
      <input
        type="text"
        id="search"
        placeholder="Type a title to search..."
        onChange={ handleSearch }
      />
      <p></p>
    </div>
  );
} 

export default Search;
