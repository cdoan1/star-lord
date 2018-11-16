import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Heatmap from './components/Heatmap';
import DataLoader from './components/DataLoader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://ibm.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chingu Cohort Exercise at IBM
          </a>
          <div>
            <ul>
                <li>Heat-Map</li>
            </ul>
          </div>
          <div className="Heatmap">
            <Heatmap />
            <DataLoader />
          </div>
        </header>
     </div>
    );
  }
}

export default App;
