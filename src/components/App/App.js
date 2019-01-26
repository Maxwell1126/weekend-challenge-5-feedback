import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header.js';
import Summary from '../Summary/Summary.js';
import Feelings from '../Feelings/Feelings.js';
import Understanding from '../Understanding/Understanding.js';
import Support from '../Support/Support.js';
import Comments from '../Comments/Comments.js';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <div>
            <p>
              <Link to="/">feelings |</Link>
              <Link to="/understanding"> understanding |</Link>
              <Link to="/support"> support |</Link>
              <Link to="/comments"> comments |</Link>
              <Link to="/review"> review |</Link>
              <Link to="/thanks"> thanks |</Link>
            </p>

            <Route exact path='/' component={Feelings} />
            <Route exact path='/understanding' component={Understanding} />
            <Route exact path='/support' component={Support} />
            <Route exact path='/comments' component={Comments} />
            {/* <Route exact path='/review' component={Header} />
            <Route exact path='/thanks' component={Header} /> */}
          </div>
        </Router>
        <Summary />
      </div>
    );
  }
}

export default App;
