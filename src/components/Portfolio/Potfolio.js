import React from "react";
import "./Portfolio.css";

function Portfolio() {
    return (
        <div className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <div className="portfolio__link-item">
                <a href="https://riokko.github.io/how-to-learn/index.html" className="portfolio__link">
                    <span>Статичный сайт</span>
                    <span>↗</span>
                </a>
            </div>
            <div className="portfolio__link-item">
                <a href="https://riokko.github.io/russian-travel/index.html" className="portfolio__link">
                    <span>Адаптивный сайт</span>
                    <span>↗</span>
                </a>
            </div>
            <div className="portfolio__link-item">
                <a href="https://mesto.nomoredomains.icu/" className="portfolio__link">
                    <span>Одностраничное приложение</span>
                    <span>↗</span>
                </a>
            </div>
        </div>
    );
}

export default Portfolio;
