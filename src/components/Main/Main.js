import React, { useRef } from "react";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Potfolio";
import "./Main.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Row from "../Row";

function Main({ loggedIn }) {
    const anchor = useRef();
    const handleAnchorClick = () => {
        anchor.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <>
            <Header loggedIn={loggedIn} />
            <Promo handleClick={handleAnchorClick} />
            <Row>
                <AboutProject anchor={anchor} />
            </Row>
            <Techs />
            <Row>
                <AboutMe />
                <Portfolio />
                <Footer />
            </Row>
        </>
    );
}

export default Main;
