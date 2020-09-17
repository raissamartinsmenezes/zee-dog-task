import React from "react";
import "./MovieYear.css";

const MovieYear = (props) => {
    const { movieYear } = props;
    return <p className="movie-year">Ano de Lançamento: {movieYear}</p>;
}

export default MovieYear;