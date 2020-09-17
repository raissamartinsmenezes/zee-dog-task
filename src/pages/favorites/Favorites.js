import React from "react";
import "./Favorites.css";

import PageTitle from "../../components/PageTitle/PageTitle";
import BackToMovies from "../../components/BackToMovies/BackToMovies";
import CardMovie from "../../components/CardMovie/CardMovie";

const Favorites = () => {
    return (
        <>
        <div className="navbar">
            <PageTitle 
                pageTitle="Meus Favoritos"
            />
            <BackToMovies />
        </div>
        <div className="card-box">
            <CardMovie 
                hasMovieDescription={false}
            />
            <CardMovie 
                hasMovieDescription={false}
            />
            <CardMovie 
                hasMovieDescription={false}
            />
            <CardMovie 
                hasMovieDescription={false}
            />
        </div>
        </>
    )
}

export default Favorites;