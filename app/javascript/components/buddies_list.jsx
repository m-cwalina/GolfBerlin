import React  from 'react';
import Buddy from './buddy';

const BuddiesList = (props) => {
  const renderList = () => {
    return props.buddies.map((buddy, index) => {
      return (
        <Buddy
          buddy={buddy}
          key={index}
        />
      )
    })
  }
  return (renderList())
}

export default BuddiesList
