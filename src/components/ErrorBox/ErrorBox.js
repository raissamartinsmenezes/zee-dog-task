import React from "react";
import "./ErrorBox.css";

const ErrorBox = (props) => {
    const { errorContent } = props;
    return <div className="error-box">{ errorContent }</div>;
};

export default ErrorBox;