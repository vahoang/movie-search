import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet'
import "../App.css";
import Header from "./Header";

const NeedUpload = () => {
    return (
        <>
            <Helmet>
                <title>Need Upload</title>
            </Helmet>
            <div className="App">
                <Header text="Test Need Upload" />
            </div>
            <img src={process.env.PUBLIC_URL + '/assets/images/img1.png'} alt=""/>
            <img src={process.env.PUBLIC_URL + '/wrongpath/sth/error.png'} alt=""/>
        </>
    )
}

export default NeedUpload;