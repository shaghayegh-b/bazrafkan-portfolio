import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import LocationMarker from "./LocationMarker"; // اگر جدا ساختی

export default function LocationMap({ onLocationChange }) {
  return (
    <MapContainer
      center={[35.6997, 51.3381]} // تهران
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker onSelect={onLocationChange} />
    </MapContainer>
  );
}
