import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';


export default function SearchBar({placeholder, handleSearch, wordEntered, clearInput}) {
  return (
    <div className="searchArea">
        <div className="searchBar">
          <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleSearch}/>
        <div className="searchIcon">
          {handleSearch.length === 0 ? <SearchIcon /> : <CloseIcon id="clearBtn" onClick={clearInput} />}
        </div>
      </div>
    </div>
  )
}
