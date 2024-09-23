import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
  }

  h1 {
    font-size: 2rem;
    color: #333;
  }

  button {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.25rem;
    }

    button {
      font-size: 1rem;
    }
  }
`;

export default GlobalStyles;