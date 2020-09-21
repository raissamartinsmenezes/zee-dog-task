import React from "react";
import { useSelector } from "react-redux";
import "./Favorites.css";

import PageTitle from "../../components/PageTitle/PageTitle";
import BackToMovies from "../../components/BackToMovies/BackToMovies";
import CardMovie from "../../components/CardMovie/CardMovie";

const Favorites = () => {
    const favorites = useSelector(state => state.favorites);
    console.log(favorites[0]);

    return (
        <>
        <div className="navbar">
            <PageTitle 
                pageTitle="Meus Favoritos"
            />
            <BackToMovies />
        </div>
        <div className="card-box">
            {favorites.map((movie) => {
                <CardMovie 
                    movie={movie}
                    hasMovieDescription={false}
                />
            })}
        </div>
        </>
    )
}

export default Favorites;