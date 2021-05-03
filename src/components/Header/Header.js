import React from "react";
import Row from "../Row";
import { Link, useRouteMatch } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn }) {
    const {isExact: isMainPage} = useRouteMatch("/");
    console.log(isMainPage)
    return (
        <header className={isMainPage ? "header" : "header_dark"}>
            <Row>
                <div className="row_header">
                    <Link to="/" className="logo header__logo" />
                    <Navigation loggedIn={loggedIn} />
                </div>
            </Row>
        </header>
    );
}

export default Header;
