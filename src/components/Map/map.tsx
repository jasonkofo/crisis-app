"use client";

import "leaflet/dist/leaflet.css";
// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
// import "leaflet-defaulticon-compatibility";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "@/app/globals.css";

import L from "leaflet";

// const icon = new L.Icon({
//   iconUrl: "/marker-icon.png", // Store marker images in /public
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
// });

const locationMap: Record<string, [number, number]> = {
  Durban: [-29.8587, 31.0218],
  CapeTown: [-33.9249, 18.4241],
};

const Map = () => {
  return (
    <MapContainer
      className="crisis-map"
      center={locationMap["Durban"]}
      zoom={29}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

{
  /* <Marker position={[-33.9249, 18.4241]}>
        <Popup> This is Cape Town </Popup>
      </Marker> */
}

export default Map;
