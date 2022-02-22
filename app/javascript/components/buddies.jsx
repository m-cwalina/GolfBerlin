import React, { Component } from 'react';

class Buddies extends Component {
  render() {
    return (
      <h2> {this.props.buddies.name} </h2>
    )
  }
}

export default Buddies;
