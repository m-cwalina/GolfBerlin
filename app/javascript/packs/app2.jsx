import React, {useState, useEffect} from 'react';
import Map from '../components/Map'
import './index.css';

export default function App() {
  const [locations, setLocations] = useState([])

  const Api = async () => {
    const URL = "api/v1/buddies/index";
    try {
      let response = await fetch(URL);
      let data = await response.json();
      setLocations(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    Api();
  }, []);

  return (
    <div className="App">
      <Map locations={locations} />
    </div>
  )
}
