import SearchBar from '../components/SearchBar';
import Buddies from '../components/Buddies'
import React, {useEffect, useState} from 'react';

export default function App() {
  const [buddies, setBuddies] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  /*Here is my API that connects to the API I created in Rails for my buddies*/
 const Api = async () => {
    const URL = "api/v1/buddies/index";
    try {
      let response = await fetch(URL);
      let data = await response.json();
      setBuddies(data);
    } catch (error) {
      console.error(error);
    }
  };
  /*I use this function so the array of buddies will show upon screen loading*/
  useEffect(() => {
    Api();
  }, []);

  return (
    <div className="App">
      <SearchBar placeholder="Find your buddy" data={buddies}/>
      <Buddies />
    </div>
  )
}
