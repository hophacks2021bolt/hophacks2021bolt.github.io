import React from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({on_Click=null, setCountryHover, setCountryClick, setCountryCode, isUSA, width=800, height=600}) => {
  var content;
  return (
    <>
      <ComposableMap data-tip="" projection="geoMercator" projectionConfig={{ scale: 100 }} width={width} height={height}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;
                    content = `${NAME}`;
                    setCountryHover(content);
                  }}
                  onMouseLeave={() => {
                    setCountryHover("");
                  }}

                  onClick={() => {
                    const { NAME, ISO_A3 } = geo.properties;
                    setCountryClick(`${NAME}`);
                    setCountryCode(`${ISO_A3}`)
                    if(on_Click != null) on_Click();
                    isUSA(`${ISO_A3}`==="USA")
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

                    active: {
                      fill: "#7DD94B",
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
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default MapChart;
