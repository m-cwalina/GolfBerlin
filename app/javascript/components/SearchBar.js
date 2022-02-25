import React from 'react';

function SearchBar({ placeholder, data }) {
  return (
    <div className="search">
      <div className="searchInput"></div>
        <input type="text" placeholder={placeholder}/>
        <div className="searchIcon"></div>
      <div className="dataResult"></div>
    </div>
  )
}

export default SearchBar()
