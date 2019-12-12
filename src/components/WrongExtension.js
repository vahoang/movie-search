import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet'
import "../App.css";
import Header from "./Header";

const WrongExtension = () => {
    return (
        <>
            <Helmet>
                <title>Wrong Extension</title>
            </Helmet>
            <div className="App">
                <Header text="Test Wrong Extension" />
            </div>
            <img src={process.env.PUBLIC_URL + '/assets/images/img1.jpeg'} alt="" />;
            <img src={process.env.PUBLIC_URL + '/wrongpath/sth/error.png'} alt=""/>
        </>
    )
}

export default WrongExtension;