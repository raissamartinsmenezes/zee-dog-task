import React from "react";
import "./PageTitle.css";

const PageTitle = (props) => {
    const { pageTitle } = props;
    return <h1 className="page-title">{pageTitle}</h1>;
}

export default PageTitle;