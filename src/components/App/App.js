import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";

function App() {
    // переключение состояния залогина
    const [loggedIn, setLoggedIn] = useState(false);
    // const [loggedIn, setLoggedIn] = useState(true);

    return (
        <>
            <div className="page__content">
                <Switch>
                    <Route path="/signin">
                        <Login />
                    </Route>
                    <Route path="/signup">
                        <Register/>
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/movies">
                        <Movies loggedIn={loggedIn} />
                    </Route>
                    <Route path="/saved-movies">
                        <SavedMovies loggedIn={loggedIn} />
                    </Route>
                    <Route path="/">
                        <Main loggedIn={loggedIn} />
                    </Route>
                </Switch>
            </div>
        </>
    );
}

export default App;
