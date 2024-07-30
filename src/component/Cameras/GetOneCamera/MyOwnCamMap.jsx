/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  FeatureGroup,
  Polyline,
} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import osm from "../../../api/osm-providers";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MyOwnCamMap = ({ Part2, Part3, setMarkerPoint, MarkerPoint, Name }) => {
  // eslint-disable-next-line no-unused-vars
  const [center, setCenter] = useState({ lng: 31.2357, lat: 30.0444 });
  const [lines, setLines] = useState([]);

  useEffect(() => {
    if (Part2 !== "road details" && Part3 !== "road details") {
      const newLine = [
        [parseFloat(Part2.split("-")[0]), parseFloat(Part2.split("-")[1])],
        [parseFloat(Part3.split("-")[0]), parseFloat(Part3.split("-")[1])],
      ];
      setLines([newLine]);
    } else {
      setLines([]);
    }
  }, [Part2, Part3]);

  const ZOOM_LEVEL = 11;
  const mapRef = useRef();
  const _created = (e) => {
    if (e.layerType === "marker") {
      const latlng = e.layer.getLatLng();
      setMarkerPoint(latlng);
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
          whenCreated={(mapInstance) => {
            mapRef.current = mapInstance;
          }}
        >
          <FeatureGroup>
            {lines.length > 0 &&
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
          {MarkerPoint && (
            <Marker
              position={[MarkerPoint.lat, MarkerPoint.lng]}
              draggable={true}
              eventHandlers={{
                dragend: (event) => {
                  const latlng = event.target.getLatLng();
                  setMarkerPoint(latlng);
                },
              }}
            >
              <Popup>{Name}</Popup>
            </Marker>
          )}
        </MapContainer>
      </Box>
    </Box>
  );
};

export default MyOwnCamMap;
