import React from "react";
import "./MovieYear.css";

const MovieYear = (props) => {
    const { movieYear } = props;
    return <p className="movie-year">Release Year: {movieYear}</p>;
}

export default MovieYear;