import React, {useEffect, useState} from 'react';
import Render from "./Render/Render";
import CircularProgress from '@mui/material/CircularProgress';
import {useSelector,useDispatch} from "react-redux";
import {getMain} from "../../redux/actions/actions";
import './Main.css'


const Main = () => {

    const dispatch = useDispatch()

    const {mainState} = useSelector(state=>state.main)

    const [loading,setLoading] = useState(true)

    useEffect(() => {
       dispatch(getMain(setLoading))
    }, [dispatch])

    const items = mainState && mainState.map((el) => <Render
        key={el.id}
        name={el.name}
        image_url={el.image_url}
        token={el.token_id}
        address={el.asset_contract.address}
        id={el.id}
    />)


    return (
        <section id={'first'}>
        <div className={'container'}>
            <div className="row">
                {!loading?items:<CircularProgress/>}
            </div>
        </div>
        </section>
    );
};

export default Main;
