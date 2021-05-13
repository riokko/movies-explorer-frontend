import React, { useState } from "react";
import {Switch, Route, Redirect, useHistory} from "react-router-dom";

import mainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({});

    const history = useHistory();

    function tokenCheck() {
        const token = localStorage.getItem("token");
        if (!token) {
            return;
        }
        setLoggedIn(true);
        history.push("/movies");
        mainApi
            .getUserData(token)
            .then((res) => {
                console.log(res)
                if (res.status === 401) {
                    throw new Error(
                        "Токен не передан или передан не в том формате"
                    );
                } else if (res.status === 400) {
                    throw new Error("Переданный токен некорректен");
                } else {
                    return res.json();
                }
            })
            .then((res) => {
                const data = res.email ? res : {};
                setCurrentUser(data);
            })
            // eslint-disable-next-line no-console
            .catch((e) => console.log(e));
    }

    function handleRegister(name, email, password) {
        mainApi
            .register(name, email, password)
            .then((data) => {
                console.log("register data", data);
                history.push("/movies");
                setLoggedIn(true);
            })
            .catch((e) => console.log(e));
    }

    function handleLogin(email, password) {
        mainApi
            .login(email, password)
            .then((data) => {
                if (data.token) {
                    mainApi.setToken(data.token);
                    setLoggedIn(true);
                    localStorage.setItem("token", data.token);
                    tokenCheck();
                } else if (data.status === 400) {
                    throw new Error("не передано одно из полей");
                } else if (data.status === 401) {
                    throw new Error("пользователь с email не найден");
                } else {
                    throw new Error("что-то пошло не так");
                }
            })
            .catch((e) => console.log(e));
    }

    function handleMovieLike() {
        console.log('click')
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page__content">
                <Switch>
                    <Route exact path="/signin">
                        <Login handleLogin={handleLogin}/>
                    </Route>
                    <Route exact path="/signup">
                        <Register handleRegister={handleRegister} />
                    </Route>
                    <Route exact path="/profile">
                        <Profile loggedIn={loggedIn} />
                    </Route>
                    <Route exact path="/movies">
                        <Movies loggedIn={loggedIn} handleMovieLike={handleMovieLike}/>
                    </Route>
                    <Route exact path="/saved-movies">
                        <SavedMovies loggedIn={loggedIn} />
                    </Route>
                    <Route exact path="/">
                        <Main loggedIn={loggedIn} />
                    </Route>
                    <Route>
                        {loggedIn ? (
                            <Redirect to="/movies" />
                        ) : (
                            <Redirect to="/signin" />
                        )}
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </div>
        </CurrentUserContext.Provider>
    );
};

export default App;
