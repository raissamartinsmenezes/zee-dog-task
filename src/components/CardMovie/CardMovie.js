import React from "react";
import "./CardMovie.css";

import MovieName from "../MovieName/MovieName";
import MovieDirector from "../MovieDirector/MovieDirector";
import MovieDescription from "../MovieDescription/MovieDescription";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

const CardMovie = (props) => {
    // const { buttonContent } = props;
    return (
        <div className="card-movie">
            <div className="card-movie--title">
                <div>
                    <MovieName 
                        movieName="Nome do Filme"
                    />
                    <MovieDirector 
                        movieDirector="Diretor"
                    />
                </div>
                <FavoriteButton />
            </div>
            <MovieDescription 
                movieDescription={lorem}
            />
        </div>
    ) 
}

export default CardMovie;