import React, {useState, useEffect} from 'react';
import Map from '../components/Map'
import SearchBar2 from '../components/SearchBar2'
import Courses from '../components/Courses'
import './index.css';

export default function App() {
  const [courses, setCourses] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const Api = async () => {
    const URL = "api/v1/golf_courses/index";
    try {
      let response = await fetch(URL);
      let data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFilter = (event) => {
    const searchWord = event.target.value
    setWordEntered(searchWord);
    const newFilter = courses.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());;
    });
    setFilteredData(newFilter);
  }

  useEffect(() => {
    Api();
  }, []);

  return (
    <div className="App">
      <div className="Upper-Scene">
        <SearchBar2 handleFilter={handleFilter} placeholder="Find a course" courses={filteredData} wordEntered={wordEntered} />
      </div>
      <div className="Left-Scene">
        <Courses courses={filteredData} />
      </div>
      <div className="Right-Scene">
        <Map courses={filteredData} />
      </div>
    </div>
  )
}
