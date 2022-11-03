import {MAIN_STATE} from "../actions/type";

const initialState = {
    mainState:[]
}


const mainReducer = (state = initialState,action)=>{
    const {type,payload} = action
    switch (type){
        case MAIN_STATE:
            return {...state,mainState:payload}
        default:
            return state

    }
}
export default mainReducer