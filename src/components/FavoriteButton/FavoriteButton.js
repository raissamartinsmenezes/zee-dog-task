import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./FavoriteButton.css";
import redHeart from "../../../assets/red-heart.svg";
import greyHeart from "../../../assets/grey-heart.svg";

import { addMovieToFavorites, removeMovieFromFavorites } from "../../store/slices/favoritesSlice";

const FavoriteButton = (props) => {
    const { movie } = props;
    const favorites = useSelector(state => state.favorites);
    const [isFavorite, setIsFavorite] = useState(false);
    const dispatch = useDispatch();

    const onHandleClickButton = () => {
        setIsFavorite(true);
        dispatch(addMovieToFavorites(movie));
        if(isFavorite === true) {
            setIsFavorite(false);
            dispatch(removeMovieFromFavorites(movie));
        } 
    } 
    
    useEffect(() => {
        if(favorites) {
            const isMovieFavorited = favorites.find((favorite) => favorite.id === movie.id);
            isMovieFavorited ? setIsFavorite(true) : setIsFavorite(false);
        }
    }, [favorites, movie]);

    return (
        <button onClick={onHandleClickButton}>
            <img src={isFavorite ? redHeart : greyHeart} className="favorite-button"/>
        </button>
    );
};

export default FavoriteButton;