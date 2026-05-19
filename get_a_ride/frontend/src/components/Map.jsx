import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import './Map.css';

function LocationPicker({ pointA, pointB, setPointA, setPointB }) {
    useMapEvents({
        click(e) {
            if (!pointA) {
                setPointA(e.latlng);
            } else if (!pointB) {
                setPointB(e.latlng);
            }
        }
    });
    return null;
}

function Map({pointA, pointB, setPointA, setPointB}) {

    return (
        
        <MapContainer
            center={[30.0444, 31.2357]}
            zoom={13}
        className='map-container'>
            <TileLayer
                url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            />
            <LocationPicker
                pointA={pointA}
                pointB={pointB}
                setPointA={setPointA}
                setPointB={setPointB}
            />
            {pointA && (
                <Marker position={pointA}>
                    <Popup>Point A</Popup>
                </Marker>
            )}
            {pointB && (
                <Marker position={pointB}>
                    <Popup>Point B</Popup>
                </Marker>
            )}
        </MapContainer>
    );
}

export default Map;