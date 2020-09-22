import React from "react";
import "./MovieDescription.css";

const MovieDescription = (props) => {
    const { movieDescription } = props;
    return <p className="movie-description">{movieDescription}</p>;
};

export default MovieDescription;