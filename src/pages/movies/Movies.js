import React, { useEffect } from "react";
import "./Movies.css";
import { useSelector, useDispatch } from "react-redux"; 

import PageTitle from "../../components/PageTitle/PageTitle";
import GoToFavorites from "../../components/GoToFavorites/GoToFavorites";
import CardMovie from "../../components/CardMovie/CardMovie";
import { fetchMovies } from "../../store/slices/moviesSlice";
import SkeletonLoading from "../../components/SkeletonLoading/SkeletonLoading";

const Movies = () => {
    const movies = useSelector(state => state.movies);
    const { moviesList, isLoading } = movies;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies());
    }, []);

    console.log(isLoading);

    // const countSkeleton = () => {
    //    return moviesList.length ? moviesList.length : 4; 
    // }

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
                        title={movie.title}
                        director={movie.director} 
                        description={movie.description}
                        hasMovieDescription={true}
                    />
                ))}
            </div>
        </>
    );
}

export default Movies;