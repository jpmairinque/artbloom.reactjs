import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


*{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    ::-webkit-scrollbar {
    width: 10px;
    } 
    ::-webkit-scrollbar-track {
    background-color:#b5b5a7;
    border-radius: 40px;
    }
    ::-webkit-scrollbar-thumb {
      background: #3d3d38;
      border-radius: 40px;
    }
  }

nav{
    font-family: 'Quicksand', sans-serif !important;
}


body,html {    
background:linear-gradient(to right, #dad299, #b0dab9);
height: 100%;

}

#root{
  height: 100vh;
  
}
`

export default GlobalStyle;