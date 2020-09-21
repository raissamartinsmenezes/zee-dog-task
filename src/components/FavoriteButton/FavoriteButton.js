import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./FavoriteButton.css";
import redHeart from "../../../assets/red-heart.svg";
import greyHeart from "../../../assets/grey-heart.svg";

import { addMovieToFavorites, removeMovieFromFavorites } from "../../store/slices/favoritesSlice";

const FavoriteButton = (props) => {
    const { movie } = props;
    const [isFavorite, setIsFavorite] = useState(false);
    const dispatch = useDispatch();

    const onHandleClickButton = () => {
        setIsFavorite(true);
        dispatch(addMovieToFavorites(movie));
        if (isFavorite === true) {
            setIsFavorite(false);
            dispatch(removeMovieFromFavorites(movie));
        } 
    } 

    return (
        <button onClick={onHandleClickButton}>
            <img src={isFavorite ? redHeart : greyHeart} className="favorite-button"/>
        </button>
    );
};

export default FavoriteButton;