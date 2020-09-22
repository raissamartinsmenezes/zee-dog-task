import React from "react";
import { Link } from "react-router-dom";
import "./ShowMore.css";

const ShowMore = (props) => {
    const { id } = props;
    
    return (
        <Link 
            to={{ pathname: `/detail/${id}` }} 
            style={{ textDecoration: "none", color: "#0A0A0B" }}>
            <button className="show-more">See More →</button>
        </Link>
    ); 
};

export default ShowMore;