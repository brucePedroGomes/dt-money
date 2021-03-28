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

body {
    background: var(--background);    
}

`;
