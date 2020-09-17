import React from "react";
import "./Score.css";
import tomato from "../../../assets/tomato.svg"

const Score = (props) => {
    const { score } = props;
    return (
        <div className="score">
            <img src={tomato} className="tomato-icon"/>
            <p className="score-content">{score}</p>
        </div>
    );
}

export default Score;