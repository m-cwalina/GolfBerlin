import React, {useState} from 'react';
import Buddy from './Buddy';

export default function Buddies(props) {
  const [hover, setHover] = useState("");

  const renderList = () => {
    return props.buddies.map((buddy) => {
      return (
        <div key={buddy.address} className="buddy-tiles">
          <div
            onMouseEnter={() => setHover(buddy.address)}
            onMouseLeave={() => setHover("")}
            className={hover === buddy.address ? "tile-border buddy-tile" : "buddy-tile"}
          >
            <div><Buddy buddy={buddy} extraDetails={hover === buddy.address}/></div>
        </div>
      </div>
      );
    });
  };

  return (
    <div>{renderList()}</div>
  )
}
