import React from "react";
import "./GoToFavorites.css";
import { Link } from "react-router-dom";

const GoToFavorites = () => {

    return (
        <Link to="/favorites">
            <button className="go-to-favorites">Meus Favoritos</button>
        </Link>
    ); 
};

export default GoToFavorites;