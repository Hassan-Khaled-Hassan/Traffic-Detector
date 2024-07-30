/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  FeatureGroup,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import osm from "../../../api/osm-providers";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import L from "leaflet";
import "../../../api/MyMap.css";

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

const MyAddMap = ({ setSTPoint, setENDPoint, CenterDataItem }) => {
  const [center, setCenter] = useState(CenterDataItem);
  const ZOOM_LEVEL = 10; // Initial zoom level
  const ZOOM_LEVEL_TO = 14; // Target zoom level
  const mapRef = useRef();

  // Update map center and zoom level when CenterDataItem changes
  useEffect(() => {
    if (mapRef.current && CenterDataItem) {
      mapRef.current.setView(CenterDataItem, ZOOM_LEVEL, { animate: true }); // Initial zoom out animation
      setTimeout(() => {
        mapRef.current.flyTo(CenterDataItem, ZOOM_LEVEL_TO, {
          animate: true,
          pan: {
            duration: 10,
          },
        }); // Zoom in to target level after delay
      }, 500); // Adjust delay (in milliseconds) as needed
    }
  }, [CenterDataItem]);


  const _created = (e) => {
    if (e.layerType === "polyline") {
      const latlngs = e.layer.getLatLngs();
      const startPoint = latlngs[0];
      const endPoint = latlngs[latlngs.length - 1];
      setSTPoint(startPoint);
      setENDPoint(endPoint);
      console.log("Start Point:", startPoint);
      console.log("End Point:", endPoint);
    }
  };

  return (
    <Box
      position="relative"
      flexDirection="column"
      alignItems="center"
      h="100vh"
      w="100vw"
      sx={{
        width: "100%",
        border: "7px solid #b8b8b8",
        padding: 0,
      }}
    >
      <Box className="OurMap" h="100%" w="100%">
        <MapContainer
          center={center}
          zoom={ZOOM_LEVEL}
          ref={mapRef}
          style={{ width: "100%", height: "100%" }}
        >
          <FeatureGroup>
            <EditControl
              position="topright"
              onCreated={_created}
              draw={{
                polyline: true,
                rectangle: false,
                circle: true,
                circlemarker: false,
                marker: false,
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

export default MyAddMap;
