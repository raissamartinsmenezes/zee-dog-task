import React from "react";
import "./Movies.css";

import PageTitle from "../../components/PageTitle/PageTitle";
import GoToFavorites from "../../components/GoToFavorites/GoToFavorites";
import CardMovie from "../../components/CardMovie/CardMovie";

const Movies = () => {
    return (
        <>
            <div className="navbar">
                <PageTitle 
                    pageTitle="Filmes"
                />
                <GoToFavorites />
            </div>
            <div className="card-box">
                <CardMovie 
                    hasMovieDescription={true}
                />
                <CardMovie 
                    hasMovieDescription={true}
                />
                <CardMovie 
                    hasMovieDescription={true}
                />
                <CardMovie 
                    hasMovieDescription={true}
                />
            </div>
        </>
    )
}

export default Movies;