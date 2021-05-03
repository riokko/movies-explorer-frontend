import React from "react";
import Row from "../Row";

function AboutMe() {
    return (
        <div className="about-me">
            <Row>
                <h2 className="main__title">Студент</h2>
                <div className="about-me__content">
                    <div className="about-me__content-details">
                        <div>
                            <h3 className="about-me__name">Дарья</h3>
                            <p className="about-me__profession">
                                Фронтенд-разработчик, 33 года
                            </p>
                            <p className="about-me__about">
                                Я родилась в городе Набережные Челны, Татарстан.
                                В 2008 году переехала в Москву. С 2019 года
                                работаю в HeadHunter'е на позиции Руководителя
                                направления обучения и развития. Нахожусь в
                                декрете — моему сыну 3,5 месяца, но работаю на
                                полставки.
                            </p>
                            <p className="about-me__about">
                                После прохождения курса по Веб-разработке в
                                Яндекс.Практикуме хочу найти новую работу в
                                качестве фронтенд-разработчика.
                            </p>
                        </div>
                        <ul className="about-me__links">
                            <li className="about-me__link-item">
                                <a href="/" className="about-me__link">
                                    Facebook
                                </a>
                            </li>
                            <li className="about-me__link-item">
                                <a href="/" className="about-me__link">
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="about-me__photo" />
                </div>
            </Row>
        </div>
    );
}

export default AboutMe;
