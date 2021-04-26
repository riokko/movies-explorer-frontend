import React from "react";
import Row from "../Row";

function Header() {
  return (
    <header className="header">
      <Row>
        <div className="row_header">
          <div className="logo header__logo"/>
          <div className="header__nav">
            <div>Регистрация</div>
            <button className="header__button">Войти</button>
          </div>
        </div>{" "}
      </Row>
    </header>
  );
}

export default Header;
