import React from "react";
import "./BackToMovies.css";
import { Link } from "react-router-dom";

const BackToMovies = () => {
    return (
        <Link to="/" style={{ textDecoration: "none", color: "#0A0A0B" }}>
            <p className="back-to-movies">← Voltar para Filmes</p>
        </Link>
    ); 
};

export default BackToMovies;