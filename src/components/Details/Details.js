import React, {useEffect, useState} from 'react';
import './Details.css'
import {useNavigate, useParams} from "react-router-dom";
import DetailsArticle from "./DetailsArticle/DetailsArticle";
import {useDispatch,useSelector} from "react-redux";
import {getDetails} from "../../redux/actions/actions";

const Details = () => {

    const {address,token} = useParams()
    const [loading,setLoading] = useState(true)
    const dispatch = useDispatch()
    const {detailsState} = useSelector(state=>state.details)


    const navigate=useNavigate()

    console.log(detailsState)

    const navigateToMain = () =>{
        navigate('/')
    }

    useEffect(()=>{
        dispatch(getDetails(address,token,setLoading))
        return ()=>{

        }
    },[dispatch,address,token])

    return (
        <div className='container'>
            <div className="row">
                {!loading?<DetailsArticle
                    detailsState={detailsState}
                    navigateToMain={navigateToMain}
                />:'error'}
            </div>
        </div>
    );
};

export default Details;