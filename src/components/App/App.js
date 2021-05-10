import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import moviesApi from "../../utils/MoviesApi";

import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";

function App() {
    const loadingMovies = {
        large: {
            onStart: 12,
            addMore: 3,
        },
        medium: {
            onStart: 8,
            addMore: 2,
        },
        small: {
            onStart: 5,
            addMore: 2,
        },
    };
    // переключение состояния залогина
    // const [loggedIn, setLoggedIn] = useState(false);
    const [loggedIn, setLoggedIn] = useState(true);
    const [movies, setMovies] = useState([]);
    const [screenWidth, setScreenWidth] = useState(0);
    const [numberOfDownloadedMovies, setNumberOfDownloadedMovies] = useState(
        loadingMovies.large.onStart
    );
    const [numberOfAddingMoreMovies, setNumberOfAddingMoreMovies] = useState(
        loadingMovies.large.onStart
    );
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        setScreenWidth(window.innerWidth);
        if (screenWidth <= 760) {
            setNumberOfDownloadedMovies(loadingMovies.small.onStart);
            setNumberOfAddingMoreMovies(loadingMovies.small.addMore);
        }
        if (screenWidth > 760 && screenWidth <= 900) {
            setNumberOfDownloadedMovies(loadingMovies.medium.onStart);
            setNumberOfAddingMoreMovies(loadingMovies.medium.addMore);
        }
        if (screenWidth > 900) {
            setNumberOfDownloadedMovies(loadingMovies.large.onStart);
            setNumberOfAddingMoreMovies(loadingMovies.large.addMore);
        }
    }, [
        screenWidth,
        loadingMovies.large.addMore,
        loadingMovies.large.onStart,
        loadingMovies.medium.addMore,
        loadingMovies.medium.onStart,
        loadingMovies.small.addMore,
        loadingMovies.small.onStart,
    ]);

    function fetchData() {
        moviesApi
            .getMoviesListFromApi()
            .then((movies) => {
                setMovies(movies);
                localStorage.setItem("movies", movies);
            })
            .catch((e) => console.log(e));
    }

    return (
        <>
            <div className="page__content">
                <Switch>
                    <Route exact path="/signin">
                        <Login />
                    </Route>
                    <Route exact path="/signup">
                        <Register />
                    </Route>
                    <Route exact path="/profile">
                        <Profile loggedIn={loggedIn} />
                    </Route>
                    <Route exact path="/movies">
                        <Movies
                            loggedIn={loggedIn}
                            fetchData={fetchData}
                            movies={movies}
                            numberOfDownloadedMovies={numberOfDownloadedMovies}
                        />
                    </Route>
                    <Route exact path="/saved-movies">
                        <SavedMovies loggedIn={loggedIn} />
                    </Route>
                    <Route exact path="/">
                        <Main loggedIn={loggedIn} />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </div>
        </>
    );
}

export default App;
