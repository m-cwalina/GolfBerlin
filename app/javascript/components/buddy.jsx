import React, { Component } from 'react';

class Buddy extends Component {
  render() {
    return (
    <ul>
      <li>Name - {this.props.buddy.first_name} {this.props.buddy.last_name} </li>
      <li>Address - {this.props.buddy.address} </li>
    </ul>
    )
  }
}

export default Buddy;
