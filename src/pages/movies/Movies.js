import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; 

import PageTitle from "../../components/PageTitle/PageTitle";
import GoToFavorites from "../../components/GoToFavorites/GoToFavorites";
import CardMovie from "../../components/CardMovie/CardMovie";
import SkeletonLoading from "../../components/SkeletonLoading/SkeletonLoading";
import ErrorBox from "../../components/ErrorBox/ErrorBox";

import { fetchMovies } from "../../store/slices/moviesSlice";

const TOTAL_OF_SKELETONS = [1, 2, 3, 4];

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
            {
                error || !moviesList.length
                ? <ErrorBox errorContent="📽️ Oops! An unexpected error occurred while trying to load the movies, try later!" />
                : <div className="card-box">
                    {isLoading ? 
                    TOTAL_OF_SKELETONS.map((skeleton, index) => (<SkeletonLoading key={index}/>)) 
                    :
                    moviesList.map((movie) => (
                        <CardMovie
                            key={movie.id}
                            movie={movie}
                            hasMovieDescription={true}
                        />
                    ))}
                </div>
            }
        </>
    );
};

export default Movies;