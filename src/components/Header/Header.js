import React, { useState } from "react";
import classnames from "classnames";
import Row from "../Row";
import { Link } from "react-router-dom";

function Header({ loggedIn }) {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  function handlerMenuVisibility() {
    setMenuIsVisible(!menuIsVisible);
  }
  return (
    <header className={loggedIn ? "header_loggedIn" : "header"}>
      <Row>
        <div className="row_header">
          <Link to="/" className="logo header__logo" />

          {loggedIn ? (
            <>
              <div
                className={classnames("header__nav", {
                  header__nav_is_visible: menuIsVisible,
                })}
              >
                <button
                  className="header__close-button"
                  onClick={handlerMenuVisibility}
                />
                <a href="/" className="header__link header__link_hidden">
                  Главная
                </a>
                <Link to="/movies" className="header__link">
                  Фильмы
                </Link>
                <a href="/saved-movies" className="header__link">
                  Сохранённые фильмы
                </a>
                <a href="/profile" className="header__link header__link_account">
                  Аккаунт
                  <div className="header__button-icon" />
                </a>
              </div>
              <button
                type="button"
                className="header__burger"
                onClick={handlerMenuVisibility}
              />
            </>
          ) : (
            <div className="header__nav">
              <a href="/signup" className="header__link">Регистрация</a>
              <a href="/signin" className="header__link header__link_login">
                Войти
              </a>
            </div>
          )}
        </div>
      </Row>
    </header>
  );
}

export default Header;
