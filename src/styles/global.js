import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  border: 0;
}
html, body, #root{
  height: 100%;
}

body{
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoting: antialiased !important;
  font-family: 'Roboto Condensed', sans-serif;
  background: #5C1E29;
  color: #fff;
  
}
`;
export default GlobalStyle;
