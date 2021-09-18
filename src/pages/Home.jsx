import React from "react";
import '../App.css';
import './Home.css'
import {Button} from "react-bootstrap";
import { Link, Router, BrowserRouter } from 'react-router-dom'

function Home() {
  return (
    
    <div className="home">
      <div className="Splash-page">
        <h1 id="title">KiloWhat</h1>
        <p id="description">a worldwide energy comparison tool</p>
        <div className="row">
          <div className="col" id="surveyDiv">
            <Link to="/survey">
              <Button className="button">Survey</Button>
            </Link>
          </div>
          <div className="col" id="dashboardDiv">
            <Link to="/dashboard">
              <Button renderAs="button" className="button">Dashboard</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
