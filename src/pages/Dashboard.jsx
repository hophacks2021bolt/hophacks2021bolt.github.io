import { React, useState } from "react";
import '../App.css';
import './Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, ButtonToolbar, Form } from "react-bootstrap";
import MapChart from "./MapChart";
import UnitedStatesChart from "./UnitedStatesChart";



function Dashboard() {
    const [countryHover, setCountryHover] = useState("");
    const [countryClick, setCountryClick] = useState("");
    const [isUS, setIsUs] = useState(false);
    const [countryCode, setCode] = useState("");
    const [year, setYear] = useState(2019);

    const [countryEnergyPerCapita, setCountryEnergyPerCapita] = useState({});
    const [countryMostUsed, setCountryMostUsed] = useState({});
    const [countryRenewableShare, setCountryRenewableShare] = useState({});
    const [countryTrends, setCountryTrends] = useState({});

    const [stateShareEnergy, setStateShareEnergy] = useState({});
    const [stateEmissions, setStateEmissions] = useState("");
    const [stateSourceEmissions, setStateSourceEmissions] = useState({});
    
    


    function returnIsUS() {
        return isUS;
    }


    function returnIsValid() {
        return countryClick.length > 0;
    }

    function returnYearValid() {
        return year > 0;
    }

    function allValid() {
        return returnIsValid() && returnYearValid();
    }

    function getStuff() {
        var requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ country: countryCode, year: year })
        };
        fetch('http://3.138.120.118:8080/energypercapita', requestOptions)
            .then(response => response.json())
            .then(data => setCountryEnergyPerCapita(data));


        requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ country: countryCode, year: year })
        };
        fetch('http://3.138.120.118:8080/mostusedenergy', requestOptions)
            .then(response => response.json())
            .then(data => setCountryMostUsed(data));

        requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ country: countryCode, year: year })
        };
        fetch('http://3.138.120.118:8080/renewableshare', requestOptions)
            .then(response => response.json())
            .then(data => setCountryRenewableShare(data));
            
        requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ country: countryCode, year: year })
        };
        fetch('http://3.138.120.118:8080/energytrends', requestOptions)
            .then(response => response.json())
            .then(data => setCountryTrends(JSON.parse(data)));

        requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ state: countryClick, year: year })
        };
        fetch('http://3.138.120.118:8080/stateshareenergy', requestOptions)
            .then(response => response.json())
            .then(data => setStateShareEnergy(JSON.parse(data)));

        requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ state: countryClick, year: year })
        };
        fetch('http://3.138.120.118:8080/stateemissions', requestOptions)
            .then(response => response.json())
            .then(data => setStateEmissions(data));

        requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ state: countryClick, year: year })
        };
        fetch('http://3.138.120.118:8080/statesourceemissions', requestOptions)
            .then(response => response.json())
            .then(data => setStateSourceEmissions(data));


    }



    return (
        

        <div className="dashboard">            
            
            <div className="left w50">
                <ButtonToolbar>
                    <ButtonGroup>
                        <Button className="button" onClick={() => { setCountryClick(""); setCode("") }}>Clear</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        {returnIsUS() ? <Button className="button" onClick={() => { setIsUs(false); setCountryClick(""); setCode("") }}>Exit US</Button> : null}
                    </ButtonGroup>
                </ButtonToolbar>
                {returnIsUS() ? <UnitedStatesChart on_Click={getStuff} setCountryHover={setCountryHover} setCountryClick={setCountryClick} setCountryCode={setCode} /> : <MapChart on_Click={getStuff} setCountryHover={setCountryHover} setCountryClick={setCountryClick} setCountryCode={setCode} isUSA={setIsUs} />}
                {returnIsUS()
                    ?
                    <Form>
                        <Form.Select type="select" onChange={(e) => { setYear(e.target.value); getStuff() }} value={year}>
                            {[...Array(30).keys()].map(i => (

                                <option value={i + 1990}>{i + 1990}</option>

                            ))}
                        </Form.Select>
                    </Form>

                    :
                    <Form>
                        <Form.Select type="select" onChange={(e) => { setYear(e.target.value); getStuff() }} value={year}>
                            {[...Array(30).keys()].map(i => (

                                <option value={i + 1990}>{i + 1990}</option>

                            ))}
                        </Form.Select>
                    </Form>
                }
                {countryHover}
                

            </div>
            <div className="right w50">
                {"process data from " + countryCode}
                <br />


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
                            <b>Petroleum:</b> {stateShareEnergy["Petroleum"]}
                            <br/>
                            <b>Hydro:</b> {stateShareEnergy["Hydroelectric Conventional"]}
                            <br/>
                            <b>Nuclear:</b> {stateShareEnergy["Nuclear"]}
                            <br/>
                            <b>Natural Gas:</b> {stateShareEnergy["Natural Gas"]}
                            <br/>
                            <b>Coal:</b> {stateShareEnergy["Coal"]}
                            <br/>
                            <b>Geothermal:</b> {stateShareEnergy["Geothermal"]}
                            <br/>
                            <b>Solar, Thermal, and Photovoltaic:</b> {stateShareEnergy["Solar Thermal and Photovoltaic"]}
                            <br/>
                            <b>Wind:</b> {stateShareEnergy["Wind"]}
                            </h4>

                            <h3>
                                Metric tons of CO2 emissions per kWh in the state of {countryClick}
                            </h3>
                            <h4>
                                {parseInt(stateEmissions)}
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
                                {countryEnergyPerCapita["avgEnergyUsage"]}
                            </h4>

                            <h3>
                                Most-used energy source in {countryClick}
                            </h3>
                            <h4>
                                {countryMostUsed["highestShare"]}
                            </h4>

                            <h3>
                                % Usage of renewable energy in {countryClick}
                            </h3>
                            <h4>
                                {countryRenewableShare["renewableEnergyShare"]}
                            </h4>
                            
                            <h3>
                                Cumulative early usage in TW of {countryClick}
                            </h3>
                            <h4>
                                
                                <b>Biofuel:</b> {countryTrends["biofuel"]}
                                <br/>
                                <b>Coal:</b> {countryTrends["coal"]}
                                <br/>
                                <b>Natural Gas:</b> {countryTrends["gas"]}
                                <br/>
                                <b>Nuclear:</b> {countryTrends["nuclear"]}
                                <br/>
                                <b>Hydro:</b> {countryTrends["hydro"]}
                                <br/>
                                <b>Oil:</b> {countryTrends["oil"]}
                                <br/>
                                <b>Solar:</b> {countryTrends["solar"]}
                                <br/>
                                <b>Wind:</b> {countryTrends["wind"]}
                            </h4>

                            non-US data
                        </div>
                    : null}

            </div>
        </div>
    );
}

export default Dashboard;
