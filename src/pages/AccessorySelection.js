import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalLayout } from '../GlobalLayout'; 

const accessories = ['accessory1.png', 'accessory2.png', 'accessory3.png']; 

const AccessoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const AccessoryImage = styled.img`
  width: 100px;
  height: 150px;
  cursor: pointer;
  border: ${(props) => (props.isSelected ? '5px solid #007bff' : '2px solid #ccc')};
  box-shadow: ${(props) => (props.isSelected ? '0px 0px 10px rgba(0, 123, 255, 0.5)' : 'none')};
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

const BackButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  background-color: #ff4d4d;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #cc0000;
  }
`;

function AccessorySelection() {
  const navigate = useNavigate();
  const [selectedAccessory, setSelectedAccessory] = useState(null);

  return (
    <GlobalLayout character={<img src="/assets/character.png" alt="Character" />}>
      <h1>Select an Accessory</h1>
      <AccessoryGrid>
        {accessories.map((accessory) => (
          <AccessoryImage
            key={accessory}
            src={`/assets/${accessory}`}
            alt={accessory}
            isSelected={selectedAccessory === accessory}
            onClick={() => setSelectedAccessory(accessory)}
          />
        ))}
      </AccessoryGrid>
      <NextButton to="/finish">Finish</NextButton>
      <BackButton onClick={() => navigate(-1)}>Back</BackButton>
    </GlobalLayout>
  );
}

export default AccessorySelection;