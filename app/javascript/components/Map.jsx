import React from "react";
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'

export default function Map(props) {
  const center = () => {
    return {
      lat: props.selectedCourse.latitude,
      lng: props.selectedCourse.longitude
    }
  }

  return (
    // Important! Always set the container height explicitly
    <div className="map" style={{ height: '100vh', width: '120%' }}>
      <GoogleMapReact
        center={center()}
        bootstrapURLKeys={{ key: process.env.API_KEY }}
        defaultZoom={12}
      >
        <Marker
          lat={props.selectedCourse.latitude} lng={props.selectedCourse.longitude}
        />
      </GoogleMapReact>
    </div>
  );
}
