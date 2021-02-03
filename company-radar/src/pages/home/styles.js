import styled, { keyframes, css } from 'styled-components';

const primaryColor = '#3a8970';
const secundaryColor = '#F6F6F6';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0px 0 0px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: normal;
  margin-left: 24px;
  color: ${primaryColor};
`;
export const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  border: solid 2px ${(props) => (props.error ? '#ff6b6b' : primaryColor)};
  font-size: 20px;
  height: 60px;
  margin-right: 16px;
  padding: 8px;
  border-radius: 4px;
  background-color: ${secundaryColor};
  flex: 1;
  transition: border 0.25s ease-out;
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg)
  }
`;
export const Button = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  height: 50px;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  background-color: ${primaryColor};
  border-radius: 25px;
  border: none;
  padding: 8px 24px;
  color: ${secundaryColor};

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s infinite;
      }
    `}
`;
export const ResultsContainer = styled.div`
  display: flex;
  flex: 1;
  background: linear-gradient(#388669, #459a9e);
  margin-top: 32px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 64px;
`;
export const EmptyResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > img {
    height: 20%;
  }
  > p {
    font-size: 20px;
    color: ${secundaryColor};
  }
`;
