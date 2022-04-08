import React from 'react';
import Course from './Course'

export default function Courses(props) {
  const renderList = () => {
    return props.courses.map((course, index,) => {
      return (
        <Course
          selectCourse={props.selectCourse}
          course={course}
          key={course.id}
          index={index}
        />
      );
    });
  };

  return (
    <div>
      {renderList()}
    </div>

  )
}
