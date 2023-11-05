import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  html {
    position: relative;
    width: 100%;
    font-size: 0.9rem;
    line-height: 1.15;
    text-size-adjust: 100%;

    @media (min-width: 701px) {
      touch-action: none;
    }

    @media (min-width: 701px) and (max-width: 1600px) {
      font-size: 1vw;
    }
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: #F9F9F9;
    font-weight: normal;
    line-height: inherit;
    -webkit-font-smoothing: inherit;
  }

  main {
    display: block;
    outline: none;

    @media (min-width: 701px) {
      touch-action: none;
      scroll-snap-type: y mandatory;
    }
  }

  a {
    background-color: transparent;
    text-decoration: none;
    transition-property: opacity, color, background-color, transform, border;
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
    padding: 0;
    line-height: 1.15;
  }

  button {
    border: none;
    background: #FFFFFF;
  }

  ul, ol, li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
