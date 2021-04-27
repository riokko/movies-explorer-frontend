import React from "react";
import Row from "../Row";

function AboutProject() {
  return (
    <div className="about-project">
      <Row>
        <h2 className="main__title">О Проекте</h2>
        <div className="about-project__content">
          <div className="about-project_two-columns">
            <h3 className="about-project_two-columns__title">
                {`Дипломный проект включал 5\u00A0этапов`}
            </h3>

            <h3 className="about-project_two-columns__title">
                {`На выполнение диплома ушло 5\u00A0недель`}
            </h3>
            <p className="about-project_two-columns__text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
            <p className="about-project_two-columns__text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
          <div className="about-project_timeline">
            <div className="about-project_timeline__1-week">1 неделя</div>
            <div className="about-project_timeline__4-weeks">4 недели</div>
          </div>
            <div className="about-project_timeline">
                <div className="about-project_timeline__backend">Back-end</div>
                <div className="about-project_timeline__frontend">Front-end</div>
            </div>
        </div>
      </Row>
    </div>
  );
}

export default AboutProject;
