import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalLayout } from '../GlobalLayout'; 

const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#33FFA1', '#A133FF', '#FFA133', '#33A1FF', '#A1FF33', '#FF5733'];

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;

const ColorBox = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.color};
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

function ColorSelection() {
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <GlobalLayout character={<img src="/assets/character.png" alt="Character" />}>
      <h1>Select a Color</h1>
      <ColorGrid>
        {colors.map((color) => (
          <ColorBox
            key={color}
            color={color}
            isSelected={selectedColor === color}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </ColorGrid>
      <NextButton to="/top-selection">Next</NextButton>
      <BackButton onClick={() => navigate(-1)}>Back</BackButton>
    </GlobalLayout>
  );
}

export default ColorSelection;