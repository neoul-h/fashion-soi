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
`;

export const GlobalLayout = ({ children, character }) => (
  <PageContainer>
    <LeftSection>{character}</LeftSection>
    <RightSection>{children}</RightSection>
  </PageContainer>
);