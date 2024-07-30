/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, FeatureGroup, Polyline, Marker } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import L from "leaflet";
import osm from "../../api/osm-providers";
// eslint-disable-next-line react/prop-types
const MyForecastMap = ({
  Part2,
  Part3,
  dimensions,
}) => {
  const [center, setCenter] = useState({ lng: 31.2357, lat: 30.0444 });
  // console.log(Part2);
  // console.log(Part3);
  // console.log(dimensions);

 const parsePoint = (point) => {
   const [lat, lng] = point.split("-");
   return [parseFloat(lat), parseFloat(lng)];
 };
 const parsePointM = (point) => {
   const [lng, lat] = point.split("-");
   return [parseFloat(lat), parseFloat(lng)];
 };

 const [lines, setLines] = useState(
   Part2 !== "" && Part3 !== "" ? [[parsePoint(Part2), parsePoint(Part3)]] : []
 );

 const [markers, setMarkers] = useState(
   dimensions && dimensions.length > 0 ? dimensions.map(parsePointM) : []
 );
  useEffect(() => {
    if (Part2 !== "" && Part3 !== "") {
      setLines([[parsePoint(Part2), parsePoint(Part3)]]);
    }
  }, [Part2, Part3]);

  useEffect(() => {
    if (dimensions && dimensions.length > 0) {
      setMarkers(dimensions.map(parsePointM));
    }
  }, [dimensions]);
  //console.log(center);
  // console.log(lines);
  const ZOOM_LEVEL = 11;
  const mapRef = useRef();
  function getGeoJson(lines) {
    // console.log("started");
    return {
      type: "FeatureCollection",
      features: lines.map((line, index) => {
        //console.log(line);
        return {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: line,
          },
          key: index,
        };
      }),
    };
  }
  return (
    <Box
      position="relative"
      flexDirection="column"
      alignItems="center"
      h="100vh"
      w="100vw"
      sx={{ width: "100%", border: "7px solid #b8b8b8", padding: 0 }}
    >
      <Box className="OurMap" h="100%" w="100%">
        <MapContainer
          center={center}
          zoom={ZOOM_LEVEL}
          ref={mapRef}
          style={{ width: "100%", height: "100%" }}
        >
          <FeatureGroup>
            {lines &&
              lines.length > 0 &&
              Part2 !== "road details" &&
              Part3 !== "road details" &&
              lines.map((line, index) => (
                <Polyline
                  key={index}
                  positions={line}
                  pathOptions={{ color: "#ff0000", weight: 10, opacity: 0.7 }}
                />
              ))}
              {markers.length > 0 &&
              markers.map((marker, index) => (
                <Marker key={index} position={marker} />
              ))}
          </FeatureGroup>
          <FeatureGroup>
            <EditControl
              position="topright"
              draw={{
                marker: true,
                polyline: false,
                rectangle: false,
                circle: false,
                circlemarker: false,
              }}
            />
          </FeatureGroup>
          <TileLayer
            url={osm.maptiler.url}
            attribution={osm.maptiler.attribution}
            style={{ color: "red", fontWeight: "bold" }}
          />
        </MapContainer>
      </Box>
    </Box>
  );
};

export default MyForecastMap;
