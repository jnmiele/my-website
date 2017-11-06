import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import NotFound from './components/NotFound'
import Home from './components/Home'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>  
          <Route exact path="/" component={Home}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
