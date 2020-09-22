import React from "react";
import "./CardDetail.css";

import MovieName from "../MovieName/MovieName";
import MovieDirector from "../MovieDirector/MovieDirector";
import MovieProducer from "../MovieProducer/MovieProducer";
import MovieYear from "../MovieYear/MovieYear";
import MovieDescription from "../MovieDescription/MovieDescription";
import MovieCharacter from "../MovieCharacter/MovieCharacter";
import CharactersTitle from "../CharactersTitle/CharactersTitle";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Score from "../Score/Score";
import ErrorBox from "../ErrorBox/ErrorBox";

const CardDetail = (props) => {
    const { movie, people } = props;

    return (
        <div className="card-detail">
            <div className="card-detail--title">
                <div className="card-detail--favorite">
                    <FavoriteButton movie={movie}/>
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
            <MovieProducer 
                movieProducer={movie.producer}
            />
            <MovieYear 
                movieYear={movie.release_date}
            />
            <CharactersTitle />
            {people.map((character) => (
                <MovieCharacter 
                    movieCharacter={character.name}
                />
            ))}
            {people.length === 0 && <ErrorBox errorContent="🎬 Oops! We did not find the characters in our database :/" />}
        </div>
    ) 
};

export default CardDetail;