import React from "react";

import Row from "../Row";

function Promo() {
  return (
    <div className="promo">
      <Row>
        <h1 className="promo__title">{`Учебный проект студента факультета Веб\u2011разработки.`}</h1>
        <div className="promo__logo" />
        <h3 className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </h3>
        <button className="promo__button" type="button">Узнать больше</button>
      </Row>
    </div>
  );
}

export default Promo;
