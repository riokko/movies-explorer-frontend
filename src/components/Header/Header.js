import React from "react";
import Row from "../Row";
import { Link, useRouteMatch } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn }) {
    const { isExact: isMainPage } = useRouteMatch("/");

    return (
        <header className={isMainPage ? "header" : "header_dark"}>
            <Row>
                <div className="header__content">
                    <Link to="/">
                        <div className="header__logo" />
                    </Link>
                    <Navigation loggedIn={loggedIn} />
                </div>
            </Row>
        </header>
    );
}

export default Header;
