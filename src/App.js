import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Home} from './pages';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
