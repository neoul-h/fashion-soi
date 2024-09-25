import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalLayout } from '../GlobalLayout'; 

const colors = [
  { color: '#000000', label: '검정' },
  { color: '#00D8FF', label: '하늘' },
  { color: '#FF0000', label: '빨강' },
  { color: '#FFB400', label: '노랑' },
  { color: '#0100FF', label: '파랑' },
  { color: '#FF5E00', label: '주황' },
  { color: '#FFFFFF', label: '하양' },
  { color: '#1DDB16', label: '초록' },
  { color: '#FF00DD', label: '분홍' },
  { color: '#5F00FF', label: '보라' },
];

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

function ColorSelection() {
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <GlobalLayout
      character={<img src="/assets/character.png" alt="Character" />}
      onBack={() => navigate(-1)}
      onNext={() => navigate('/top-selection')}
    >
      <h1>Select a Color</h1>
      <ColorGrid>
        {colors.map(({ color, label }) => (
          <ColorBox
            key={color}
            color={color}
            isSelected={selectedColor === color}
            onClick={() => setSelectedColor(color)}
            title={label}  // 색상 이름 표시
          />
        ))}
      </ColorGrid>
    </GlobalLayout>
  );
}

export default ColorSelection;