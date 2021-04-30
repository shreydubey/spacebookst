import React from 'react';
import styled  from 'styled-components';
import {motion} from 'framer-motion';
//import link
import {useHistory} from 'react-router-dom';

//import video
import Starship from '../video/starship.mp4'; 

const Explore = () => {
    const history = useHistory();
    const goHome = () =>{
        history.push('/home');
    }

    return(
        <ExploreView>
            <video  autoPlay loop muted>
                <source src={Starship} type="video/mp4"/>
            </video>
            <button onClick={goHome}>Explore</button>
        </ExploreView>
    );
}

//styled
const ExploreView = styled(motion.div)`
    max-height: 85vh;
    video{
        position: relative;
        object-fit: cover;
        z-index : 2;
        width: 100%;
        height: 90vh;
        
    }
    button{
        position: absolute;
        top: 85%;
        left: 3rem;
        margin: 10rem;
        padding: 0.5em 3em;
        border: 0.3rem solid black;
        margin: 0 0.3rem 0.3rem 0;
        font-size: 24px;
        border-radius: 0.1rem;
        box-sizing: border-box;
        font-weight: bold;
        color: black;
        background-color: transparent;
        text-align:center;
        cursor: pointer;
        z-index: 4;
        transition: all 0.2s;
        &:hover{
        color: white;
        font-weight: bold;
        background-color: black;
        border-color: black;
        }    
    }   

`

export default Explore;
