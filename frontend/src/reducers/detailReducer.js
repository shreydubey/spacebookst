const initialState = {
    clicked_launch_detail : {media: []},
    isLoading: true,
    
}

const detailReducer = (state=initialState,action) => {
    switch(action.type){
        case "GET_DETAIL":
            return{
                ...state,
                clicked_launch_detail : action.payload.clicked_launch_detail,
                isLoading : false,   
            } 
        case "LOADING_DETAIL"  :
            return{
                ...state,
                isLoading : true,
            }
        default:
            return {...state}    
    }

}

export default detailReducer;