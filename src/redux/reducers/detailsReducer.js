import {DETAILS_STATE} from "../actions/type";

const initialState = {
    detailsState:{}
}


const mainReducer = (state = initialState,action)=>{
    const {type,payload} = action
    switch (type){
        case DETAILS_STATE:
            return {...state,detailsState:payload}
        default:
            return state

    }
}
export default mainReducer