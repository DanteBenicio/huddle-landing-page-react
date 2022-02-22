import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
  }
`;
