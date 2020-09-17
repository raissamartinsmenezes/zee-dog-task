import React from "react";
import "./Favorites.css";

import PageTitle from "../../components/PageTitle/PageTitle";
import BackToMovies from "../../components/BackToMovies/BackToMovies";
import CardFavorite from "../../components/CardFavorite/CardFavorite";

const Favorites = () => {
    return (
        <>
            <PageTitle 
                pageTitle="Meus Favoritos"
            />
            <BackToMovies />
            <CardFavorite />
        </>
    )
}

export default Favorites;