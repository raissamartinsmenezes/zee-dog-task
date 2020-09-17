import React, { useState } from "react";
import "./FavoriteButton.css";
import redHeart from "../../../assets/red-heart.svg";
import greyHeart from "../../../assets/grey-heart.svg";

const FavoriteButton = () => {
    const [isFavorite, setIsFavorite] = useState(false);

    const onHandleClickButton = () => {
        setIsFavorite(true);
        if (isFavorite === true) setIsFavorite(false);
    }   

    return (
        <button onClick={onHandleClickButton}>
            <img src={isFavorite ? redHeart : greyHeart} className="favorite-button"/>
        </button>
    );
};

export default FavoriteButton;