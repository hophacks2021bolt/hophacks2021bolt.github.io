import {React, useState} from "react";
import '../App.css';
import './Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, ButtonGroup, ButtonToolbar, Popover, OverlayTrigger, Tooltip} from "react-bootstrap";
import MapChart from "./MapChart";
import UnitedStatesChart from "./UnitedStatesChart";



function Dashboard() {
  const [countryHover, setCountryHover] = useState("");
  const [countryClick, setCountryClick] = useState("");
  const [isUS, setIsUs] = useState(false);
  const [countryCode, setCode] = useState("");


  function returnIsUS(){
      return isUS;
  }



  return (
    
    <div className="dashboard">
      <div className="left w50">
        <ButtonToolbar>
            <ButtonGroup>
                <Button className="button" onClick={() => {setCountryClick(""); setCode("")}}>Clear</Button>
            </ButtonGroup>
            <ButtonGroup>
                {returnIsUS()?<Button className="button" onClick={() => {setIsUs(false)}}>Exit US</Button>:null}
            </ButtonGroup>
        </ButtonToolbar>
        {returnIsUS()?<UnitedStatesChart setCountryHover={setCountryHover} setCountryClick={setCountryClick} setCountryCode={setCode}/>:<MapChart setCountryHover={setCountryHover} setCountryClick={setCountryClick} setCountryCode={setCode} isUSA={setIsUs}/>}
        {countryHover}
      </div>
      <div className="right w50">
        {"process data from "+countryCode}
        {'\n'+countryClick}
      </div>
    </div>
  );
}

export default Dashboard;
