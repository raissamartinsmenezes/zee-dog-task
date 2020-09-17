import React from "react";
import "./ShowMore.css";
import { Link } from "react-router-dom";

const ShowMore = () => {
    return (
        <Link to="/detail" style={{ textDecoration: "none", color: "#0A0A0B" }}>
            <button className="show-more">Ver Mais →</button>
        </Link>
    ); 
};

export default ShowMore;