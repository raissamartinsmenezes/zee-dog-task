import React from "react";
import "./MovieCharacter.css";

const MovieCharacter = (props) => {
    const { movieCharacter, key } = props;
    return <p key={key} className="movie-character">🎬 {movieCharacter}</p>
};

export default  MovieCharacter;