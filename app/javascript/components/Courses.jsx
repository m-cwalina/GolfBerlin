import React from 'react';
import Course from './Course'

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
      {console.log(renderList())}
      {renderList()}
    </div>

  )
}
