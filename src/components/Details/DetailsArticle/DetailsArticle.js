import React from 'react';
import {Button} from "@mui/material";

const DetailsArticle = ({detailsState,navigateToMain}) => {
    return (
        <>
            <div className="col-6">
                <div className="details__box">
                    <img src={detailsState.image_url} alt=""/>
                </div>
            </div>

            <div className="col-6">
                <div className="details__box">
                    <p>{detailsState.name}</p>
                    <Button
                        onClick={navigateToMain}
                        color="secondary">back to main</Button>
                </div>
            </div>

        </>
    );
};

export default DetailsArticle;