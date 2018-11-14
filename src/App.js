import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Heatmap from './components/Heatmap';

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
            Learn IBM Cloud Private
          </a>
          <div>
            <ul>
                <li>Heatmap 3</li>
            </ul>
          </div>
          <div className="Heatmap">
            <Heatmap />
          </div>
        </header>
     </div>
    );
  }
}

export default App;
