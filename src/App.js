import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {Home, Survey, Dashboard, ChartComparison} from './pages';

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
          <Route path="/chart-comparison" exact component={() => <ChartComparison />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
