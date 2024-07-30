/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  FeatureGroup,
  Polyline,
  Marker,
} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import L from "leaflet";
import osm from "../../../../api/osm-providers";

const MyCamDMap = ({ RoadSTpoint, RoadEndpoint, dimensions }) => {
  const [center, setCenter] = useState({ lng: 31.2357, lat: 30.0444 });

  const parsePoint = (point) => {
    const [lat, lng] = point.split("-");
    return [parseFloat(lat), parseFloat(lng)];
  };
  const parsePointM = (point) => {
    const [lng, lat] = point.split("-");
    return [parseFloat(lat), parseFloat(lng)];
  };

  const [lines, setLines] = useState(
    RoadSTpoint !== "" && RoadEndpoint !== ""
      ? [[parsePoint(RoadSTpoint), parsePoint(RoadEndpoint)]]
      : []
  );

  const [markers, setMarkers] = useState(
    dimensions && dimensions.length > 0 ? dimensions.map(parsePointM) : []
  );

  useEffect(() => {
    if (RoadSTpoint !== "" && RoadEndpoint !== "") {
      setLines([[parsePoint(RoadSTpoint), parsePoint(RoadEndpoint)]]);
    }
  }, [RoadSTpoint, RoadEndpoint]);

  useEffect(() => {
    if (dimensions && dimensions.length > 0) {
      setMarkers(dimensions.map(parsePointM));
    }
  }, [dimensions]);

  const ZOOM_LEVEL = 11;
  const mapRef = useRef();

  const _created = (e) => {
    if (e.layerType === "marker") {
      const latlng = e.layer.getLatLng();
      setMarkers((prevMarkers) => [...prevMarkers, [latlng.lat, latlng.lng]]);
      console.log(latlng);
    }
  };
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
            {lines.length > 0 &&
              RoadSTpoint !== "" &&
              RoadEndpoint !== "" &&
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
              onCreated={_created}
              draw={{
                marker: false,
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

export default MyCamDMap;
