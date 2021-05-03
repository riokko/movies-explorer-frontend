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
                            <a
                                href="/"
                                className="nav__link nav__link_hidden"
                            >
                                Главная
                            </a>
                            <Link to="/movies" className="nav__link">
                                Фильмы
                            </Link>
                            <a href="/saved-movies" className="nav__link">
                                Сохранённые фильмы
                            </a>
                            <a
                                href="/profile"
                                className="nav__link nav__link_account"
                            >
                                Аккаунт
                                <div className="nav__button-icon" />
                            </a>
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
                    <a href="/signup" className="nav__link">
                        Регистрация
                    </a>
                    <a
                        href="/signin"
                        className="nav__link nav__link_login"
                    >
                        Войти
                    </a>
                </div>
            )}
        </>
    );
}

export default Navigation;
