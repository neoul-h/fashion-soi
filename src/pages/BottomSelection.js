import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const bottoms = ['pants1.png', 'pants2.png', 'pants3.png']; // 하의 이미지 예시

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const BottomGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const BottomImage = styled.img`
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

function BottomSelection() {
  const { state } = useLocation();
  const { selectedColor, selectedTop } = state || {};
  const [selectedBottom, setSelectedBottom] = useState(null);

  return (
    <Container>
      <h1>Select a Bottom</h1>
      <BottomGrid>
        {bottoms.map((bottom) => (
          <BottomImage key={bottom} src={`/assets/${bottom}`} alt={bottom} onClick={() => setSelectedBottom(bottom)} />
        ))}
      </BottomGrid>
      <NextButton to={{ pathname: "/shoes-selection", state: { selectedColor, selectedTop, selectedBottom } }}>Next</NextButton>
    </Container>
  );
}

export default BottomSelection;