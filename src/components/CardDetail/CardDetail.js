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

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

const CardDetail = (props) => {
    // const { buttonContent } = props;
    return (
        <div className="card-detail">
            <div className="card-detail--title">
                <div className="card-detail--favorite">
                    <FavoriteButton />
                    <div>
                        <MovieName 
                            movieName="Nome do Filme"
                        />
                        <MovieDirector 
                            movieDirector="Diretor"
                        />
                    </div>
                </div>
                <Score 
                    score="7.4"
                />
            </div>
            <MovieDescription 
                movieDescription={lorem}
            />
            <MovieProductor 
                movieProductor="Produtor"
            />
            <MovieYear 
                movieYear="1994"
            />
            <CharactersTitle />
            <MovieCharacter 
                movieCharacter="Personagem"
            />
            <MovieCharacter 
                movieCharacter="Personagem"
            />
            <MovieCharacter 
                movieCharacter="Personagem"
            />
            <MovieCharacter 
                movieCharacter="Personagem"
            />
            <MovieCharacter 
                movieCharacter="Personagem"
            />
        </div>
    ) 
}

export default CardDetail;