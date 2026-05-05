import { MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
function Map() {
    return (
        <MapContainer
                center={[30.0444, 31.2357]}
                zoom={13}
                style={{ height: '400px', width: '70%' }}
            >
            <TileLayer
                url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            />

        </MapContainer>
    );
}
export default Map;