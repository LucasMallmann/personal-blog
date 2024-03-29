import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #F0F2F5 ;
    -webkit-font-smoothing: antialiased
  }
  body, input, button {
    font: 16px "Open Sans", sans-serif;
  }
  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
