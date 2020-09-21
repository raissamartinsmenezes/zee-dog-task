import React from "react";
import "./CardDetail.css";

import MovieName from "../MovieName/MovieName";
import MovieDirector from "../MovieDirector/MovieDirector";
import MovieProductor from "../MovieProductor/MovieProductor";
import MovieYear from "../MovieYear/MovieYear";
import MovieDescription from "../MovieDescription/MovieDescription";
import MovieCharacter from "../MovieCharacter/MovieCharacter";
import CharactersTitle from "../CharactersTitle/CharactersTitle";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Score from "../Score/Score";

const CardDetail = (props) => {
    const { movie, people } = props;
    console.log({movie, people});

    return (
        <div className="card-detail">
            <div className="card-detail--title">
                <div className="card-detail--favorite">
                    <FavoriteButton />
                    <div>
                        <MovieName 
                            movieName={movie.title}
                        />
                        <MovieDirector 
                            movieDirector={movie.director}
                        />
                    </div>
                </div>
                <Score 
                    score={movie.rt_score}
                />
            </div>
            <MovieDescription 
                movieDescription={movie.description}
            />
            <MovieProductor 
                movieProductor={movie.producer}
            />
            <MovieYear 
                movieYear={movie.release_date}
            />
            <CharactersTitle />
            {people.map((character) => {
                <MovieCharacter 
                    movieCharacter={character.name}
                />
            })}
        </div>
    ) 
};

export default CardDetail;