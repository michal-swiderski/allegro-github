import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      font-family: 'Open Sans', sans-serif;
  }
  
  html {
      font-size: 62.5%;
  }
  
  
  body {
    font-size: 1.6rem;
    margin: 0;
    background-color: ${props => props.theme.colors.background};
  }
  
  .App {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 ${props => props.theme.spacing.padding}px;
  }
`;

export default GlobalStyle;
