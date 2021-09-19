import React from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({ setCountryContent, setCountryCode, isUSA, width=800, height=600}) => {
  var content;
  return (
    <>
      <ComposableMap data-tip="" project="geoMercator" width={width} height={height} projectionConfig={{ scale: 100 }}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME, ISO_A3 } = geo.properties;
                    content = `${NAME}`;
                    setCountryContent(content);
                    setCountryCode(`${ISO_A3}`)
                  }}
                  onMouseLeave={() => {
                    setCountryContent("");
                    setCountryCode("");
                  }}

                  onClick={() => {
                    const { NAME, ISO_A3 } = geo.properties;
                    setCountryContent(`${NAME} click`);
                    setCountryCode(`${ISO_A3}`)
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
