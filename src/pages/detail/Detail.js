import React, { useEffect, useState, useMemo } from "react";
import "./Detail.css";
import { useSelector, useDispatch } from "react-redux"; 

import CardDetail from "../../components/CardDetail/CardDetail";
import GoToFavorites from "../../components/GoToFavorites/GoToFavorites";
import BackToMovies from "../../components/BackToMovies/BackToMovies";
import { fetchPeople } from "../../store/slices/peopleSlice";

const selectMovieById = (id) => (state) => state.movies.moviesList.find((movie) => movie.id === id);

const selectPeopleByMovieId = (id) => (state) => {
    const { peopleList } = state.people;
    console.log(peopleList);
    return peopleList.filter((person) => person.films.find(film => film.split("/")[4] === id));
}; 

const Detail = (location) => {
    const id = location.location.state.movieId;
    const movie = useSelector(selectMovieById(id));
    // const movie = useSelector(state => state.movies.moviesList.find((movie) => movie.id === id));
    const people = useSelector(selectPeopleByMovieId(id));
    const dispatch = useDispatch();

    console.log(people);

    // const movie = useMemo(() => {
    //     const movieFiltered = moviesList.find((movie) => movie.id === id);  
    //     return movieFiltered;  
    // }, [moviesList]);

    // const getMovieById = () => {
    //     const movieFiltered = moviesList.find((movie) => movie.id === id);  
    //     return movieFiltered;  
    // };

    // const getCharactersByMovieId = () => {
    //     peopleList.filter((people => { 
    //         return people.films.find(film => film.split("/")[4] === id);
    //     }));
    // };

    // console.log(getCharactersByMovieId());

    // useEffect(() => {
    //     if(movies){
    //         const movieResult = getMovieById();
    //         setMovie(movieResult);
    //     }     
    // }, [movies]);

    useEffect(() => {
        dispatch(fetchPeople());
    }, []);

    // useEffect(() => {
    //     getCharactersByMovieId();
    // }, [people]);

    return (
        <>
        <div className="navbar">
            <BackToMovies />
            <GoToFavorites />
        </div>
        <CardDetail movie={movie} people={people}/>
        </>
    )
};

export default Detail;