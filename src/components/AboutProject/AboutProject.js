import React from "react";
import "./AboutProject.css";

function AboutProject() {
    return (
        <div className="about-project">
            <h2 className="main__title">О Проекте</h2>
            <div className="about-project__content">
                <div className="about-project__two-columns">
                    <div className="about-project__column">
                        <h3 className="about-project__column-title">
                            {`Дипломный проект включал 5\u00A0этапов`}
                        </h3>
                        <p className="about-project__column-text">
                            Составление плана, работу над бэкендом, вёрстку,
                            добавление функциональности и финальные доработки.
                        </p>
                    </div>
                    <div className="about-project__column">
                        <h3 className="about-project__column-title">
                            {`На выполнение диплома ушло 5\u00A0недель`}
                        </h3>

                        <p className="about-project__column-text">
                            У каждого этапа был мягкий и жёсткий дедлайн,
                            которые нужно было соблюдать, чтобы успешно
                            защититься.
                        </p>
                    </div>
                </div>
                <div className="about-project__timeline">
                    <div className="about-project__timeline-bar about-project__timeline-bar_1-week">
                        1 неделя
                    </div>
                    <div className="about-project__timeline-bar about-project__timeline-bar_4-weeks">
                        4 недели
                    </div>
                </div>
                <div className="about-project__timeline">
                    <div className="about-project__timeline-bar about-project__timeline-bar_backend">
                        Back-end
                    </div>
                    <div className="about-project__timeline-bar about-project__timeline-bar_frontend">
                        Front-end
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutProject;
