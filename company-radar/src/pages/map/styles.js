import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';

const primaryColor = '#3a8970';
const secundaryColor = '#FFFFFF';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const CardInfo = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex: 1;
  flex-direction: column;
  background-color: ${secundaryColor};
  width: 262px;
  height: 310px;
  border-radius: 0 0 8px 0;
  padding: 16px;

  > p {
    color: ${primaryColor};
    font-size: 16px;
    font-weight: 400;
    line-height: 14px;
  }
  > h1 {
    color: ${primaryColor};
    font-size: 16px;
    font-weight: bold;
  }
`;
export const GridContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 150px;
`;
export const Map = styled(MapContainer)`
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
`;
