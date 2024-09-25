import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalLayout } from '../GlobalLayout'; 

const tops = ['shirt1.png', 'shirt2.png', 'shirt3.png']; 

const TopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const TopImage = styled.img`
  width: 100px;
  height: 150px;
  cursor: pointer;
  border: ${(props) => (props.isSelected ? '5px solid #007bff' : '2px solid #ccc')};
  box-shadow: ${(props) => (props.isSelected ? '0px 0px 10px rgba(0, 123, 255, 0.5)' : 'none')};
`;

function TopSelection() {
  const navigate = useNavigate();
  const [selectedTop, setSelectedTop] = useState(null);

  return (
    <GlobalLayout
      character={<img src="/assets/character.png" alt="Character" />}
      onBack={() => navigate(-1)}
      onNext={() => navigate('/bottom-selection')}
    >
      <h1>Select a Top</h1>
      <TopGrid>
        {tops.map((top) => (
          <TopImage
            key={top}
            src={`/assets/${top}`}
            isSelected={selectedTop === top}
            onClick={() => setSelectedTop(top)}
          />
        ))}
      </TopGrid>
    </GlobalLayout>
  );
}

export default TopSelection;