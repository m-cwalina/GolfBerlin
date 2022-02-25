import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import './searchbar.css';

function SearchBar( { placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value
    setWordEntered(searchWord)
    const newFilter = data.filter((value) => {
      return value.first_name.toLowerCase().includes(searchWord.toLowerCase());;
    });
    setFilteredData(newFilter);
  }

  const clearInput = () => {
    setFilteredData([])
  }

  return (
    <div className="search">
      <div className="searchInput"></div>
        <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
        <div className="searchIcon">
        {filteredData.length == 0 ? <SearchIcon /> : <CloseIcon id="clearBtn" onChange={clearInput} />}

        </div>
      <div className="dataResult">
        {filteredData.slice(0, 15).map((value, key) => {
          return <a className="dataItem"><p>{value.first_name} {value.last_name}</p></a>
        })}
      </div>
    </div>
  )
}

export default SearchBar;
