import React, { useState } from "react";
import {Row, Col, Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Plot from "react-plotly.js";
import MapChart from "./MapChart";
import UnitedStatesChart from "./UnitedStatesChart";
import "./ChartComparison.css";

function ChartComparison(){

  const [metric, setMetric] = useState("");
  const [country, setCountry] = useState("");
  const [isUS, setIsUs] = useState(false);
  const [countryCode, setCode] = useState("");
  const [clickedCountries, setClickedCountries] = useState([]);
  
  function returnIsUS(){
      return isUS;
  }

  function filterCountry(co){
    setClickedCountries(clickedCountries.filter(c => c !== co))
  }

  function handleCountry(val){
    if(val.substring(val.length - 5, val.length) == "click"){
      var curr_country = val.substring(0,val.length - 6);
      if (clickedCountries.includes(curr_country)){
        setClickedCountries(clickedCountries.filter(c => c !== curr_country))
      }else {
        setClickedCountries([...clickedCountries,curr_country])
      }
    }
    setCountry(val);
  }

  function isStateBased(){
    return [8,9,10,11].includes(parseInt(metric));
  }

  return (
    <div id="container">
    <Row>
         <Plot/>
    </Row>
    <Row>
        <Col id="dashboardDiv">
      <Row id="chart" className="mb-4">
        {isStateBased()?<UnitedStatesChart setCountryContent={handleCountry} setCountryCode={setCode}/>:<MapChart setCountryContent={handleCountry} setCountryCode={setCode} isUSA={setIsUs}/>}
      </Row>
        </Col>
        <Col xs={3}>
    <Row>
        <Form.Select type="select" onChange={(e) => {setMetric(e.target.value)}} value={metric}>
          <option value="1"> Average Energy Usgae Per Capita Per Country Per Year </option>
<option value="2"> Breakdown of Average Energy Sources Per Country Per Year </option>
<option value="3"> Most Used Energy Source Per Country Per Year </option>
<option value="4"> Average Cost Per Capita Per Country Per Year </option>
<option value="5"> Average Cost Per KWH Per Capita Per Country </option>
<option value="6"> Energy Consumption Trend Per Energy Source Per Country </option>
<option value="7"> Renewable Energy Percentage Per Capita Per Country </option>
<option value="8"> Percentage of Energy Per Source Per State Per Year </option>
<option value="9"> Average Cost Per State Pet Year </option>
<option value="10"> Metric Tons of Emissions of CO2 Per State Per Year Per KWH </option>
<option value="11"> Metric Tons of Emissions of CO2 Per State Per Year Per Source Per KWH </option>
        </Form.Select>
    </Row>
    <Row className="mt-5">
    Click to remove selection.
    {clickedCountries.map(co => (
        <Button className="button" onClick={() => 
        filterCountry(co)
        } key={co}>{co}</Button>
      ))}
    </Row>
        </Col>
    </Row>
    </div>
  )
}

export default ChartComparison;
