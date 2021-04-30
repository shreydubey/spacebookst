import {combineReducers} from 'redux';

import launchReducer from './launchReducer';
import detailReducer from './detailReducer';

const rootReducer = combineReducers({
    launch : launchReducer,
    clicked_launch_detail: detailReducer,
});

export default rootReducer; 