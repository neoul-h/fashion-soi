import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Character = styled.div`
  width: 300px;
  height: 500px;
  background-color: ${(props) => props.color};
  background-image: url(${(props) => props.top}), url(${(props) => props.bottom}), url(${(props) => props.shoes}), url(${(props) => props.accessory});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const RestartButton = styled(Link)`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    background-color: #0056b3;
  }
`;

function FinishPage() {
  const { state } = useLocation();
  const { selectedColor, selectedTop, selectedBottom, selectedShoes, selectedAccessory } = state || {};

  return (
    <Container>
      <h1>Your Fashion Selection is Complete!</h1>
      <Character
        color={selectedColor}
        top={`/assets/${selectedTop}`}
        bottom={`/assets/${selectedBottom}`}
        shoes={`/assets/${selectedShoes}`}
        accessory={`/assets/${selectedAccessory}`}
      />
      <RestartButton to="/">Restart</RestartButton>
    </Container>
  );
}

export default FinishPage;