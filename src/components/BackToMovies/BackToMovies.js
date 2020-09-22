import React from "react";
import { Link } from "react-router-dom";
import "./BackToMovies.css";

const BackToMovies = () => {
    return (
        <Link to="/" style={{ textDecoration: "none", color: "#0A0A0B" }}>
            <p className="back-to-movies">← Back to movies</p>
        </Link>
    ); 
};

export default BackToMovies;