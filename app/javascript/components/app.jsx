import React from 'react';
import Data from "../data/mock_data.json";

const App = () => {
  return (
    <div>
      <input placeholder="Enter a Buddies Name" />
        {
          Data.map((buddy) => (
            <div key={buddy.id}>
              <h2>{buddy.first_name} {buddy.last_name}</h2>
              <p>{buddy.address}</p>
            </div>
          ))
        }
    </div>
  )
}
export default App;
