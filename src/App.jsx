import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Homepage from './Hompage'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Homepage} />
        </Switch>
      </BrowserRouter >
    );
  }
}

App.propTypes = {

};

export default hot(module)(App);