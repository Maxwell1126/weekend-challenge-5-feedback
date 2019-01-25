import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header.js';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route path='/' component={Header} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
