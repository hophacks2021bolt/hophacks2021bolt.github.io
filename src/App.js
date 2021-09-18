import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Home} from './pages';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>  
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
