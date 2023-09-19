import {createGlobalStyle} from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Montserrat', Helvetica, sans-serif;
    }

    a {
      text-decoration: none;
    }
    
    li {
      list-style: none;
    }

    body, #root  {
      position: relative;
      //width: 89.33%;
      min-width: 375px;
      max-width: 1440px;
      margin: 0 auto;
      padding: 0;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }

    button {
      background: none;
      border: none;
      padding: 0;
      margin: 0;
      outline: none;
      
      & svg {
        fill: #FFFFFF;
        //background-color: #FF6060;
        
      }
    }
    
    

    
`

function GlobalStyle() {

    return <StyledGlobalStyle />
}

export default GlobalStyle
