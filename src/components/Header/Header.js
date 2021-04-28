import React from "react";
import Row from "../Row";

function Header({ loggedIn }) {
  return (
    <header className={loggedIn ? "header_loggedIn" : "header"}>
      <Row>
        <div className="row_header">
          <div className="logo header__logo" />

          {loggedIn ? (
            <div className="header__nav">
              <div className="header__link">Фильмы</div>
              <div className="header__link">Сохранённые фильмы</div>
              <button
                className="header__button header__button_account"
                type="button"
              >
                Аккаунт
                <div className="header__button-icon" />
              </button>
            </div>
          ) : (
            <div className="header__nav">
              <div className="header__link">Регистрация</div>
              <button
                className="header__button header__button_login"
                type="button"
              >
                Войти
              </button>
            </div>
          )}
        </div>
      </Row>
    </header>
  );
}

export default Header;
