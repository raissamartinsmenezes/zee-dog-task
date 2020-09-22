import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CardDetail from "../../components/CardDetail/CardDetail";
import GoToFavorites from "../../components/GoToFavorites/GoToFavorites";
import BackToMovies from "../../components/BackToMovies/BackToMovies";
import { fetchPeople } from "../../store/slices/peopleSlice";

const selectMovieById = (id) => (state) => state.movies.moviesList.find((movie) => movie.id === id);

const selectPeopleByMovieId = (id) => (state) => {
    const { peopleList } = state.people;
    return peopleList.filter((person) => person.films.find(film => film.split("/")[4] === id));
}; 

const Detail = (location) => {
    const pathname = location.location.pathname;
    const id = pathname.split("/")[2];
    const movie = useSelector(selectMovieById(id));
    const people = useSelector(selectPeopleByMovieId(id));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPeople());
    }, []);

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