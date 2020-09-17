import React from "react";
import "./FavoriteButton.css";
import redHeart from "../../../assets/red-heart.svg";
import greyHeart from "../../../assets/grey-heart.svg";

const FavoriteButton = () => {
    return <img src={redHeart} className="favorite-button"/>;
}

export default FavoriteButton;