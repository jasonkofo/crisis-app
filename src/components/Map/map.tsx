"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// const icon = new L.Icon({
//   iconUrl: "/marker-icon.png", // Store marker images in /public
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
// });

const Map = () => {
  return (
    <MapContainer center={[-33.9249, 18.4241]} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

    </MapContainer>
  );
};

// <Marker position={[-33.9249, 18.4241]} >
//         <Popup> This is Cape Town </Popup>
//       </Marker>
export default Map;
