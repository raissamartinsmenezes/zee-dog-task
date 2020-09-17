import React from "react";
import "./Detail.css";

import CardDetail from "../../components/CardDetail/CardDetail";
import GoToFavorites from "../../components/GoToFavorites/GoToFavorites";
import BackToMovies from "../../components/BackToMovies/BackToMovies";

const Detail = () => {
    return (
        <>
        <BackToMovies />
        <GoToFavorites />
        <CardDetail />
        </>
    )
}

export default Detail;