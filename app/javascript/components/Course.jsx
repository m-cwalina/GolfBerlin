import React from 'react';

export default function Course(props) {
  const handleClick = () => {
    props.selectCourse(props.index);
  }

  return (
    <div>
      <a onClick={handleClick} className="course-tile">{props.course.name}</a>
    </div>
  )
}
