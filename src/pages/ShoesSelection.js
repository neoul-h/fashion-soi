import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const shoes = ['shoes1.png', 'shoes2.png', 'shoes3.png']; // 신발 이미지 예시

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const ShoesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const ShoesImage = styled.img`
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

function ShoesSelection() {
  const { state } = useLocation();
  const { selectedColor, selectedTop, selectedBottom } = state || {};
  const [selectedShoes, setSelectedShoes] = useState(null);

  return (
    <Container>
      <h1>Select Shoes</h1>
      <ShoesGrid>
        {shoes.map((shoe) => (
          <ShoesImage key={shoe} src={`/assets/${shoe}`} alt={shoe} onClick={() => setSelectedShoes(shoe)} />
        ))}
      </ShoesGrid>
      <NextButton to={{ pathname: "/accessory-selection", state: { selectedColor, selectedTop, selectedBottom, selectedShoes } }}>Next</NextButton>
    </Container>
  );
}

export default ShoesSelection;