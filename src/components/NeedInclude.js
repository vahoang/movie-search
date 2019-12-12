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
        </>
    )
}

export default NeedInclude;