import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import Navbar from './components/Navbar';
import { GlobalStyle } from './styles/global-styles';
import { theme } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Navbar />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
