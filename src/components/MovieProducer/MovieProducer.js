import React from "react";
import "./MovieProducer.css";

const MovieProducer = (props) => {
    const { movieProducer } = props;
    return <p className="movie-producer">Producer: {movieProducer}</p>;
};

export default MovieProducer;