import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#33FFA1', '#A133FF', '#FFA133', '#33A1FF', '#A1FF33', '#FF5733', '#5733FF', '#A1FF57', '#33FFA1', '#A133FF', '#FF33A1'];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

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

function ColorSelection() {
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <Container>
      <h1>Select a Color</h1>
      <ColorGrid>
        {colors.map((color) => (
          <ColorBox key={color} color={color} onClick={() => setSelectedColor(color)} />
        ))}
      </ColorGrid>
      <NextButton to={{ pathname: "/top-selection", state: { selectedColor } }}>Next</NextButton>
    </Container>
  );
}

export default ColorSelection;