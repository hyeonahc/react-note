// 9.1 가장 흔한 방식, 일반 CSS

import React, { Component } from 'react';
import logo from '../../img/logo192.png';
import './CSSComponent.css';

class CSSComponent extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" className="App-logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload
          </p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="App-link"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default CSSComponent;
