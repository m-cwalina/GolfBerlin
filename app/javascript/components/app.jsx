import React from 'react';
import Data from "../data/mock_data.json";
import SearchBar from './SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Find your buddy" data={Data}/>
    </div>
  )
}

export default App;
