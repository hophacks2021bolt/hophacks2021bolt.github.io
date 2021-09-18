import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Home, Survey} from './pages';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/survey" exact component={() => <Survey />} />
          <Route path="/dashboard" exact component={() => <Dashboard />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
