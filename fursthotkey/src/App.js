import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import MainView from './components/MainView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={MainView} />
            {/* <Route path="/Edit" component={Edit} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
