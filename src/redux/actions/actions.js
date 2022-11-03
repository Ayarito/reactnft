import {allAssets, oneAsset} from "../../config";
import axios from "axios";
import {DETAILS_STATE, MAIN_STATE} from "./type";


export const getMain = (setLoading) => async (dispatch)=>{
    const  res = await axios.get(allAssets)
    setLoading(false)
    dispatch({
        type:MAIN_STATE,
        payload:res.data.assets
    })
}


export const getDetails = (address,token,setLoading) => async (dispatch)=>{
    const  res = await axios.get(`${oneAsset}${address}/${token}`)
    setLoading(false)
    dispatch({
        type:DETAILS_STATE,
        payload:res.data
    })
}
