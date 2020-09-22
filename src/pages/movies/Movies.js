import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; 

import PageTitle from "../../components/PageTitle/PageTitle";
import GoToFavorites from "../../components/GoToFavorites/GoToFavorites";
import CardMovie from "../../components/CardMovie/CardMovie";
import SkeletonLoading from "../../components/SkeletonLoading/SkeletonLoading";

import { fetchMovies } from "../../store/slices/moviesSlice";

const Movies = () => {
    const movies = useSelector(state => state.movies);
    const { moviesList, isLoading, error } = movies;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies());
    }, []);

    return (
        <>
            <div className="navbar">
                <PageTitle 
                    pageTitle="Movies"
                />
                <GoToFavorites />
            </div>
            <div className="card-box">
                {isLoading ? <SkeletonLoading /> :
                moviesList.map((movie) => (
                    <CardMovie
                        key={movie.id}
                        movie={movie}
                        hasMovieDescription={true}
                    />
                ))}
            </div>
        </>
    );
};

export default Movies;