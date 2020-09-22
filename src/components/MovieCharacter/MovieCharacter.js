import React from "react";
import "./MovieCharacter.css";

const MovieCharacter = (props) => {
    const { movieCharacter } = props;
    return <p className="movie-character">🎬 {movieCharacter}</p>
};

export default  MovieCharacter;