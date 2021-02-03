/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { CardContainer, GridContainer } from './styles';

export default function ConfigCarousel({ companies }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {companies.map((item) => (
        <Carousel.Item>
          <GridContainer>
            <Link to={`/map/${item.name}`}>
              <CardContainer>
                <h1>{item.name}</h1>
                <p>Razão social</p>
                <h1>{item.cnpj}</h1>
                <p>CNPJ</p>
                <h1>{`${item.city}, ${item.street}`}</h1>
                <p>Endereço</p>
              </CardContainer>
            </Link>
            <CardContainer>
              <h1>{item.name}</h1>
              <p>Razão social</p>
              <h1>{item.cnpj}</h1>
              <p>CNPJ</p>
              <h1>{`${item.city}, ${item.street}`}</h1>
              <p>Endereço</p>
            </CardContainer>
            <CardContainer>
              <h1>{item.name}</h1>
              <p>Razão social</p>
              <h1>{item.cnpj}</h1>
              <p>CNPJ</p>
              <h1>{`${item.city}, ${item.street}`}</h1>
              <p>Endereço</p>
            </CardContainer>
            <CardContainer>
              <h1>{item.name}</h1>
              <p>Razão social</p>
              <h1>{item.cnpj}</h1>
              <p>CNPJ</p>
              <h1>{`${item.city}, ${item.street}`}</h1>
              <p>Endereço</p>
            </CardContainer>
          </GridContainer>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
