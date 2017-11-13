import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import AboutMe from './components/AboutMe'
import Blog from './components/Blog'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Portfolio from './components/Portfolio'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>  
          <Route exact path="/" component={Home}/>
          <Route exact path="/aboutme" component={AboutMe}/>
          <Route exact path="/blog" component={Blog}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
