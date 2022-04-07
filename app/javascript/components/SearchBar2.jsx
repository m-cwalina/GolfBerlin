import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';


export default function SearchBar2({handleFilter, placeholder, wordEntered, clearInput, courses}) {
  return (
    <div className="searchArea">
      <div className="searchBar">
        <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
        <div className="searchIcon">
          {courses.length === 0 ? <SearchIcon /> : <CloseIcon id="clearBtn" onClick={clearInput} />}
        </div>
      </div>
    </div>
  )
}
