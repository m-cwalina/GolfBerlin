import React, {useEffect} from "react";
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'

export default function Map(props) {
  let center = {
    center: {
      lat: props.selectedCourse.latitude,
      lng: props.selectedCourse.longitude,
    },
    zoom: 11
  };

   const defaultProps = {
     center: [37.7749, -122.4194]
  };

  return (
    // Important! Always set the container height explicitly
    <div className="map" style={{ height: '100vh', width: '120%' }}>
      <GoogleMapReact
        /* defaultCenter={defaultProps.center} */
        bootstrapURLKeys={{ key: process.env.API_KEY }}
        center={center.center}
        zoom={center.zoom}
      >
        <Marker
          lat={props.selectedCourse.latitude} lng={props.selectedCourse.longitude}
        />
      </GoogleMapReact>
    </div>
  );
}
