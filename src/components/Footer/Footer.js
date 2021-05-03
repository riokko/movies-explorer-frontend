import React from "react";
import Row from "../Row";
import "./Footer.css"

function Footer() {
    return (
        <div className="footer">
            <Row>
                <p className="footer__title">
                    Учебный проект Яндекс.Практикум х BeatFilm.
                </p>
                <div className="footer__basement">
                    <span className="footer__copy">{`\u00A9 2021`}</span>
                    <ul className="footer__list">
                        <li className="footer__list-item">
                            <a href="/" className="footer__list-link">
                                Яндекс.Практикум
                            </a>
                        </li>
                        <li className="footer__list-item">
                            <a href="/" className="footer__list-link">
                                Github
                            </a>
                        </li>
                        <li className="footer__list-item">
                            <a href="/" className="footer__list-link">
                                Facebook
                            </a>
                        </li>
                    </ul>
                </div>
            </Row>
        </div>
    );
}

export default Footer;
