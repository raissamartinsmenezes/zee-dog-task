import React from "react";
import "./Movies.css";

import PageTitle from "../../components/PageTitle/PageTitle";
import GoToFavorites from "../../components/GoToFavorites/GoToFavorites";
import CardMovie from "../../components/CardMovie/CardMovie";

const Movies = () => {
    return (
        <>
            <PageTitle 
                pageTitle="Filme"
            />
            <GoToFavorites />
            <CardMovie />
        </>
    )
}

export default Movies;