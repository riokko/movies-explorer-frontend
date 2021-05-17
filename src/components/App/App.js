import React, { useState, useEffect, useRef } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

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
    const [likedMovies, setLikedMovies] = React.useState([]);
    const [messageForForm, setMessageForForm] = React.useState("");

    const history = useHistory();
    const token = localStorage.getItem("token");
    function tokenCheck() {
        if (!token) {
            return;
        }
        setLoggedIn(true);
        history.push("/movies");
        mainApi
            .getUserData(token)
            .then((res) => {
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
                fetchLikedMovies();
            })
            // eslint-disable-next-line no-console
            .catch((e) => console.log(e));
    }

    function fetchLikedMovies() {
        mainApi
            .getLikedMovies(token)
            .then((data) => {
                setLikedMovies(data);
            })
            .catch((e) => {
                console.log(e);
                setLikedMovies([]);
            });
    }

    const firstRender = useRef(true);
    useEffect(() => {
        if (firstRender.current) {
            tokenCheck();
            firstRender.current = false;
        }
    });

    function handleRegister(name, email, password) {
        return mainApi.register(name, email, password);
    }

    function handleLogin(email, password) {
        mainApi
            .login(email, password)
            .then((data) => {
                if (data.ok) {
                    return data.json();
                }
                if (data.status === 400) {
                    throw new Error("не передано одно из полей");
                } else if (data.status === 401) {
                    throw new Error("пользователь с email не найден");
                } else {
                    throw new Error("что-то пошло не так");
                }
            })
            .then(({ token }) => {
                if (token) {
                    mainApi.setToken(token);
                    tokenCheck();
                    localStorage.setItem("token", token);
                    setLoggedIn(true);
                    history.push("/movies");
                }
            })
            .catch((e) => console.log(e));
    }

    const updateUserData = ({ name, email }) => {
        mainApi
            .editUserData({ name, email }, token)
            .then(() => {
                tokenCheck();
            })
            .catch(() => {
                setMessageForForm("При обновлении профиля произошла ошибка");
            });
    };

    const handleLogout = () => {
        localStorage.removeItem('jwt');
        localStorage.removeItem('movies');
        localStorage.removeItem('searchKey');
        setLoggedIn(false);
        history.push('/signin');
        setCurrentUser({});
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page__content">
                <Switch>
                    <Route exact path="/signin">
                        <Login handleLogin={handleLogin} />
                    </Route>
                    <Route exact path="/signup">
                        <Register
                            handleRegister={handleRegister}
                            handleLogin={handleLogin}
                            setLoggedIn={setLoggedIn}
                        />
                    </Route>
                    <Route exact path="/profile">
                        <Profile
                            loggedIn={loggedIn}
                            updateUserData={updateUserData}
                            message={messageForForm}
                            handleLogout={handleLogout}
                        />
                    </Route>
                    <Route exact path="/movies">
                        <Movies
                            loggedIn={loggedIn}
                            likedMovies={likedMovies}
                            setLikedMovies={setLikedMovies}
                            fetchLikedMovies={fetchLikedMovies}
                        />
                    </Route>
                    <Route exact path="/saved-movies">
                        <SavedMovies
                            loggedIn={loggedIn}
                            likedMovies={likedMovies}
                            setLikedMovies={setLikedMovies}
                        />
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
