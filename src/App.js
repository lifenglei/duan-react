import React, { Component } from 'react';

import './App.scss';
import {
  HashRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import PageIndex from './views/pageIndex/index'
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        {
              <Route
                exact
                path="/"
                render={() => {
                  return <PageIndex />
                }}
              ></Route>
            }
        </Switch>
      </Router>
    );
  }
}

export default App;
