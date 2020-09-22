import React from "react";
import { Link } from "react-router-dom";
import "./GoToFavorites.css";

const GoToFavorites = () => {
    return (
        <Link to="/favorites">
            <button className="go-to-favorites">My Favorites</button>
        </Link>
    ); 
};

export default GoToFavorites;