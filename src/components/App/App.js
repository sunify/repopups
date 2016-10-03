import React, { PropTypes } from 'react';
import './App.css';

export default class App extends React.Component {
  static propTypes = {};
  state = {};

  render() {
    return (
      <div className="App">
        <div className="App-tabs">
          <a className="App-tab">Users</a>
          <a className="App-tab">Statistics</a>
        </div>
        <div className="App-body">
          <h1 className="App-title">
            Some statistics
          </h1>
        </div>
      </div>
    );
  }
}
