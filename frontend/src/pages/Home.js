import React, {useEffect} from 'react';
//redux
import {useDispatch,useSelector} from 'react-redux';
import {loadUpcomingLaunch,loadRecentLaunch} from '../actions/launchAction';
import {useLocation} from "react-router-dom";
//style and animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
//components
//import Explore from '../components/Explore';
import Search from '../components/Search';
import Launch from '../components/Launch';
//import { upcoming_launch_url } from '../api';
import LaunchDetail from '../components/LaunchDetail';
//image
//import isro from '../img/isro_logo.jpg';
//import spacex from '../img/spacex_logo.jpg';

//const requestImage = require.context('../img', true, /.jpg$/);
//console.log(requestImage);

const Home = () =>{
    //current location
    const location = useLocation();
    const pathId = location.pathname.split('/')[3];
    console.log(pathId);

    //fetch launches both upcoming and recent
    //new Promise(r => setTimeout(r, 500));
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(loadUpcomingLaunch());
        dispatch(loadRecentLaunch());
    },[dispatch])

    //get data from redux
    const allLaunches = useSelector(state => state.launch);
    //const upcoming = allLaunches.upcoming.slice(0, 10);
    const upcoming = allLaunches.upcoming.slice(0, 20);
    const recent = allLaunches.recent;
    const searched = allLaunches.searched;
    //console.log(upcoming);
    //console.log(recent);

    return(
        <>
        <Search />
        <LauchList>
        {pathId && <LaunchDetail />}
                {searched.length > 0 ? (
                <>    
                <h2>Searched Result</h2>
                <Result>
                <Launches>
                {searched.map((item) => (
                
                    <Launch 
                    name={item.name} 
                    date={item.date_str} 
                    id={item.id} 
                    key={item.id}
                    //image={item.provider.slug === 'spacex' ? spacex : isro}
                    image={require(`../img/${item.provider.slug}_logo.jpg`).default}
                    />
                ))}        
                </Launches>
                </Result>
                </>
                ) : ''//<p id='notFound'><span>Not Found !!! </span>Try to be more specific in one word only.</p>
               
            }
            <h2>Upcoming Spaceflight Launches</h2>
            <Launches>
                {upcoming.map((item) => (
                    <Launch 
                    name={item.name} 
                    date={item.date_str} 
                    id={item.id} 
                    key={item.id}
                    //image={item.provider.slug === 'spacex' ? spacex : isro}
                    image={require(`../img/${item.provider.slug}_logo.jpg`).default}
                    />
                ))}        
            </Launches>
            <h2>Recent Spaceflight Launches</h2>
            <Launches>
                {recent.map((item) => (
                
                    <Launch 
                    name={item.name} 
                    date={item.date_str} 
                    id={item.id} 
                    key={item.id}
                    //image={spacex}
                    image={require(`../img/${item.provider.slug}_logo.jpg`).default}
                    />
                ))}        
            </Launches>
            <br/>
            <br/>
        </LauchList>
        </>
    );
}

//styled components
const LauchList = styled(motion.div)`
    padding: 0rem 3rem;
    h2{
        padding: 5rem 0rem;
        font-weight: bold;
        font-size: 2rem;
        font-family: Montserrat, sans-serif;
    }

`

const Launches = styled(motion.div)`
    a{
        text-decoration: none;
    }
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    grid-column-gap: 2rem;
    grid-row-gap : 2rem;
    @media (max-width: 1500px){
            min-height: 30vh;
        }
`

const Result = styled(motion.div)`
    p{
        text-align: center;
    }
`

export default Home;