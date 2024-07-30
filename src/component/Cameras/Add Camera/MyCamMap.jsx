/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, FeatureGroup, Polyline } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import L from "leaflet";
import osm from "../../../api/osm-providers";

// eslint-disable-next-line react/prop-types
const MyCamMap = ({
  Part2,
  Part3,
  setSTPoint,
  setENDPoint,
  setMarkerPoint,
}) => {
  const [center, setCenter] = useState({ lng: 31.2357, lat: 30.0444 });
  const [lines, setLines] = useState(
    Part2 !== "road details" && Part3 !== "road details"
      ? [
          [
            // eslint-disable-next-line react/prop-types
            [parseFloat(Part2.split("-")[0]), parseFloat(Part2.split("-")[1])],
            // eslint-disable-next-line react/prop-types
            [parseFloat(Part3.split("-")[0]), parseFloat(Part3.split("-")[1])],
          ],
        ]
      : null
  );

  useEffect(() => {
    if (Part2 !== "road details" && Part3 !== "road details") {
      setLines([
        [
          // eslint-disable-next-line react/prop-types
          [parseFloat(Part2.split("-")[0]), parseFloat(Part2.split("-")[1])],
          // eslint-disable-next-line react/prop-types
          [parseFloat(Part3.split("-")[0]), parseFloat(Part3.split("-")[1])],
        ],
      ]);
    }
  }, [Part2, Part3]);

  const ZOOM_LEVEL = 11;
  const mapRef = useRef();

  const _created = (e) => {
    if (e.layerType === "marker") {
      const marker = e.layer;
      const latlng = marker.getLatLng();

      // Make the marker draggable
      marker.dragging.enable();

      // Handle marker drag end event
      marker.on("dragend", () => {
        const newLatLng = marker.getLatLng();
        console.log("Marker dragged to", newLatLng);
        setMarkerPoint(newLatLng);
      });

      // Handle marker click event to delete marker
      marker.on("click", () => {
        mapRef.current.removeLayer(marker);
      });

      setMarkerPoint(latlng);
    }
  };

  function getGeoJson(lines) {
    return {
      type: "FeatureCollection",
      features: lines.map((line, index) => ({
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: line,
        },
        key: index,
      })),
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
          </FeatureGroup>
          <FeatureGroup>
            <EditControl
              position="topright"
              onCreated={_created}
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
          />
        </MapContainer>
      </Box>
    </Box>
  );
};

export default MyCamMap;
