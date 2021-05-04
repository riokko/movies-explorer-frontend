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
                            className={classnames("nav", {
                                nav_is_visible: menuIsVisible,
                            })}
                        >
                            <button
                                className="nav__close-button"
                                onClick={handlerMenuVisibility}
                            />
                            <a href="/" className="nav__link nav__link_hidden">
                                Главная
                            </a>
                            <NavLink to="/movies" className="nav__link">
                                Фильмы
                            </NavLink>
                            <NavLink to="/saved-movies" className="nav__link">
                                Сохранённые фильмы
                            </NavLink>
                            <NavLink
                                to="/profile"
                                className="nav__link nav__link_account"
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
