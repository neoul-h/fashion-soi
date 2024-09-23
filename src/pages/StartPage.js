import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const StartButton = styled.button`
  padding: 20px;
  font-size: 24px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function StartPage() {
  return (
    <Container>
      <Link to="/color-selection">
        <StartButton>START</StartButton>
      </Link>
    </Container>
  );
}

export default StartPage;