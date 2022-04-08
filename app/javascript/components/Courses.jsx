import React from 'react';
import Course from './Course'

export default function Courses(courses) {
  const renderList = () => {
    return courses.map((course, index) => {
      return (
        <Course
          course={course}
          key={course.lat}
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
