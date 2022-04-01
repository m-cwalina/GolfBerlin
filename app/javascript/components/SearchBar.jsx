import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import './searchbar.css';

export default function SearchBar({placeholder, data}) {
  const [wordEntered, setWordEntered] = useState("");

/*This handles the filtering function. Takes data from input and filters array of buddies*/

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  }

  const handleFilter = (event) => {
    const searchWord = event.target.value
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.first_name.toLowerCase().includes(searchWord.toLowerCase());;
    });
    setFilteredData(newFilter);
  }

  return (
    <div className="Search">
      <div className="searchInput">
        <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
        <div className="searchIcon">
          {filteredData.length === 0 ? <SearchIcon /> : <CloseIcon id="clearBtn" onClick={clearInput} />}
        </div>
      <div className="tiles">
        {filteredData.slice(0, 15).map((value, key) => {
          return <a className="tile"><p>{value.first_name} {value.last_name}</p></a>
        })}
      </div>
      </div>
    </div>
  )
}
