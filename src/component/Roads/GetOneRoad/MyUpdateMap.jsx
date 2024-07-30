import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { MapContainer, Polyline, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import osm from "../../../api/osm-providers";

const MyUpdatedMap = ({ Part2, Part3, setSTPoint, setENDPoint }) => {
  const [center, setCenter] = useState({ lng: 31.2357, lat: 30.0444 });
  const [lines, setLines] = useState(
    Part2 !== "road details" && Part3 !== "road details"
      ? [
          [
            [parseFloat(Part2.split("-")[0]), parseFloat(Part2.split("-")[1])],
            [parseFloat(Part3.split("-")[0]), parseFloat(Part3.split("-")[1])],
          ],
        ]
      : []
  );

  useEffect(() => {
    if (Part2 !== "road details" && Part3 !== "road details") {
      setLines([
        [
          [parseFloat(Part2.split("-")[0]), parseFloat(Part2.split("-")[1])],
          [parseFloat(Part3.split("-")[0]), parseFloat(Part3.split("-")[1])],
        ],
      ]);
    }
  }, [Part2, Part3]);

  const ZOOM_LEVEL = 11;
  const mapRef = useRef();

  const _created = (e) => {
    if (e.layerType === "polyline") {
      const latlngs = e.layer.getLatLngs();
      setLines((prevLines) => [...prevLines, latlngs]);
      const startPoint = latlngs[0]; // Get the first point as start point
      const endPoint = latlngs[latlngs.length - 1]; // Get the last point as end point
      setSTPoint(startPoint);
      setENDPoint(endPoint);
    }
  };

  const handleLineClick = (index) => {
    setLines((prevLines) => prevLines.filter((_, i) => i !== index));
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
            {lines && Part2 !== "road details" && Part3 !== "road details"
              ? lines.map((line, index) => (
                  <Polyline
                    key={index}
                    positions={line}
                    pathOptions={{ color: "#ff0000", weight: 10, opacity: 0.7 }}
                    eventHandlers={{
                      click: () => handleLineClick(index),
                    }}
                  />
                ))
              : null}
          </FeatureGroup>
          <FeatureGroup>
            <EditControl
              position="topright"
              onCreated={_created}
              draw={{
                polyline: true,
                rectangle: false,
                circle: false,
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

export default MyUpdatedMap;
