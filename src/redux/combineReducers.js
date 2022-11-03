import {combineReducers} from "redux";
import main from './reducers/mainReducer'
import details from './reducers/detailsReducer'


const rootReducer = combineReducers({
        main,
        details
    }
)
export default rootReducer