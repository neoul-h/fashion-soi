import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const accessories = ['accessory1.png', 'accessory2.png', 'accessory3.png']; // 악세서리 이미지 예시

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const AccessoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const AccessoryImage = styled.img`
  width: 100px;
  height: 150px;
  cursor: pointer;
`;

const NextButton = styled(Link)`
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

function AccessorySelection() {
  const { state } = useLocation();
  const { selectedColor, selectedTop, selectedBottom, selectedShoes } = state || {};
  const [selectedAccessory, setSelectedAccessory] = useState(null);

  return (
    <Container>
      <h1>Select an Accessory</h1>
      <AccessoryGrid>
        {accessories.map((accessory) => (
          <AccessoryImage key={accessory} src={`/assets/${accessory}`} alt={accessory} onClick={() => setSelectedAccessory(accessory)} />
        ))}
      </AccessoryGrid>
      <NextButton to={{ pathname: "/finish", state: { selectedColor, selectedTop, selectedBottom, selectedShoes, selectedAccessory } }}>Finish</NextButton>
    </Container>
  );
}

export default AccessorySelection;