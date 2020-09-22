import React from "react";
import { useSelector } from "react-redux";
import "./Favorites.css";

import PageTitle from "../../components/PageTitle/PageTitle";
import BackToMovies from "../../components/BackToMovies/BackToMovies";
import CardMovie from "../../components/CardMovie/CardMovie";

const Favorites = () => {
    const favorites = useSelector(state => state.favorites);
    console.log(favorites);

    return (
        <>
        <div className="navbar">
            <PageTitle 
                pageTitle="My Favorites"
            />
            <BackToMovies />
        </div>
        <div className="card-box">
            {favorites.map((movie) => (
                <CardMovie 
                    movie={movie}
                    hasMovieDescription={false}
                />
            ))}
            {favorites.length === 0 && <div>não há favoritos</div>}
        </div>
        </>
    )
};

export default Favorites;