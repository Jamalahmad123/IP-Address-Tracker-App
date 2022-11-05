import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
  const { addressData, isLoading } = useContext(GlobalContext);

  const { latitude, longitude, city, country_code2 } = addressData;

  const position = [latitude ? +latitude : 10.0, longitude ? +longitude : 10.0];
  return isLoading ? null : (
    <div id="map">
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>css marker</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
