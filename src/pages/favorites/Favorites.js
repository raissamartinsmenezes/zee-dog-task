import React from "react";
import { useSelector } from "react-redux";

import PageTitle from "../../components/PageTitle/PageTitle";
import BackToMovies from "../../components/BackToMovies/BackToMovies";
import CardMovie from "../../components/CardMovie/CardMovie";
import ErrorBox from "../../components/ErrorBox/ErrorBox";

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
        </div>
        {favorites.length === 0 && <ErrorBox errorContent="Oops! You don't have any favorite movies yet, click the heart to favorite ❤️" />}
        </>
    )
};

export default Favorites;