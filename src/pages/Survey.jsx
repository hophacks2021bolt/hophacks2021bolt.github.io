import React, { useState } from "react"
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Row, Col} from "react-bootstrap";
import "./Survey.css";


function Survey(){
    const [questionNum, setQuestionNum] = useState(0);
    const [country, setCountry] = useState("US")
    const [usState, setusState] = useState("N/A")
    const [numPeople, setNumPeople] = useState(4)
    const [squareFootage, setSquareFootage] = useState(2000)
    const [hoursAC, setHoursAC] = useState(7)
    const [electricWaterHeater, setElectricWaterHeater] = useState(1)
    const [numFridges, setNumFridges] = useState(1)
    const [hoursLargeKitchenApplicances, setHoursLargeKitchenAppliances] = useState(3)
    const [hoursSmallKitchenApplicances, setHoursSmallKitchenAppliances] = useState(3)
    const [loadsWashingPerWeek, setLoadsWashingPerWeek] = useState(3)
    const [loadsDryingPerWeek, setLoadsDryingPerWeek] = useState(3)
    const [hoursDishwasherPerWeek, setHoursDishwasherPerWeek] = useState(9)
    const [hoursBathroomElectronicsPerDay, setHoursBathroomElectronicsPerDay] = useState(3)
    const [hoursComputerPerDay, setHoursComputerPerDay] = useState(9)
    const [hoursTVPerDay, setHoursTVPerDay] = useState(3)
    const [smartHome, setSmartHome] = useState(0)
    const [hoursNECPerDay, sethoursNECPerDay] = useState(0)
    const [isUS, setIsUs] = useState(false)

    const handleNext = () => {
        setQuestionNum(questionNum+1);
    };

    const handlePrev = () => {
        setQuestionNum(questionNum-1);
    };

    const canGoBack = () => {
        return !(questionNum > 0)
    }

    const canGoNext = () => {
        return !(questionNum < 16)
    }

    const isCountryUS = () => {
        return country == "USA"
    }

    return (
        <div id="survey">
            <Carousel activeIndex={questionNum} indicators={false} controls={false}>
                <Carousel.Item>
                    <Form.Group className="questionDiv" controlId="formBasicDropdown">
                        <Form.Label>1. Please select your country</Form.Label>
                        <Form.Select type="select" onChange={(e) => { setCountry(e.target.value); if(e.target.value == "USA"){setIsUs(true)}; }} value={country}>
      <option value="N/A" selected> Prefer Not to Answer</option>                    
      <option value="USA">United States of America</option>                      
      <option value="AFG">Afghanistan</option>
                            <option value="ALB">Albania</option>
                            <option value="DZA">Algeria</option>
                            <option value="ASM">American Samoa</option>
                        <option value="AGO">Angola</option>
                        <option value="ATG">Antigua and Barbuda</option>
                        <option value="ARG">Argentina</option>
                        <option value="ARM">Armenia</option>
                        <option value="ABW">Aruba</option>
                        <option value="AUS">Australia</option>
                        <option value="AUT">Austria</option>
                        <option value="AZE">Azerbaijan</option>
                        <option value="BHS">Bahamas</option>
                        <option value="BHR">Bahrain</option>
                        <option value="BGD">Bangladesh</option>
                        <option value="BRB">Barbados</option>
                        <option value="BLR">Belarus</option>
                        <option value="BEL">Belgium</option>
                        <option value="BLZ">Belize</option>
                        <option value="BEN">Benin</option>
                        <option value="BMU">Bermuda</option>
                        <option value="BTN">Bhutan</option>
                        <option value="BIH">Bosnia and Herzegovina</option>
                        <option value="BWA">Botswana</option>
                        <option value="BRA">Brazil</option>
                        <option value="BGR">Bulgaria</option>
                        <option value="BFA">Burkina Faso</option>
                        <option value="BDI">Burundi</option>
                        <option value="KHM">Cambodia</option>
                        <option value="CMR">Cameroon</option>
                        <option value="CAN">Canada</option>
                        <option value="CYM">Cayman Islands</option>
                        <option value="CAF">Central African Republic</option>
                        <option value="TCD">Chad</option>
                        <option value="CHL">Chile</option>
                        <option value="CHN">China</option>
                        <option value="COL">Colombia</option>
                        <option value="COM">Comoros</option>
                        <option value="COG">Congo</option>
                        <option value="COK">Cook Islands</option>
                        <option value="CRI">Costa Rica</option>
                        <option value="HRV">Croatia</option>
                        <option value="CUB">Cuba</option>
                        <option value="CYP">Cyprus</option>
                        <option value="CZE">Czechia</option>
                        <option value="DNK">Denmark</option>
                        <option value="DJI">Djibouti</option>
                        <option value="DMA">Dominica</option>
                        <option value="DOM">Dominican Republic</option>
                        <option value="ECU">Ecuador</option>
                            <option value="EGY">Egypt</option>
                        <option value="SLV">El Salvador</option>
                        <option value="GNQ">Equatorial Guinea</option>
                        <option value="ERI">Eritrea</option>
                        <option value="EST">Estonia</option>
                        <option value="SWZ">Eswatini</option>
                        <option value="ETH">Ethiopia</option>
                        <option value="FJI">Fiji</option>
                        <option value="FIN">Finland</option>
                        <option value="FRA">France</option>
                        <option value="GUF">French Guiana</option>
                        <option value="PYF">French Polynesia</option>
                        <option value="GAB">Gabon</option>
                        <option value="GMB">Gambia</option>
                        <option value="GEO">Georgia</option>
                        <option value="DEU">Germany</option>
                        <option value="GHA">Ghana</option>
                        <option value="GIB">Gibraltar</option>
                        <option value="GRC">Greece</option>
                        <option value="GRL">Greenland</option>
                        <option value="GRD">Grenada</option>
                        <option value="GLP">Guadeloupe</option>
                        <option value="GUM">Guam</option>
                        <option value="GTM">Guatemala</option>
                        <option value="GIN">Guinea</option>
                        <option value="GNB">Guinea-Bissau</option>
                        <option value="GUY">Guyana</option>
                        <option value="HTI">Haiti</option>
                        <option value="HND">Honduras</option>
                        <option value="HKG">Hong Kong</option>
                        <option value="HUN">Hungary</option>
                        <option value="ISL">Iceland</option>
                        <option value="IND">India</option>
                        <option value="IDN">Indonesia</option>
                        <option value="IRQ">Iraq</option>
                        <option value="IRL">Ireland</option>
                        <option value="ISR">Israel</option>
                        <option value="ITA">Italy</option>
                        <option value="JAM">Jamaica</option>
                        <option value="JPN">Japan</option>
                        <option value="JOR">Jordan</option>
                        <option value="KAZ">Kazakhstan</option>
                        <option value="KEN">Kenya</option>
                        <option value="KIR">Kiribati</option>
                        <option value="KWT">Kuwait</option>
                        <option value="KGZ">Kyrgyzstan</option>
                        <option value="LVA">Latvia</option>
                        <option value="LBN">Lebanon</option>
                        <option value="LSO">Lesotho</option>
                        <option value="LBR">Liberia</option>
                        <option value="LBY">Libya</option>
                        <option value="LTU">Lithuania</option>
                        <option value="LUX">Luxembourg</option>
                        <option value="MDG">Madagascar</option>
                        <option value="MWI">Malawi</option>
                        <option value="MYS">Malaysia</option>
                        <option value="MDV">Maldives</option>
                        <option value="MLI">Mali</option>
                        <option value="MLT">Malta</option>
                        <option value="MTQ">Martinique</option>
                        <option value="MRT">Mauritania</option>
                        <option value="MUS">Mauritius</option>
                        <option value="MEX">Mexico</option>
                        <option value="MNG">Mongolia</option>
                        <option value="MNE">Montenegro</option>
                        <option value="MSR">Montserrat</option>
                        <option value="MAR">Morocco</option>
                        <option value="MOZ">Mozambique</option>
                        <option value="MMR">Myanmar</option>
                        <option value="NAM">Namibia</option>
                        <option value="NRU">Nauru</option>
                        <option value="NPL">Nepal</option>
                        <option value="NLD">Netherlands</option>
                        <option value="NCL">New Caledonia</option>
                        <option value="NZL">New Zealand</option>
                        <option value="NIC">Nicaragua</option>
                        <option value="NER">Niger</option>
                        <option value="NGA">Nigeria</option>
                        <option value="NIU">Niue</option>
                        <option value="MKD">North Macedonia</option>
                        <option value="MNP">Northern Mariana Islands</option>
                        <option value="NOR">Norway</option>
                        <option value="OMN">Oman</option>
                        <option value="PAK">Pakistan</option>
                        <option value="PAN">Panama</option>
                        <option value="PNG">Papua New Guinea</option>
                        <option value="PRY">Paraguay</option>
                        <option value="PER">Peru</option>
                        <option value="PHL">Philippines</option>
                        <option value="POL">Poland</option>
                        <option value="PRT">Portugal</option>
                        <option value="PRI">Puerto Rico</option>
                        <option value="QAT">Qatar</option>
                        <option value="ROU">Romania</option>
                        <option value="RWA">Rwanda</option>
                        <option value="KNA">Saint Kitts and Nevis</option>
                        <option value="LCA">Saint Lucia</option>
                        <option value="SPM">Saint Pierre and Miquelon</option>
                        <option value="VCT">Saint Vincent and the Grenadines</option>
                        <option value="WSM">Samoa</option>
                        <option value="STP">Sao Tome and Principe</option>
                        <option value="SAU">Saudi Arabia</option>
                        <option value="SEN">Senegal</option>
                        <option value="SRB">Serbia</option>
                        <option value="SYC">Seychelles</option>
                        <option value="SLE">Sierra Leone</option>
                        <option value="SGP">Singapore</option>
                        <option value="SVK">Slovakia</option>
                        <option value="SVN">Slovenia</option>
                        <option value="SLB">Solomon Islands</option>
                        <option value="SOM">Somalia</option>
                        <option value="ZAF">South Africa</option>
                        <option value="SSD">South Sudan</option>
                        <option value="ESP">Spain</option>
                        <option value="LKA">Sri Lanka</option>
                        <option value="SDN">Sudan</option>
                        <option value="SUR">Suriname</option>
                        <option value="SWE">Sweden</option>
                        <option value="CHE">Switzerland</option>
                        <option value="TJK">Tajikistan</option>
                        <option value="THA">Thailand</option>
                        <option value="TGO">Togo</option>
                        <option value="TON">Tonga</option>
                        <option value="TTO">Trinidad and Tobago</option>
                        <option value="TUN">Tunisia</option>
                        <option value="TUR">Turkey</option>
                        <option value="TKM">Turkmenistan</option>
                        <option value="TCA">Turks and Caicos Islands</option>
                        <option value="UGA">Uganda</option>
                        <option value="UKR">Ukraine</option>
                        <option value="ARE">United Arab Emirates</option>
                        <option value="URY">Uruguay</option>
                        <option value="UZB">Uzbekistan</option>
                        <option value="VUT">Vanuatu</option>
                        <option value="ESH">Western Sahara</option>
                        <option value="YEM">Yemen</option>
                        <option value="ZMB">Zambia</option>
                        <option value="ZWE">Zimbabwe</option>
                        </Form.Select>
                        {isCountryUS() ? 
                          <div className="ml-3 mt-3">
                            <Form.Label> a. Please select your state </Form.Label>
                          <Form.Select type="select" onChange={(e) => { setusState(e.target.value) }} value={usState}>
      <option value="N/A" selected> Prefer Not to Answer</option>                    
                          	<option value="AL">Alabama</option>
	<option value="AK">Alaska</option>
	<option value="AZ">Arizona</option>
	<option value="AR">Arkansas</option>
	<option value="CA">California</option>
	<option value="CO">Colorado</option>
	<option value="CT">Connecticut</option>
	<option value="DE">Delaware</option>
	<option value="DC">District Of Columbia</option>
	<option value="FL">Florida</option>
	<option value="GA">Georgia</option>
	<option value="HI">Hawaii</option>
	<option value="ID">Idaho</option>
	<option value="IL">Illinois</option>
	<option value="IN">Indiana</option>
	<option value="IA">Iowa</option>
	<option value="KS">Kansas</option>
	<option value="KY">Kentucky</option>
	<option value="LA">Louisiana</option>
	<option value="ME">Maine</option>
	<option value="MD">Maryland</option>
	<option value="MA">Massachusetts</option>
	<option value="MI">Michigan</option>
	<option value="MN">Minnesota</option>
	<option value="MS">Mississippi</option>
	<option value="MO">Missouri</option>
	<option value="MT">Montana</option>
	<option value="NE">Nebraska</option>
	<option value="NV">Nevada</option>
	<option value="NH">New Hampshire</option>
	<option value="NJ">New Jersey</option>
	<option value="NM">New Mexico</option>
	<option value="NY">New York</option>
	<option value="NC">North Carolina</option>
	<option value="ND">North Dakota</option>
	<option value="OH">Ohio</option>
	<option value="OK">Oklahoma</option>
	<option value="OR">Oregon</option>
	<option value="PA">Pennsylvania</option>
	<option value="RI">Rhode Island</option>
	<option value="SC">South Carolina</option>
	<option value="SD">South Dakota</option>
	<option value="TN">Tennessee</option>
	<option value="TX">Texas</option>
	<option value="UT">Utah</option>
	<option value="VT">Vermont</option>
	<option value="VA">Virginia</option>
	<option value="WA">Washington</option>
	<option value="WV">West Virginia</option>
	<option value="WI">Wisconsin</option>
	<option value="WY">Wyoming</option>
                          </Form.Select>
                          </div>

                        : null}              
                      </Form.Group>
                </Carousel.Item>
                <Carousel.Item>
                    <Form.Group className="questionDiv" controlId="formNumber">
                        <Form.Label> 2. How many people live in your household? </Form.Label>
                        <Form.Select type="select" onChange={(e) => { setNumPeople(e.target.value) }} value={numPeople}>
      <option value="0" selected> Prefer Not to Answer</option>                    
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7+</option>
                        </Form.Select>
                    </Form.Group>
                </Carousel.Item>
                <Carousel.Item>
                    <Form.Group className="questionDiv" controlId="formNumber">
                        <Form.Label> 2. What is the square footage of your home? </Form.Label>
                        <Form.Select type="select" onChange={(e) => { setNumPeople(e.target.value) }} value={numPeople}>
      <option value="N/A" selected> Prefer Not to Answer</option>                    
                            <option value="1"> &lt;1,000 </option>
                            <option value="2">1,000-1,500</option>
                            <option value="3">1,500-2,000</option>
                            <option value="4">2,000-2,500</option>
                            <option value="5">2,500-3,000</option>
                            <option value="6">3000+</option>
                        </Form.Select>
                    </Form.Group>
                </Carousel.Item>
                <Carousel.Item>
                    <Form.Group className="questionDiv" controlId="formNumber">
                        <Form.Label> 3. How many hours per day does your AC run? </Form.Label>
                        <Form.Select type="select" onChange={(e) => { setHoursAC(e.target.value) }} value={hoursAC}>
      <option value="N/A" selected> Prefer Not to Answer</option>                    
                            <option value="1"> 0 </option>
                            <option value="2"> 1-4 </option>
                            <option value="3"> 5-10 </option>
                            <option value="4"> 9-12</option>
                            <option value="5"> 13-16</option>
                            <option value="6"> 17-20</option>
                            <option value="7"> 21-24</option>
                        </Form.Select>
                    </Form.Group>
                </Carousel.Item>
                <Carousel.Item>
                    <Form.Group className="questionDiv" controlId="formNumber">
                        <Form.Label> 4. Do you have an electric water heater? </Form.Label>
                        <Form.Select type="select" onChange={(e) => { setElectricWaterHeater(e.target.value) }} value={electricWaterHeater}>
      <option value="N/A" selected> Prefer Not to Answer</option>                    
                            <option value="1"> Yes </option>
                            <option value="2"> No</option>
                        </Form.Select>
                    </Form.Group>
                </Carousel.Item>
                <Carousel.Item>
                    <Form.Group className="questionDiv" controlId="formNumber">
                        <Form.Label> 5. How many fridges/ freezers are in your home? </Form.Label>
                        <Form.Select type="select" onChange={(e) => { setNumFridges(e.target.value) }} value={numFridges}>
      <option value="N/A" selected> Prefer Not to Answer</option>                    
                            <option value="1"> 0 </option>
                            <option value="2"> 1</option>
                            <option value="3"> 2</option>
                            <option value="4"> 3+</option>
                        </Form.Select>
                    </Form.Group>
                </Carousel.Item>
                <Carousel.Item>
                    <Form.Group className="questionDiv" controlId="formNumber">
                        <Form.Label> 6. How many cumulative hours per day are large kitchen appliances used (Oven, Stove, Hob, etc.) </Form.Label>
                        <Form.Select type="select" onChange={(e) => { setHoursLargeKitchenAppliances(e.target.value) }} value={hoursLargeKitchenApplicances}>
      <option value="N/A" selected> Prefer Not to Answer</option>                    
                            <option value="1"> 0 </option>
                            <option value="2"> 1</option>
                            <option value="3"> 2</option>
                            <option value="4"> 3+</option>
                        </Form.Select>
                    </Form.Group>
                </Carousel.Item>
                <Carousel.Item>
                    <Form.Group className="questionDiv" controlId="formNumber">
                        <Form.Label> 7. How many cumulative hours per day are small kitchen appliances used (Microwave, Blender, etc.) </Form.Label>
                        <Form.Select type="select" onChange={(e) => { setHoursSmallKitchenAppliances(e.target.value) }} value={hoursSmallKitchenApplicances}>
      <option value="N/A" selected> Prefer Not to Answer</option>                    
                            <option value="1"> 0 </option>
                            <option value="2"> 1</option>
                            <option value="3"> 2</option>
                            <option value="4"> 3+</option>
                        </Form.Select>
                    </Form.Group>
                </Carousel.Item>
                <Carousel.Item>
                    <Form.Group className="questionDiv" controlId="formNumber">
                        <Form.Label> 8. How many washing machine loads are done per week?</Form.Label>
                        <Form.Select type="select" onChange={(e) => { setLoadsWashingPerWeek(e.target.value) }} value={loadsWashingPerWeek}>
      <option value="N/A" selected> Prefer Not to Answer</option>                    
                            <option value="1"> 0 </option>
                            <option value="2"> 1-2</option>
                            <option value="3"> 3-4</option>
                            <option value="4"> 5-6</option>
                            <option value="5"> 7+</option>
                        </Form.Select>
                    </Form.Group>
                </Carousel.Item>
                <Carousel.Item>
                    <Form.Group className="questionDiv" controlId="formNumber">
                        <Form.Label> 9. How many dryer loads are done per week?</Form.Label>
                        <Form.Select type="select" onChange={(e) => { setLoadsDryingPerWeek(e.target.value) }} value={loadsDryingPerWeek}>
      <option value="N/A" selected> Prefer Not to Answer</option>                    
                            <option value="1"> 0 </option>
                            <option value="2"> 1-2</option>
                            <option value="3"> 3-4</option>
                            <option value="4"> 5-6</option>
                            <option value="5"> 7+</option>
                        </Form.Select>
                    </Form.Group>
                </Carousel.Item>
                <Carousel.Item>
                    <Form.Group className="questionDiv" controlId="formNumber">
                        <Form.Label> 10. How many hours is the dishwasher running each week?</Form.Label>
                        <Form.Select type="select" onChange={(e) => { setHoursDishwasherPerWeek(e.target.value) }} value={hoursDishwasherPerWeek}>
      <option value="N/A" selected> Prefer Not to Answer</option>                    
                            <option value="1"> 0 </option>
                            <option value="2"> 1-2</option>
                            <option value="3"> 3-4</option>
                            <option value="4"> 5-6</option>
                            <option value="5"> 7+</option>
                        </Form.Select>
                    </Form.Group>
                </Carousel.Item>
                <Carousel.Item>
                    <Form.Group className="questionDiv" controlId="formNumber">
                        <Form.Label> 11.How many hours per day are heavy bathroom electronics used (Hair dryer, Curling Iron, Clothing Iron, etc.)</Form.Label>
                        <Form.Select type="select" onChange={(e) => { setHoursBathroomElectronicsPerDay(e.target.value) }} value={hoursBathroomElectronicsPerDay}>
      <option value="N/A" selected> Prefer Not to Answer</option>                    
                            <option value="1"> 0 </option>
                            <option value="2"> 1-2</option>
                            <option value="3"> 3-4</option>
                            <option value="4"> 5-6</option>
                            <option value="5"> 7+</option>
                        </Form.Select>
                    </Form.Group>
                </Carousel.Item>
                <Carousel.Item>
                    <Form.Group className="questionDiv" controlId="formNumber">
                        <Form.Label> 12. How many hours per day do you use laptops or desktop computers? </Form.Label>
                        <Form.Select type="select" onChange={(e) => { setHoursComputerPerDay(e.target.value) }} value={hoursComputerPerDay}>
      <option value="N/A" selected> Prefer Not to Answer</option>                    
                            <option value="1"> 0 </option>
                            <option value="2"> 1-2</option>
                            <option value="3"> 3-4</option>
                            <option value="4"> 5-6</option>
                            <option value="5"> 7+</option>
                        </Form.Select>
                    </Form.Group>
                </Carousel.Item>
                <Carousel.Item>
                    <Form.Group className="questionDiv" controlId="formNumber">
                        <Form.Label> 13. How many hours per day do you watch TV?</Form.Label>
                        <Form.Select type="select" onChange={(e) => { setHoursTVPerDay(e.target.value) }} value={hoursTVPerDay}>
      <option value="N/A" selected> Prefer Not to Answer</option>                    
                            <option value="1"> 0 </option>
                            <option value="2"> 1-2</option>
                            <option value="3"> 3-4</option>
                            <option value="4"> 5-6</option>
                            <option value="5"> 7+</option>
                        </Form.Select>
                    </Form.Group>
                </Carousel.Item>
                <Carousel.Item>
                    <Form.Group className="questionDiv" controlId="formNumber">
                        <Form.Label> 14. Do you use a smart home system?</Form.Label>
                        <Form.Select type="select" onChange={(e) => { setSmartHome(e.target.value) }} value={smartHome}>
      <option value="N/A" selected> Prefer Not to Answer</option>                    
                            <option value="1"> 0 </option>
                            <option value="2"> 1-2</option>
                            <option value="3"> 3-4</option>
                            <option value="4"> 5-6</option>
                            <option value="5"> 7+</option>
                        </Form.Select>
                    </Form.Group>
                </Carousel.Item>
                <Carousel.Item>
                    <Form.Group className="questionDiv" controlId="formNumber">
                        <Form.Label> 15. How many hours per day do you use other electronics (game console, DVD player, sound system)?</Form.Label>
                        <Form.Select type="select" onChange={(e) => { sethoursNECPerDay(e.target.value) }} value={hoursNECPerDay}>
      <option value="N/A" selected> Prefer Not to Answer</option>                    
                            <option value="1"> 0 </option>
                            <option value="2"> 1-2</option>
                            <option value="3"> 3-4</option>
                            <option value="4"> 5-6</option>
                            <option value="5"> 7+</option>
                        </Form.Select>
                    </Form.Group>
                </Carousel.Item>
                <Carousel.Item>
                </Carousel.Item>
            </Carousel>
            <Row>
                <Col className="controls">
                    <Button onClick={handlePrev} disabled={canGoBack()}>
                        Previous
                    </Button>
                </Col>
                <Col className="controls">
                    <Button onClick={handleNext} disabled={canGoNext()}>
                        Next
                    </Button>
                </Col>
            </Row>
        </div>
    );

}

export default Survey;
