import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Movies.css"; 

import PageTitle from "../../components/PageTitle/PageTitle";
import GoToFavorites from "../../components/GoToFavorites/GoToFavorites";
import CardMovie from "../../components/CardMovie/CardMovie";
import SkeletonLoading from "../../components/SkeletonLoading/SkeletonLoading";

import { fetchMovies } from "../../store/slices/moviesSlice";

const Movies = () => {
    const movies = useSelector(state => state.movies);
    const favorites = useSelector(state => state.favorites);
    const { moviesList, isLoading, error } = movies;
    const dispatch = useDispatch();

    console.log(favorites);

    useEffect(() => {
        dispatch(fetchMovies());
    }, []);

    return (
        <>
            <div className="navbar">
                <PageTitle 
                    pageTitle="Filmes"
                />
                <GoToFavorites />
            </div>
            <div className="card-box">
                {isLoading ? <SkeletonLoading /> :
                moviesList.map((movie) => (
                    <CardMovie
                        key={movie.id}
                        movie={movie}
                        // title={movie.title}
                        // director={movie.director} 
                        // description={movie.description}
                        // id={movie.id}
                        hasMovieDescription={true}
                    />
                ))}
            </div>
        </>
    );
}

export default Movies;