import React, { useEffect } from "react";
import "./Movies.css";
import { useSelector, useDispatch } from "react-redux"; 

import PageTitle from "../../components/PageTitle/PageTitle";
import GoToFavorites from "../../components/GoToFavorites/GoToFavorites";
import CardMovie from "../../components/CardMovie/CardMovie";
import { fetchMovies } from "../../store/slices/moviesSlice";

const Movies = () => {
    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies());
    }, [])

    console.log(movies);

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