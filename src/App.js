import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import AboutMe from './components/AboutMe'
import Blog from './components/Blog'
import Header from './components/Header'
import Home from './components/Home'
import NavBar from './components/NavBar'
import NotFound from './components/NotFound'
import ProfessionalWork from './components/ProfessionalWork'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <NavBar />
        <Switch>  
          <Route exact path="/" component={Home}/>
          <Route exact path="/aboutme" component={AboutMe}/>
          <Route exact path="/blog" component={Blog}/>
          <Route exact path="/professionalwork" component={ProfessionalWork}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
