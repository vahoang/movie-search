import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet'
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";


const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=c20e5c15";


const App = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        fetch(MOVIE_API_URL)
            .then(response => response.json())
            .then(jsonResponse => {
                setMovies(jsonResponse.Search);
                setLoading(false);
            });
    }, []);

    const search = searchValue => {
        setLoading(true);
        setErrorMessage(null);

        fetch(`https://www.omdbapi.com/?s=${searchValue}&page=10&apikey=c20e5c15`)
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.Response === "True") {
                    setMovies(jsonResponse.Search);
                    setLoading(false);
                } else {
                    setErrorMessage(jsonResponse.Error);
                    setLoading(false);
                }
            });
    };


    const componentDidMount = () => {
        console.log('ahihii');
        // const script = document.createElement("script");
        // script.src = "/static/libs/a1.js";
        // script.async = true;
        // script.onload = () => this.scriptLoaded();

        // document.body.appendChild(script);
    }

    return (
        <>
            <Helmet>
                <title>Main Page</title>
            </Helmet>
            <div className="App">
                <Header text="My Movie" />
                <Search search={search} />
                <p className="App-intro">Sharing a few of our favourite movies</p>
                <div className="movies">
                    {loading && !errorMessage ? (
                        <span>loading...</span>
                    ) : errorMessage ? (
                        <div className="errorMessage">{errorMessage}</div>
                    ) : (
                                movies.map((movie, index) => (
                                    <Movie key={`${index}-${movie.Title}`} movie={movie} />
                                ))
                            )}
                </div>
            </div>
            <script src={process.env.PUBLIC_URL + '/assets/js/a1.js'}></script>
            <script src={process.env.PUBLIC_URL + '/assets/js/a2.js'}></script>
            <script src={process.env.PUBLIC_URL + '/assets/js/a3.js'}></script>
            <script src={process.env.PUBLIC_URL + '/assets/css/a1.css'}></script>
            <script src={process.env.PUBLIC_URL + '/assets/css/a2.css'}></script>
            <script src={process.env.PUBLIC_URL + '/assets/css/a3.css'}></script>

            <img src={process.env.PUBLIC_URL + '/assets/images/img1.png'} alt=""/>
            <img src={process.env.PUBLIC_URL + '/wrongpath/sth/error.png'} alt=""/>

            <img src="https://ea-advice-test-web.herokuapp.com/page/wrong-extension/assets/images/img1.jpeg" alt=""/>
        </>
    );
};


export default App;