import React from "react";
import "./MovieDirector.css";

const MovieDirector = (props) => {
    const { movieDirector } = props;
    return <p className="movie-director">{movieDirector}</p>;
};

export default MovieDirector;