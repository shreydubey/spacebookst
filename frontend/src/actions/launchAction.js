import axios from 'axios';
import pino from 'pino'
import {upcoming_launch_url,searched_url1,searched_url2} from '../api';
import {recent_launch_reversing_required_url} from '../api';
import { REACT_APP_ROCKET_LAUNCH_LIVE_API_KEY} from '../apikey'


const logger = pino({
    level: 'info',
    timestamp: () => `,"time":${new Date().toISOString()}`
  
  });

//action creator 

//for upcoming launches
export const loadUpcomingLaunch = () => async (dispatch) =>{
    // fetch axios
    const upcomingLaunchData = await axios.get(`${upcoming_launch_url()}+key=${process.env.REACT_APP_ROCKET_LAUNCH_LIVE_API_KEY || REACT_APP_ROCKET_LAUNCH_LIVE_API_KEY}`);

    /*
    //console.log(upcomingLaunchData.data.result);
    const upcomingProviderNames = upcomingLaunchData.data.result.map(eachLaunch => eachLaunch.provider.name.replace(/[^a-zA-Z0-9 ]/g, ' '));
    //console.log(upcomingProviderNames);
    const upcomingMissionNames = upcomingLaunchData.data.result.map(eachLaunch => eachLaunch.missions[0].name.replace(/[^a-zA-Z0-9 ]/g, ' '));
    //console.log(upcomingMissionNames);
    const upcomingVechileNames = upcomingLaunchData.data.result.map(eachLaunch => eachLaunch.vehicle.name.replace(/[^a-zA-Z0-9 ]/g, ' '));
    //console.log(upcomingVechileNames);
    const names1 = upcomingProviderNames.map((e,i) => e +' '+ upcomingVechileNames[i]);
    //console.log(names1);
    const  names2 = names1.map((e,i) => e +' '+ upcomingMissionNames[i]);
    //console.log(names2);
    //getting upcoming images
    */
    
    dispatch({
        type : "UPCOMING",
        payload : {
            upcoming : upcomingLaunchData.data.result,

        }
    });

    logger.info("Recieved upcoming launch data from API")
}

//for recent launches
export const loadRecentLaunch = () => async (dispatch) =>{
    // fetch axios
    const recentLaunchData = await axios.get(`${recent_launch_reversing_required_url()}&key=${process.env.REACT_APP_ROCKET_LAUNCH_LIVE_API_KEY || REACT_APP_ROCKET_LAUNCH_LIVE_API_KEY}`);
    const actualRecentLaunchData = recentLaunchData.data.result.reverse();
    console.log( actualRecentLaunchData);
    const recentLaunchDataIs = [];
    let len = actualRecentLaunchData.length;
    for(let i = 0;i < len;i++){
        let g1 = new Date(actualRecentLaunchData[i].win_open);
        let g2 = new Date();
        if ((actualRecentLaunchData[i].win_open !== null) && ((actualRecentLaunchData[i].result !== -1)|| (g1.getTime() < g2.getTime()))){
        recentLaunchDataIs.push(actualRecentLaunchData[i]);
        }
    }
    //console.log(recentLaunchDataIs);

    dispatch({
        type : "RECENT",
        payload : {
            recent : recentLaunchDataIs,
        }
    });

    logger.info("Recieved recent launch data from API")
}


//for searched launches
export const loadSearchedLaunch = (text) => async (dispatch) =>{
    // fetch axios
    const searchedLaunchData1 = await axios.get(`${searched_url1(text)}&key=${process.env.REACT_APP_ROCKET_LAUNCH_LIVE_API_KEY || REACT_APP_ROCKET_LAUNCH_LIVE_API_KEY}`);
    const searchedLaunchData2 = await axios.get(`${searched_url2(text)}&key=${process.env.REACT_APP_ROCKET_LAUNCH_LIVE_API_KEY || REACT_APP_ROCKET_LAUNCH_LIVE_API_KEY}`);
    console.log(searchedLaunchData2);
    const resultSearched = [...searchedLaunchData1.data.result, ...searchedLaunchData2.data.result];
    dispatch({
        type : "SEARCHED",
        payload : {
            searched : resultSearched,
        }
    });

    logger.info("Recieved searched launch data from API")
}