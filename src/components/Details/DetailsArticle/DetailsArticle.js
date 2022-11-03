import React from 'react';

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
                </div>
            </div>

        </>
    );
};

export default DetailsArticle;