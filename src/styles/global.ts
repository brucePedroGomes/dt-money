import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #E5E5E5
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box
}


html {
  @media (max-width: 1080px) {
    font-size: 93.75%; // 15
  }

  @media (max-width: 720px) {
    font-size: 87.5%; // 14
  }
}

body {
    background: var(--background);    
}

`;
