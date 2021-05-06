import React, { useState } from "react";
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
    // переключение состояния залогина
    // const [loggedIn, setLoggedIn] = useState(false);
    const [loggedIn, setLoggedIn] = useState(true);

    const [movies, setMovies] = useState([]);

    function fetchData() {
        moviesApi
            .getMoviesListFromApi()
            .then((movies) => {
                setMovies(movies);
                console.log(movies)
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
