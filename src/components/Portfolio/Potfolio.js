import React from "react";
import Row from "../Row";

function Portfolio() {
  return (
    <div className="portfolio">
      <Row>
        <h3 className="portfolio__title">Портфолио</h3>
        <div className="portfolio__link-item">
          <a href="/" className="portfolio__link">
            <span>Статичный сайт</span>
            <span>↗</span>
          </a>
        </div>
        <div className="portfolio__link-item">
          <a href="/" className="portfolio__link">
            <span>Адаптивный сайт</span>
            <span>↗</span>
          </a>
        </div>
        <div className="portfolio__link-item">
          <a href="/" className="portfolio__link">
            <span>Одностраничное приложение</span>
            <span>↗</span>
          </a>
        </div>
      </Row>
    </div>
  );
}

export default Portfolio;
