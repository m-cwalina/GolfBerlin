import React,{useEffect} from 'react';
import Course from './Course'

export default function Courses(props) {
  const renderList = () => {
    return props.courses.map((course, index) => {
      return (
        <div className="course-tiles" key={course.id}>
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
