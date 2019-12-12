import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet'
import "../App.css";
import Header from "./Header";
import img from '../assets/images/img1.png'

const WrongPath = () => {
    return (
        <>
            <Helmet>
                <title>Wrong Path</title>
            </Helmet>
            <div className="App">
                <Header text="Test Wrong Path" />
            </div>
            <img src={img} alt=""></img>
        </>
    )
}

export default WrongPath;