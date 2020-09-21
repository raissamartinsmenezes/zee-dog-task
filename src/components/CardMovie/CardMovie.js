import React from "react";
import "./CardMovie.css";

import MovieName from "../MovieName/MovieName";
import MovieDirector from "../MovieDirector/MovieDirector";
import MovieDescription from "../MovieDescription/MovieDescription";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import ShowMore from "../ShowMore/ShowMore";

const CardMovie = (props) => {
    const { hasMovieDescription, movie } = props;
   
    return ( 
        <div className="card-movie">
            <div>
                <div className="card-movie--title">
                    <div>
                        <MovieName 
                             movieName={movie.title}
                        />
                        <MovieDirector
                            movieDirector={movie.director}
                        />
                    </div>
                    <FavoriteButton movie={movie}/>
                </div>
                { hasMovieDescription ? 
                <MovieDescription
                    movieDescription={movie.description}
                /> : null }
            </div>
                <ShowMore id={movie.id} />
        </div>
    );
};

export default CardMovie;