import React from "react";
import "./Detail.css";

import CardDetail from "../../components/CardDetail/CardDetail";
import GoToFavorites from "../../components/GoToFavorites/GoToFavorites";
import BackToMovies from "../../components/BackToMovies/BackToMovies";

const Detail = () => {
    return (
        <>
        <div className="navbar">
            <BackToMovies />
            <GoToFavorites />
        </div>
        <CardDetail />
        </>
    )
}

export default Detail;