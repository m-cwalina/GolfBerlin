import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import Buddies from '../components/Buddies';

export default function App() {
  const [buddies, setBuddies] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  /*Here is my API that connects to the API I created in Rails for my buddies*/

  const Api = async () => {
    const URL = "/api/v1/buddies/index";
    try {
      let response = await fetch(URL);
      let data = await response.json();
      setBuddies(data);
    } catch (error) {
      console.error(error);
    }
  };
  /*I use this function to call the Api*/

  useEffect(() => {
    Api();
  }, []);

  /*This handles the filtering function. Takes data from input and filters array of buddies*/

  const handleSearch = event => {
    setWordEntered(event.target.value);
  };

  /*A function that filters through a buddy list with a word entered in the search bar */

  const searchBuddies = buddies.filter(
    buddy => buddy.first_name.toLowerCase().includes(wordEntered.toLowerCase())
    )

  /*A function to clear the input in the searchbar*/

  const clearInput = () => {
    setWordEntered("");
  }

  return (
    <div className="App">
      <SearchBar placeholder="Find your buddy" buddies={wordEntered} handleSearch={handleSearch} wordEntered={wordEntered} clearInput={clearInput}/>
      <div className="Buddy-List">
        <Buddies buddies={searchBuddies} />
      </div>
    </div>
  )
}
