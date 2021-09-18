import {React, useState} from "react";
import '../App.css';
import './Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, ButtonGroup, ButtonToolbar, Popover, OverlayTrigger, Tooltip} from "react-bootstrap";
import MapChart from "./MapChart";
import UnitedStatesChart from "./UnitedStatesChart";



function Dashboard() {
  const [country, setCountry] = useState("");
  const [isUS, setIsUs] = useState(false);
  const [countryCode, setCode] = useState("");


  function returnIsUS(){
      return isUS;
  }



  return (
    
    <div className="dashboard">
      <div className="left w50">
        {returnIsUS()?<Button className="button" onClick={() => {setIsUs(false)}}>Exit US</Button>:null}
        {returnIsUS()?<UnitedStatesChart setCountryContent={setCountry} setCountryCode={setCode}/>:<MapChart setCountryContent={setCountry} setCountryCode={setCode} isUSA={setIsUs}/>}
        {country}
      </div>
      <div className="right w50">
        {"process data from "+countryCode}
      </div>
    </div>
  );
}

export default Dashboard;
