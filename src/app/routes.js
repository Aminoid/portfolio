import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Main from './containers/Main';
import Home from './containers/Home';
import Projects from './containers/Projects';

class Navigator extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Main>
          <Route exact path="/" component={Home}/>
          <Route path="/projects" component={Projects}/>
        </Main>
      </Router>
    )
  }
}

export default Navigator;
