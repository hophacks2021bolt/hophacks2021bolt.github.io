import React from "react";
import '../App.css';
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";

function Home() {
  return (
    
    <div className="home">
      <div className="Splash-page">
        <h1 id="title">KiloWhat</h1>
        <p id="description">a worldwide energy comparison tool</p>
        
        <div className="row">
          <div className="col" id="surveyDiv">
            <Button className="button">Survey</Button>
            
          </div>
          <div className="col" id="dashboardDiv">
            <Button className="button">Dashboard</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
