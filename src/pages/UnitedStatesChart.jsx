import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import './Dashboard.css'


const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const UnitedStatesChart = ({ setCountryHover, setCountryClick, setCountryCode }) => {
  var content;
  return (
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { name } = geo.properties;
                    content = `${name}`;
                    setCountryHover("United States: "+content);
                    setCountryCode("USA")
                  }}
                  onMouseLeave={() => {
                    setCountryHover("United States");
                  }}

                  onClick={() => {
                    const { name } = geo.properties;
                    setCountryClick(`United States: ${name} click`);
                    setCountryCode("USA")
                  }}

                  style={{
                    default: {
                      fill: "#F5F4F6",
                      outline: "none"
                    },
                    hover: {
                      fill: "#A8E541",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#7DD94B",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
      </Geographies>
    </ComposableMap>
  );
};

export default UnitedStatesChart;
