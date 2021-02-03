import styled from 'styled-components';

const primaryColor = '#3a8970';
const secundaryColor = '#FFFFFF';

export const CardContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${secundaryColor};
  width: 262px;
  height: 240px;
  border-radius: 8px;
  padding: 16px;
  margin: 0 16px;
  > p {
    color: ${primaryColor};
    font-size: 16px;
    font-weight: 400;
    line-height: 14px;
  }
  > h1 {
    margin-top: 16px;
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
