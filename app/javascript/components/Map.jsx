import React from "react";
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'

export default function Map(props) {
  const defaultProps = {
    center: {
      lat: props.selectedCourse.latitude,
      lng: props.selectedCourse.longitude,
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
        <Marker lat={props.selectedCourse.latitude} lng={props.selectedCourse.longitude} />
      </GoogleMapReact>
    </div>
  );
}
