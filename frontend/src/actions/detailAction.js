import axios from 'axios';
import pino from 'pino';
import {launch_detail_url} from '../api';
import { REACT_APP_ROCKET_LAUNCH_LIVE_API_KEY} from '../apikey.js'


const logger = pino({
    level: 'info',
    timestamp: () => `,"time":${new Date().toISOString()}`
  
  });


export const loadDetail = (id) => async (dispatch) => {

    //dispatch LOADING_DETAIL to load clicked launch data
    dispatch({
        type : "LOADING_DETAIL",
    })

    const detailData = await axios.get(`${launch_detail_url(id)}&key=${process.env.REACT_APP_ROCKET_LAUNCH_LIVE_API_KEY || REACT_APP_ROCKET_LAUNCH_LIVE_API_KEY}`);
    
    dispatch({
        type: "GET_DETAIL",
        payload: {
            clicked_launch_detail: detailData.data.result[0],
        },
    });

    logger.info("Recieved detailed launch data from API")
};