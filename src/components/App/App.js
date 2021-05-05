import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

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
    const [loggedIn, setLoggedIn] = useState(false);
    // const [loggedIn, setLoggedIn] = useState(true);

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
                        <Movies loggedIn={loggedIn} />
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
