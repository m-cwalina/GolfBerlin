import React from 'react';
import SearchBar from './searchbar';
import buddies from '../data/buddies';



const filterBuddies = (buddies, query) => {
  if (!query) {
    return buddies;
  }
  return buddies.filter((buddy) => {
    const buddyName = buddy.first_name.toLowerCase();
    return buddyName.includes(query);
  });
};

const App = () => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const filteredBuddies = filterBuddies(buddies, query);

  return (
    <div className="right-scene">
      <SearchBar />
      <ul>
        {filteredBuddies.map((buddy, index) => (
          <li key={index}>{buddy.first_name}| {buddy.address}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;
