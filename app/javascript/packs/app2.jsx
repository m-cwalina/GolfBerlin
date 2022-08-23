import React, {useState, useEffect} from 'react';
import Map from '../components/Map';
import SearchBar2 from '../components/SearchBar2';
import Courses from '../components/Courses';

export default function App() {
  const [courses, setCourses] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [selectedCourse, setSelectedCourse] = useState([0]);

// An API that fetches the data from courses using fetch(URL)
  const Api = async () => {
    const URL = "/api/v1/golf_courses";
    try {
      let response = await fetch(URL);
      let data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error(error);
    }
  };
// A function that handles the search event in the searchbar
  const handleSearch = event => {
    setWordEntered(event.target.value);
  };
// A function that filters through the courses in the searchbar
  const searchCourses = courses.filter(
    course => course.name.toLowerCase().includes(wordEntered.toLowerCase())
    )

// A function used to select the course using its index so the map can find the course selected
  const selectCourse = (index) => {
    setSelectedCourse(courses[index])
  }

// Clears the input of the word entered in the searchbar
  const clearInput = () => {
    setWordEntered("");
  }

// A hook used to call the API to run
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
