import React from "react";

const MovieName = (props) => {
    const { movieName } = props;
    return <p className="movie-name">{movieName}</p>;
};

export default MovieName;