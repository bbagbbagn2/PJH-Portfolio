import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    @media (min-width: 1601px) {
      font-size: 1.013rem;
    }
  }

  body {
    /* Positioning */
    margin: 0;
    padding: 0;

    /*Demensions */
    width: 100%;
    height: 100%;

    /* Styling */
    color: #0B2B40;
    background-color: #fff;
    font: inherit;
    font-weight: normal;
    line-height: inherit;
    -webkit-font-smoothing: inherit;
  }

  #homepage {
    /* Positioning */
    position: relative;

    /* Dimensions */
    width: 100%;

    /* Styling */
    font-family: "Noto Sans KR", "Open Sans", sans-serif;
    line-height: 1.15;
    text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;

    @media (max-width: 700px) {
        font-size: 0.562rem;
    }
  }

  #project {
    font-size: 20px;
    font-family: "Noto Sans KR", "Open Sans", sans-serif;
    line-height: 1.7;
    scroll-behavior: smooth;

    @media (max-width: 650px) {
        font-size: 17px;
      }
    }
  
  #app {
    position: relative;
  }

  main {
    outline: none;
    display: block;

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

  button, [type='button'], [type='reset'], [type='submit'] {
    -webkit-appearance: button;
  }

  input, button, textarea {
    border-radius: 0;
  }

  button, [role='button'] input[type='submit'] {
    margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;
  }

  button, select {
    text-transform: none;
  }

  button, input {
    overflow: visible;
  }

  button, input, optgroup, select, textarea {
    margin: 0;
    font-size: 100%;
    line-height: 1.15;
  }

  ul, ol, li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  @media (max-width: 700px) {
    html, html body {
      margin: 0;
      padding: 0;
      height: 100%;
      overscroll-behavior: none;
    }
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
