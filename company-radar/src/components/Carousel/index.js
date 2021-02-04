/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import { CardContainer, GridContainer } from './styles';
import '@brainhubeu/react-carousel/lib/style.css';

export default function ConfigCarousel({ companies }) {
  return (
    <Carousel
      plugins={[
        'infinite',
        'arrows',
        {
          resolve: slidesToShowPlugin,
          options: {
            numberOfSlides: 4,
          },
        },
      ]}
    >
      <GridContainer>
        {companies.map((item) => (
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
        ))}
      </GridContainer>
    </Carousel>
  );
}
