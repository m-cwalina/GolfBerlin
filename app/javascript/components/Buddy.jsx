import React from 'react';

export default function Buddy(props) {
  return (
    <div>
      <div className="buddy-tile-info">
        <p className="buddy-name">{props.buddy.first_name} {props.buddy.last_name}</p>
      </div>
      {props.extraDetails && (
        <div className="extra-tile-info">
          <p>Age: {props.buddy.age}</p>
          <p>Handicap: {props.buddy.handicap}</p>
        </div>
      )}
    </div>
  )
}
