import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftSection = styled.div`
  flex: 1;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightSection = styled.div`
  flex: 1;
  padding: 20px;
  position: relative; /* 하단 고정 버튼을 위해 */
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

const StyledButton = styled.button`
  padding: 15px 30px;
  background-color: #007bff;
  color: white;
  border-radius: 10px;
  text-decoration: none;
  font-size: 18px;
  border: none;
  width: 150px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #0056b3;
  }
`;

const BackButton = styled(StyledButton)`
  background-color: #ff4d4d;

  &:hover {
    background-color: #cc0000;
  }
`;

export const GlobalLayout = ({ children, character, onBack, onNext }) => (
  <PageContainer>
    <LeftSection>{character}</LeftSection>
    <RightSection>
      {children}
      <ButtonContainer>
        <BackButton onClick={onBack}>Back</BackButton>
        <StyledButton onClick={onNext}>Next</StyledButton>
      </ButtonContainer>
    </RightSection>
  </PageContainer>
);