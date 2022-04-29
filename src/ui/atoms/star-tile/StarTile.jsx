import React from "react";
import './StarTile.css';
import star from '../../../assets/icons/star.svg';

function StarTile({ count }) {
    return (
        <div className="row">
            <img className="star-icon" src={star} alt="number of stars" />
            <p>{count}</p>
        </div>
    )
}

export default StarTile;