import React from "react";
import "./CardMovie.css";
import { Link } from "react-router-dom";

import MovieName from "../MovieName/MovieName";
import MovieDirector from "../MovieDirector/MovieDirector";
import MovieDescription from "../MovieDescription/MovieDescription";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import ShowMore from "../ShowMore/ShowMore";

const CardMovie = (props) => {
    const { hasMovieDescription, title, director, description, id } = props;
   
    return ( 
        <div className="card-movie">
            <div>
                <div className="card-movie--title">
                    <div>
                        <MovieName 
                             movieName={title}
                        />
                        <MovieDirector
                            movieDirector={director}
                        />
                    </div>
                    <FavoriteButton />
                </div>
                { hasMovieDescription ? 
                <MovieDescription
                    movieDescription={description}
                /> : null }
            </div>
                <ShowMore id={id} />
        </div>
    );
};

export default CardMovie;