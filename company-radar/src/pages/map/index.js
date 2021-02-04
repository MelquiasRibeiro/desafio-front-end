/* eslint-disable react/prop-types */
import React from 'react';
import { TileLayer, Marker, Popup } from 'react-leaflet';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container, CardInfo, Map } from './styles';
import 'leaflet/dist/leaflet.css';
import './Map.css';

export default function LocationMap({ match }) {
  const position = [-2.4899638, -44.1815166];
  const state = {
    lat: -2.5558978,
    lng: -44.3104706,
    zoom: 17,
  };

  return (
    <Container>
      <Map center={position} zoom={state.zoom}>
        <TileLayer
          maxZoom="20"
          subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
          url="http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
      <CardInfo>
        <Link to="/" />
        <FaArrowCircleLeft size={32} color=" #3a8970" />
        <h1>{decodeURIComponent(match.params.name)}</h1>
        <p>Razão social</p>
        <h1>{decodeURIComponent(match.params.cnpj)}</h1>
        <p>CNPJ</p>
        <h1>{match.params.location}</h1>
        <p>Endereço</p>
      </CardInfo>
    </Container>
  );
}
