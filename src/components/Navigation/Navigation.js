import React, { useState } from "react";
import "./Navigation.css";
import classnames from "classnames";
import { Link } from "react-router-dom";

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
                            <Link to="/movies" className="nav__link">
                                Фильмы
                            </Link>
                            <Link to="/saved-movies" className="nav__link">
                                Сохранённые фильмы
                            </Link>
                            <Link
                                to="/profile"
                                className="nav__link nav__link_account"
                            >
                                Аккаунт
                                <div className="nav__button-icon" />
                            </Link>
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
