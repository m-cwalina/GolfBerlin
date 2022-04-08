import React from "react";
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'

export default function Map(courses) {
  const defaultProps = {
    center: {
      lat: 37.7749,
      lng: -122.4194
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div className="map" style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker lat={courses.latitude} lng={courses.longitude} />
      </GoogleMapReact>
    </div>
  );
}
