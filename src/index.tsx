import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  #project {
    font-size: 20px;
    line-height: 1.7;
    scroll-behavior: smooth;
  }
  #app {
    position: relative;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  html {
    font-size: 0.9rem;

    @media (max-width: 700px) {
      font-size: 0.562rem;
    }
    
    @media (min-width: 1601px) {
      font-size: 1.013rem;
    }

    @media (min-width: 701px) and (max-width: 1600px) {
      font-size: 1vw;
    }
  }

  html {
    position: relative;
    width: 100%;
    font-family: "Noto Sans KR", "Open Sans", sans-serif;
    text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font: inherit;
    font-weight: normal;
    line-height: inherit;
    -webkit-font-smoothing: inherit;
  }

  body {
    color: #0B2B40;
    background-color: #fff;
  }

  main {
    outline: none;
    display: block;

    @media screen and (min-width: 701px) {
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

  @media (min-width: 701px) {
    html, body {
      touch-action: none;
    }
  }

  @media (min-width: 701px) and (max-width: 1600px) {
    html {
      font-size: 1vw;
    }
  }

  ::selection {
    background-color: rgba(111, 132, 230, .3);
  }

`;

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <GlobalStyle />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
