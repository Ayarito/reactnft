import React from 'react';
import {Link} from "react-router-dom";

const Render = (props) => {

    return (
        <div className='col-3'>
            <div className="image__box">
                <img src={props.image_url} alt=""/>
                <p>{props.name?.slice(0,20)}</p>
                <Link  to={'details/'+props.address+'/'+props.token}>about</Link>
            </div>
        </div>
    );
};

export default Render;