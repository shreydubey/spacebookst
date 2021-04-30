import React from 'react';
import {Link, useLocation} from 'react-router-dom';
//style and animation
import styled from 'styled-components';
import {motion} from 'framer-motion';



const Nav = () => {
    const {pathname} = useLocation();
    console.log(pathname);
    return(
        <StyledNav>
             <h1><Link to="/" id='logo'>SpaceBook</Link></h1>
             <ul>
                 <li>
                     <Link to="/home">Home</Link>
                     <Line  
                         transition={{ duration: 0.25 }}
                         initial={{ width: "0%" }}
                         animate={{ width: pathname === "/home" ? "60%" : "0%" }}
                     />
                 </li>
                 <li>
                     <Link to="/home/stats">Stats</Link>
                     <Line  
                         transition={{ duration: 0.25 }}
                         initial={{ width: "0%" }}
                         animate={{ width: pathname === "/home/stats" ? "60%" : "0%" , left: "55%"}}
                     />
                 </li>
                {/*} <li>
                     <Link to="/bookmarks">Bookmarks</Link>
                     <Line  
                         transition={{ duration: 0.25 }}
                         initial={{ width: "0%" }}
                         animate={{ width: pathname === "/bookmarks" ? "70%" : "0%" , left: "35%"}}
                     />
    </li>*/}
                 <li>
                     <Link to="/shop">Shop</Link>
                     <Line  
                         transition={{ duration: 0.25 }}
                         initial={{ width: "0%" }}
                         animate={{ width: pathname === "/shop" ? "60%" : "0%" , left: "55%"}}
                     />
                 </li>
             </ul>
        </StyledNav>
    );
}

//styled
const StyledNav = styled(motion.nav)`
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
    #logo{
        font-family: 'Montserrat',sans-serif;
        font-weight: bold;
        font-size: 1.5rem;
    }
    h1{
        font-family: 'Montserrat',sans-serif;
        font-weight: bold;
        font-size: 1.75rem;
    }
    h2{
        font-family: 'Montserrat',sans-serif;
        font-weight: lighter;
        font-size: 1.5rem;
    }
    h3{
        font-size: 1rem;
        color: #333;
        padding: 1rem  0rem;
    }
    p{
        font-size: .90rem;
        line-height: 200%;
        color: #524f4f;
    }
  
    min-height: 10vh;
    z-index: 20;
    display: flex;
    margin: auto;
    justify-content: space-between;
    background-color: black;
    align-items: center;
    padding:  0rem 3rem;
    position: sticky;
    top: 0;
    a{
        color: white;
        text-decoration: none;
    }
    ul{
        display: flex;
        list-style: none;
    }
    li{
        padding-left: 3rem;
        position: relative;
        font-size: medium;
    }
    @media (max-width: 700px)
    {
        flex-direction: column;
        padding: 1rem 0rem;
        ul{
            padding-top: 1rem;
            padding-bottom: .5rem;
            justify-content: space-around;
            width: 100%;
            li{
                padding: 0;
            }
        }
    }
 
`

const Line = styled(motion.div)`
    width: 0%;
    height: 0.2rem;
    position: absolute;
    background: white;
    bottom: -30%;
    left: 50%;

`


export default Nav;