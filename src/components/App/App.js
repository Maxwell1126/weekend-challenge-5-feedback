import React, { Component } from 'react';
import { HashRouter as Router, Route, } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header.js';
import Home from '../Home/Home.js';
import Feelings from '../Feelings/Feelings.js';
import Understanding from '../Understanding/Understanding.js';
import Support from '../Support/Support.js';
import Comments from '../Comments/Comments.js';
import Summary from '../Summary/Summary.js';
import Thanks from '../Thanks/Thanks.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/summary/feelings' component={Feelings} />
            <Route exact path='/summary/understanding' component={Understanding} />
            <Route exact path='/summary/support' component={Support} />
            <Route exact path='/summary/comments' component={Comments} />
            <Route path='/summary' component={Summary} />
            <Route exact path='/thanks' component={Thanks} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
