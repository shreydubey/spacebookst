const initialState = {
    upcoming : [],
    searched : [],
    recent : [],
}

const launchReducer = (state=initialState,action) => {
    switch(action.type){
        case "UPCOMING":
            return{
                ...state,
                 upcoming : action.payload.upcoming     
            }
        case "RECENT":
            return{
                ...state,
                recent : action.payload.recent
            }  
        case "SEARCHED":
            return{
                ...state,
                searched : action.payload.searched
            }  
        case "CLEAR_SEARCHED":
            return{
                ...state,  
                searched : [],
            }              
        default:
            return {...state}    
    }

}

export default launchReducer;