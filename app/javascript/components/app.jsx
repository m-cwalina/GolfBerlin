import React from 'react';
import { useState } from "react";
import Data from "../data/mock_data.json";

const App = () => {
  const [query, setQuery] = useState("")

  return (
    <div>
      <div className="left-scene">
        <input placeholder="Enter a Buddies Name" onChange={event => setQuery(event.target.value)} />
        {
          Data.filter(buddy => {
            if (query === '') {
              return buddy;
            } else if (buddy.first_name.toLowerCase().includes(query.toLowerCase())) {
              return buddy;
            }
          }).map((buddy) => (
            <div className="box" key={buddy.id}>
              <h2>{buddy.first_name} {buddy.last_name}</h2>
              <p>{buddy.address}</p>
            </div>
          ))
        }
      </div>
      <div className="right-scene">
      </div>
    </div>
  )
}

export default App;
