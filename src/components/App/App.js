import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";

function App() {
    // переключение состояния залогина
    // const [loggedIn, setLoggedIn] = useState(false);
    const [loggedIn, setLoggedIn] = useState(true);

    return (
        <>
            <div className="page__content">
                <Header loggedIn={loggedIn} />
                <Switch>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/movies">
                        <Movies />
                    </Route>
                    <Route path="/saved-movies">
                        <SavedMovies />
                    </Route>
                    <Route path="/">
                        <Main />
                    </Route>
                </Switch>
            </div>
        </>
    );
}

export default App;
