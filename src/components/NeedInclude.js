import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet'
import "../App.css";
import Header from "./Header";

const NeedInclude = () => {
    return (
        <>
            <Helmet>
                <title>Need Include</title>
            </Helmet>
            <div className="App">
                <Header text="Test Need Include" />
            </div>
            <img src={process.env.PUBLIC_URL + '/assets/images/img1.png'} alt=""/>
            <script src={process.env.PUBLIC_URL + '/assets/js/a1.js'}></script>
            <script src={process.env.PUBLIC_URL + '/assets/js/a2.js'}></script>
            <script src={process.env.PUBLIC_URL + '/assets/js/a3.js'}></script>
            <script src={process.env.PUBLIC_URL + '/assets/css/a1.css'}></script>
            <script src={process.env.PUBLIC_URL + '/assets/css/a2.css'}></script>
            <script src={process.env.PUBLIC_URL + '/assets/css/a3.css'}></script>
        </>
    )
}

export default NeedInclude;