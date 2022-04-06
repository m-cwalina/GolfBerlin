import React from 'react';

export default function Buddies(props) {
  return (
    <div className="tiles">
      {props.filteredData.slice(0, 15).map((buddy) => {
        return <a className="tile" key={buddy.id}>
                  <p>
                    {buddy.first_name}
                    {buddy.last_name}
                  </p>
                </a>
      })}
    </div>
  )
}
