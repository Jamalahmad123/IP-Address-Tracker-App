import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

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
          <Popup>
            {city}, {country_code2}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
