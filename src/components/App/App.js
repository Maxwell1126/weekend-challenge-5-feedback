import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Feelings from '../Feelings/Feelings.js';
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <p>
              <Link to="/feelings">feelings |</Link>
              <Link to="/understanding"> understanding |</Link>
              <Link to="/supported"> supported |</Link>
              <Link to="/comments"> comments |</Link>
              <Link to="/review"> review |</Link>
              <Link to="/thanks"> thanks |</Link>
            </p>

            <Route path='/' component={Feelings} />
            {/* <Route exact path='/feelings' component={Feelings} /> */}
            {/* <Route exact path='/understanding' component={Header} />
            <Route exact path='/supported' component={Header} />
            <Route exact path='/comments' component={Header} />
            <Route exact path='/review' component={Header} />
            <Route exact path='/thanks' component={Header} /> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
