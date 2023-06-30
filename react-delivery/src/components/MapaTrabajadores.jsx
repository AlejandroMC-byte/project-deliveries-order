import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, CircleMarker, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import 'leaflet/dist/leaflet';
import './Map.css'
import Header from './Header'

const MapaTrabajadores = ()=>{
  function LocationMarker() {
  const [position, setPosition] = useState(null)
  const redOptions = { color: 'red' }
  // const fillBlueOptions = { fillColor: 'blue' }
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <>
    <Marker position={position}>
      <Popup>¡AQUI ESTAS!</Popup>
    </Marker>
  </>
  )
}
  return (
    <>
    <Header />
    <div className='container-map'>
      <br /><br />
      <MapContainer
        center={{ lat: 51.505, lng: -0.09 }}
        zoom={14.5}
        scrollWheelZoom={false}
        style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '350px', width: '75%'}}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle center={[3.399730,-76.531300]} pathOptions={{ fillColor: 'blue' }} radius={200} />
        <LocationMarker />
      </MapContainer>
      
    </div>
    <br />
      <h1>¡DA CLICK EN EL MAPA PARA VER TU UBICACION ACTUAL!</h1>
    </>
      
  );
}

export default MapaTrabajadores