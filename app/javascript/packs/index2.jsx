// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app2';
import './react.scss';
// render an instance of the component in the DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
