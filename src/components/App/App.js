import React, { useState, useEffect, useRef } from "react";
import {
    Switch,
    Route,
    Redirect,
    useHistory,
    useLocation,
} from "react-router-dom";

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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [likedMovies, setLikedMovies] = useState([]);
    const [messageForForm, setMessageForForm] = useState("");

    const history = useHistory();
    const token = localStorage.getItem("token");

    const currentLocation = useLocation();
    const path = currentLocation.pathname;

    const tokenCheck = () => {
        if (!token) {
            return;
        }
        setLoggedIn(true);
        history.push(path);
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
    };

    const fetchLikedMovies = () => {
        mainApi
            .getLikedMovies(token)
            .then((data) => {
                setLikedMovies(data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const firstRender = useRef(true);
    useEffect(() => {
        if (firstRender.current) {
            tokenCheck();
            firstRender.current = false;
        }
    });

    const handleRegister = (name, email, password) => {
        return mainApi.register(name, email, password);
    };

    const handleLogin = (email, password) => {
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
    };

    const updateUserData = ({ name, email }) => {
        setMessageForForm("");
        mainApi
            .editUserData({ name, email }, token)
            .then((res) => {
                if (res.status === 409) {
                    return setMessageForForm(
                        "При обновлении профиля произошла ошибка"
                    );
                }
                tokenCheck();
                setMessageForForm("Данные успешно обновлены");
            })
            .catch((e) => console.log(e));
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("moviesList");
        localStorage.removeItem("searchInput");
        setLoggedIn(false);
        history.push("/");
        setCurrentUser({});
    };

    return (
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
            <div className="page__content">
                <Switch>
                    <Route exact path="/">
                        <Main loggedIn={loggedIn} />
                    </Route>
                    <ProtectedRoute
                        exact path="/profile"
                        component={Profile}
                        loggedIn={loggedIn}
                        updateUserData={updateUserData}
                        message={messageForForm}
                        handleLogout={handleLogout}
                    />
                    <ProtectedRoute
                        exact path="/saved-movies"
                        component={SavedMovies}
                        loggedIn={loggedIn}
                        movies={likedMovies}
                        setLikedMovies={setLikedMovies}
                        fetchLikedMovies={fetchLikedMovies}
                    />
                    <ProtectedRoute
                        exact path="/movies"
                        component={Movies}
                        loggedIn={loggedIn}
                        likedMovies={likedMovies}
                        setLikedMovies={setLikedMovies}
                        fetchLikedMovies={fetchLikedMovies}
                    />
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
                    <Route path="*">
                        <NotFound />
                    </Route>
                    <Route>
                        {loggedIn ? (
                            <Redirect to="/" />
                        ) : (
                            <Redirect to="/signin" />
                        )}
                    </Route>
                </Switch>
            </div>
        </CurrentUserContext.Provider>
    );
};

export default App;
