import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalLayout } from '../GlobalLayout'; 

const shoes = ['shoes1.png', 'shoes2.png', 'shoes3.png']; 

const ShoesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const ShoesImage = styled.img`
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

function ShoesSelection() {
  const navigate = useNavigate();
  const [selectedShoes, setSelectedShoes] = useState(null);

  return (
    <GlobalLayout character={<img src="/assets/character.png" alt="Character" />}>
      <h1>Select Shoes</h1>
      <ShoesGrid>
        {shoes.map((shoe) => (
          <ShoesImage
            key={shoe}
            src={`/assets/${shoe}`}
            alt={shoe}
            isSelected={selectedShoes === shoe}
            onClick={() => setSelectedShoes(shoe)}
          />
        ))}
      </ShoesGrid>
      <NextButton to="/accessory-selection">Next</NextButton>
      <BackButton onClick={() => navigate(-1)}>Back</BackButton>
    </GlobalLayout>
  );
}

export default ShoesSelection;