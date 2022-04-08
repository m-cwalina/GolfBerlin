import React from 'react';

export default function Course(props) {
  return (
    <div>
      <p>{props.course.name}</p>
      <p>{props.course.location}</p>
    </div>
  )
}
