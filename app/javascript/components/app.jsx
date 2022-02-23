import React from 'react'
import BuddiesList from './buddies_list'
import buddies from '../data/buddies.js'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buddies
    }
  }

  render() {
    return (
      <div>
        <div className="top-scene">
        </div>
        <div className="container">
          <div className="left-scene">
            <BuddiesList
              buddies={this.state.buddies}
             />
          </div>
          <div className="right-scene">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
