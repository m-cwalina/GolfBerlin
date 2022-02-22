import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
  render() {
    return (
      <div>
        <div className="top-scene">
        </div>
        <div className="container">
          <div className="left-scene">
            <BuddiesList />
          </div>
          <div className="right-scene">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
