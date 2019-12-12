import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet'
import "../App.css";
import Header from "./Header";

const WrongPath = () => {
    return (
        <>
            <Helmet>
                <title>Wrong Path</title>
            </Helmet>
            <div className="App">
                <Header text="Test Wrong Path" />
            </div>
            <img src={process.env.PUBLIC_URL + '/assets/images/img1.png'} alt="" />;
            <img src={process.env.PUBLIC_URL + '/assets/imagu/img1.png'} alt="" />;
            <img src={process.env.PUBLIC_URL + '/assets/ima/img1.png'} alt="" />;
        </>
    )
}

export default WrongPath;