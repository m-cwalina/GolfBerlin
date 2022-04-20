import React from 'react';

export default function Course(props) {

  const handleClick = () => {
    props.selectCourse(props.index);
  }

  return (
    <div>
      <div className="course-tile">
        <a className="course-title" onClick={handleClick}>{props.course.name}</a>
        <img className="logo" src={props.course.logo} alt='logo'/>
      </div>
    </div>
  )
}
