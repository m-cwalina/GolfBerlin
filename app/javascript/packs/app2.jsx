import React, {useState, useEffect} from 'react';
import Map from '../components/Map';
import SearchBar2 from '../components/SearchBar2';
import Courses from '../components/Courses';

export default function App() {
  const [courses, setCourses] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [selectedCourse, setSelectedCourse] = useState([0]);

  const Api = async () => {
    const URL = "/api/v1/golf_courses/index";
    try {
      let response = await fetch(URL);
      let data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = event => {
    setWordEntered(event.target.value);
  };

  const searchCourses = courses.filter(
    course => course.name.toLowerCase().includes(wordEntered.toLowerCase())
    )

  const selectCourse = (index) => {
    setSelectedCourse(courses[index])
  }

  const clearInput = () => {
    setWordEntered("");
  }

  useEffect(() => {
    Api();
  }, []);

  return (
    <div className="App">
      <div className="Upper-Scene">
        <SearchBar2 handleSearch={handleSearch} placeholder="Find a course" wordEntered={wordEntered} clearInput={clearInput} />
      </div>
      <div className="Bottom-Scene">
        <div className="Left-Scene">
          <Courses courses={searchCourses} selectCourse={selectCourse} handleSearch={handleSearch} />
        </div>
        <div className="Right-Scene">
          <Map selectedCourse={selectedCourse}/>
        </div>
      </div>
    </div>
  )
}
