import {React, useState} from "react";
import '../App.css';
import './Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, ButtonGroup, ButtonToolbar, Form} from "react-bootstrap";
import MapChart from "./MapChart";
import UnitedStatesChart from "./UnitedStatesChart";



function Dashboard() {
  const [countryHover, setCountryHover] = useState("");
  const [countryClick, setCountryClick] = useState("");
  const [isUS, setIsUs] = useState(false);
  const [countryCode, setCode] = useState("");
  const [year, setYear] = useState(2020);


  function returnIsUS(){
      return isUS;
  }


  function returnIsValid(){
    return countryClick.length>0;
  }

  function returnYearValid(){
      return year>0;
  }

  function allValid(){
      return returnIsValid() && returnYearValid();
  }



  return (
    
    <div className="dashboard">
      <div className="left w50">
        <ButtonToolbar>
            <ButtonGroup>
                <Button className="button" onClick={() => {setCountryClick(""); setCode("")}}>Clear</Button>
            </ButtonGroup>
            <ButtonGroup>
                {returnIsUS()?<Button className="button" onClick={() => {setIsUs(false); setCountryClick(""); setCode("")}}>Exit US</Button>:null}
            </ButtonGroup>
        </ButtonToolbar>
        {returnIsUS()?<UnitedStatesChart setCountryHover={setCountryHover} setCountryClick={setCountryClick} setCountryCode={setCode}/>:<MapChart setCountryHover={setCountryHover} setCountryClick={setCountryClick} setCountryCode={setCode} isUSA={setIsUs}/>}
        {returnIsUS()
        ?
            <Form>
                <Form.Select type="select" onChange={(e) => { setYear(e.target.value)}} value={year}>
                    {[...Array(31).keys()].map(i => (

                        <option value={i+1990}>{i+1990}</option>
                            
                    ))}
                </Form.Select>
            </Form>
                
        :
            <Form>
                <Form.Select type="select" onChange={(e) => { setYear(e.target.value)}} value={year}>
                    {[...Array(121).keys()].map(i => (

                        <option value={i+1900}>{i+1900}</option>
                            
                    ))}
                </Form.Select>
            </Form>
        }
        {countryHover}
        
      </div>
      <div className="right w50">
        {"process data from "+countryCode}
        <br/>
        
        
        {allValid()
        ?
                    
            returnIsUS()
            ?
                <div>
                    {countryClick} in {year}
                    <h3>
                        % Energy per source in the state of {countryClick}
                    </h3>
                        <h4>
                            bla
                        </h4>
                    
                    <h3>
                        Average yearly energy cost in the state of {countryClick}
                    </h3>
                        <h4>
                            bla
                        </h4>

                    <h3>
                        Metric tons of CO2 emissions per kWh in the state of {countryClick}
                    </h3>
                        <h4>
                            bla
                        </h4>

                    <h3>
                        Metric tons of CO2 emissions per kWh per source in the state of {countryClick}
                    </h3>
                        <h4>
                            bla
                        </h4>

                    US data
                </div>
            : 
                <div>
                    {countryClick} in {year}
                    <h3>
                        Average per-capita energy usage in {countryClick}
                    </h3>
                        <h4>
                            bla
                        </h4>
                    
                    <h3>
                        % Energy per source in {countryClick}
                    </h3>
                        <h4>
                            bla
                        </h4>

                    <h3>
                        Most-used energy source in {countryClick}
                    </h3>
                        <h4>
                            bla
                        </h4>

                    <h3>
                        Average per-capita energy cost in {countryClick}
                    </h3>
                        <h4>
                            bla
                        </h4>
                        <h3>
                        Average per-capita energy cost per kWh in {countryClick}
                    </h3>
                        <h4>
                            bla
                        </h4>

                    <h3>
                        % Usage of renewable energy in {countryClick}
                    </h3>
                        <h4>
                            bla
                        </h4>

                    non-US data
                </div>
        : null}
            
      </div>
    </div>
  );
}

export default Dashboard;
