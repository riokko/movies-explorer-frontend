import React, { useState } from "react";
import "./Navigation.css";
import classnames from "classnames";
import { Link, NavLink } from "react-router-dom";

function Navigation({ loggedIn }) {
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    function handlerMenuVisibility() {
        setMenuIsVisible(!menuIsVisible);
    }

    return (
        <>
            {loggedIn ? (
                <>
                    <div
                        className={classnames({
                            nav_container: menuIsVisible,
                        })}
                    >
                        <div
                            className={classnames("nav_loggedIn", {
                                nav_is_visible: menuIsVisible,
                            })}
                        >
                            <button
                                className={classnames(
                                    "nav__close-button",
                                    "nav__close-button_is_visible"
                                )}
                                onClick={handlerMenuVisibility}
                            />
                            <NavLink
                                to="/"
                                className="nav__burger-link nav__link_hidden"
                            >
                                Главная
                            </NavLink>
                            <NavLink to="/movies" className="nav__burger-link">
                                Фильмы
                            </NavLink>
                            <NavLink
                                to="/saved-movies"
                                className="nav__burger-link"
                            >
                                Сохранённые фильмы
                            </NavLink>
                            <NavLink
                                to="/profile"
                                className="nav__burger-link nav__link_account"
                            >
                                Аккаунт
                                <div className="nav__button-icon" />
                            </NavLink>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="nav__burger"
                        onClick={handlerMenuVisibility}
                    />
                </>
            ) : (
                <div className="nav">
                    <Link to="/signup" className="nav__link">
                        Регистрация
                    </Link>
                    <Link to="/signin" className="nav__link nav__link_login">
                        Войти
                    </Link>
                </div>
            )}
        </>
    );
}

export default Navigation;
