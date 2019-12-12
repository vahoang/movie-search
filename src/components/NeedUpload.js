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
        </>
    )
}

export default NeedUpload;