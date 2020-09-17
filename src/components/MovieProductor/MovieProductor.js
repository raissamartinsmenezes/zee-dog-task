import React from "react";
import "./MovieProductor.css";

const MovieProductor = (props) => {
    const { movieProductor } = props;
    return <p className="movie-productor">{movieProductor}</p>;
}

export default MovieProductor;