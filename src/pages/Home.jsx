import React from "react";
import '../App.css';
import './Home.css'


function Home() {
  return (
    
    <div className="home">
      <div className="Splash-page">
        <h1 id="title">KiloWhat</h1>
        <p id="description">a worldwide energy comparison tool</p>
        <div className="row-md-2">
          <div className="col-6" id="surveyDiv">

          </div>
          <div className="col-6" id="dashboardDiv">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
