import React from "react";
import Row from "../Row";
import { Link } from "react-router-dom";
import "./Header.css"
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn }) {
    return (
        <header className={loggedIn ? "header_loggedIn" : "header"}>
            <Row>
                <div className="row_header">
                    <Link to="/" className="logo header__logo" />
                    <Navigation loggedIn={loggedIn}/>

                </div>
            </Row>
        </header>
    );
}

export default Header;
