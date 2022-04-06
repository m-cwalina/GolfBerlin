import React from "react";
import RoomIcon from '@mui/icons-material/Room';

export default function Markers(locations) {
  return (
    <div>
      {locations.map((location) => {
        return <RoomIcon>{location.latitude}{location.longitude}</RoomIcon>
      })}
    </div>
  )
}
