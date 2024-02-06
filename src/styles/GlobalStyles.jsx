import { createGlobalStyle } from "styled-components";
import "@fontsource/sora";
import "@fontsource/akaya-telivigala";

const GlobalStyles = createGlobalStyle`
    *, ::before, ::after{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    html, body{
        font-family: Rubik, sans-serif;
        overflow-x: hidden;
    }
    
    h1,h2,h3,h4{
        margin: 0;
        padding: 0;
    }
    a{
        color: inherit;
        text-decoration: none;
    }

    ul{
        list-style: none;
    }

    .mobile_nav_open {
    @media screen and (max-width: 64em) {
   overflow: hidden;
}

  }

`;

export default GlobalStyles;
