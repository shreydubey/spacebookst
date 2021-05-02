import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        overflow-y:scroll;
        &::-webkit-scrollbar{
            width: 0.5rem; 
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgray;
        }
        &::-webkit-scrollbar-track{
            background-color: black;
        }
        @media (max-width: 1000px){
            font-size: 85%;
        }
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }
    h2{
        font-family: Montserrat, sans-serif;
        font-weight: lighter;
        font-size: 1.5rem;
    }
    h3{
        font-size: 1.25rem;
        color: #333;
        padding: 1rem  0rem;
    }
    h4{
        font-size: .85rem;
        color: #333;
    }
    h5{
        font-size: .85rem;
        color: #333;
    }
    p{
        font-size: .90rem;
        line-height: 200%;
        color: #524f4f;
    }
    a{
        text-decoration: none;
    }
    img{
        display: block;
    }
    video{
        display: block;
    }
    .modal {
        font-size: 12px;
        
    }
    .modal > .header {
        width: 100%;
        border-bottom: 1px solid gray;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        padding: 5px;
    }
    .modal > .content {
        width: 100%;
        margin: auto;
        padding: 10px 5px;
    }
    .modal > .actions {
        width: 100%;
        padding: 10px 5px;
        margin: auto;
        text-align: center;
    }
    .modal > .close {
        cursor: pointer;
    }
`

export default GlobalStyles;