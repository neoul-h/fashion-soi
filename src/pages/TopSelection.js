import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const tops = ['shirt1.png', 'shirt2.png', 'shirt3.png']; // 예시 이미지

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const TopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const TopImage = styled.img`
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

function TopSelection() {
  const { state } = useLocation();
  const { selectedColor } = state || {};
  const [selectedTop, setSelectedTop] = useState(null);

  return (
    <Container>
      <h1>Select a Top</h1>
      <TopGrid>
        {tops.map((top) => (
          <TopImage key={top} src={`/assets/${top}`} alt={top} onClick={() => setSelectedTop(top)} />
        ))}
      </TopGrid>
      <NextButton to={{ pathname: "/bottom-selection", state: { selectedColor, selectedTop } }}>Next</NextButton>
    </Container>
  );
}

export default TopSelection;