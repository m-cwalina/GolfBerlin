import React from 'react';
import Course from './Course'

/* A function that iterates through the courses using map and using the index to track each course */

export default function Courses(props) {
  const renderList = () => {
    return props.courses.map((course, index) => {
      return (
        <div className="course-tiles" key={course.location}>
        <Course
          selectCourse={props.selectCourse}
          course={course}
          index={index}
        />
        </div>
      );
    });
  };

  return (
    <div>
      {renderList()}
    </div>

  )
}
